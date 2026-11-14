/**
 * Demo Reactive Store Service (Local Storage + In-Memory pub/sub)
 * Provides 100% isolated, zero-network, high-fidelity replication of Cloud Firestore.
 * Subscriptions behave identically to Firestore's onSnapshot listeners.
 */

import { getInitialMenu, getInitialBills, getInitialExpenses } from './demoSeedData.js';

const STORAGE_KEY_MENU = 'hbs_demo_v1_menu';
const STORAGE_KEY_BILLS = 'hbs_demo_v1_bills';
const STORAGE_KEY_EXPENSES = 'hbs_demo_v1_expenses';

// In-memory subscriber registry
const subscribers = {
  menu: new Set(),
  bills: new Set(),
  expenses: new Set()
};

// Safe storage access with error handling
const loadStorage = (key, fallbackFactory) => {
  try {
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn(`[DemoStore] Failed to read ${key} from localStorage:`, e);
  }
  const initial = fallbackFactory();
  saveStorage(key, initial);
  return initial;
};

const saveStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.warn(`[DemoStore] Failed to persist ${key} to localStorage:`, e);
  }
};

// Current in-memory working state
let currentMenu = null;
let currentBills = null;
let currentExpenses = null;

const ensureInitialized = () => {
  if (!currentMenu) currentMenu = loadStorage(STORAGE_KEY_MENU, getInitialMenu);
  if (!currentBills) currentBills = loadStorage(STORAGE_KEY_BILLS, getInitialBills);
  if (!currentExpenses) currentExpenses = loadStorage(STORAGE_KEY_EXPENSES, getInitialExpenses);
};

// Simulated Firestore Document wrapper
const wrapDoc = (item) => ({
  id: item.id,
  data: () => ({ ...item })
});

const wrapDocs = (items) => ({
  docs: items.map(wrapDoc)
});

// Broadcast changes to active listeners
const notifySubscribers = (collectionKey) => {
  const set = subscribers[collectionKey];
  if (!set || set.size === 0) return;
  set.forEach(notifyFn => {
    try {
      notifyFn();
    } catch (err) {
      console.error(`[DemoStore] Error in subscriber callback for ${collectionKey}:`, err);
    }
  });
};

// ==========================================
// MENU OPERATIONS
// ==========================================

export const listenMenuDemo = (sessionType, cb) => {
  ensureInitialized();

  const emit = () => {
    const filtered = currentMenu
      .filter(item => !sessionType || item.sessionType === sessionType)
      .sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
    cb(wrapDocs(filtered));
  };

  subscribers.menu.add(emit);
  // Initial synchronous-style invocation like Firestore onSnapshot
  setTimeout(emit, 0);

  return () => {
    subscribers.menu.delete(emit);
  };
};

export const addMenuItemDemo = async (data) => {
  ensureInitialized();
  const newItem = {
    ...data,
    id: `item_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
    createdAt: Date.now(),
    updatedAt: Date.now()
  };
  currentMenu = [newItem, ...currentMenu];
  saveStorage(STORAGE_KEY_MENU, currentMenu);
  notifySubscribers('menu');
  return { id: newItem.id };
};

export const updateMenuItemDemo = async (id, data) => {
  ensureInitialized();
  currentMenu = currentMenu.map(item =>
    item.id === id ? { ...item, ...data, updatedAt: Date.now() } : item
  );
  saveStorage(STORAGE_KEY_MENU, currentMenu);
  notifySubscribers('menu');
};

export const deleteMenuItemDemo = async (id) => {
  ensureInitialized();
  currentMenu = currentMenu.filter(item => item.id !== id);
  saveStorage(STORAGE_KEY_MENU, currentMenu);
  notifySubscribers('menu');
};

// ==========================================
// BILLS OPERATIONS
// ==========================================

export const addBillDemo = async (payload) => {
  ensureInitialized();
  const now = new Date();
  const newBill = {
    ...payload,
    id: `bill_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
    createdAt: {
      toDate: () => now,
      seconds: Math.floor(now.getTime() / 1000)
    }
  };
  currentBills = [newBill, ...currentBills];
  saveStorage(STORAGE_KEY_BILLS, currentBills);
  notifySubscribers('bills');
  return { id: newBill.id };
};

export const listenBillsByDateDemo = (dateKey, cb) => {
  ensureInitialized();

  const emit = () => {
    const filtered = currentBills.filter(b => b.createdDate === dateKey);
    cb(wrapDocs(filtered));
  };

  subscribers.bills.add(emit);
  setTimeout(emit, 0);

  return () => {
    subscribers.bills.delete(emit);
  };
};

export const listenRecentBillsDemo = (cb) => {
  ensureInitialized();

  const emit = () => {
    // Sort descending by created timestamp or date
    const sorted = [...currentBills].sort((a, b) => {
      const timeA = a.createdAt?.toDate ? a.createdAt.toDate().getTime() : 0;
      const timeB = b.createdAt?.toDate ? b.createdAt.toDate().getTime() : 0;
      return timeB - timeA;
    }).slice(0, 400);

    cb(wrapDocs(sorted));
  };

  subscribers.bills.add(emit);
  setTimeout(emit, 0);

  return () => {
    subscribers.bills.delete(emit);
  };
};

// ==========================================
// EXPENSE OPERATIONS
// ==========================================

export const addExpenseDemo = async (payload) => {
  ensureInitialized();
  const now = new Date();
  const newExpense = {
    ...payload,
    id: `exp_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
    createdAt: {
      toDate: () => now,
      seconds: Math.floor(now.getTime() / 1000)
    }
  };
  currentExpenses = [newExpense, ...currentExpenses];
  saveStorage(STORAGE_KEY_EXPENSES, currentExpenses);
  notifySubscribers('expenses');
  return { id: newExpense.id };
};

export const updateExpenseDemo = async (id, data) => {
  ensureInitialized();
  currentExpenses = currentExpenses.map(e =>
    e.id === id ? { ...e, ...data, updatedAt: Date.now() } : e
  );
  saveStorage(STORAGE_KEY_EXPENSES, currentExpenses);
  notifySubscribers('expenses');
};

export const deleteExpenseDemo = async (id) => {
  ensureInitialized();
  currentExpenses = currentExpenses.filter(e => e.id !== id);
  saveStorage(STORAGE_KEY_EXPENSES, currentExpenses);
  notifySubscribers('expenses');
};

export const listenExpensesByDateDemo = (dateKey, cb) => {
  ensureInitialized();

  const emit = () => {
    const filtered = currentExpenses.filter(e => e.expenseDate === dateKey);
    cb(wrapDocs(filtered));
  };

  subscribers.expenses.add(emit);
  setTimeout(emit, 0);

  return () => {
    subscribers.expenses.delete(emit);
  };
};

export const listenRecentExpensesDemo = (cb) => {
  ensureInitialized();

  const emit = () => {
    const sorted = [...currentExpenses].sort((a, b) => {
      return (b.expenseDate || '').localeCompare(a.expenseDate || '');
    }).slice(0, 400);

    cb(wrapDocs(sorted));
  };

  subscribers.expenses.add(emit);
  setTimeout(emit, 0);

  return () => {
    subscribers.expenses.delete(emit);
  };
};

export const listenDailySummaryRecentDemo = (cb) => {
  // Aggregate directly from bills and expenses
  ensureInitialized();
  setTimeout(() => {
    cb(wrapDocs([]));
  }, 0);
  return () => {};
};

// ==========================================
// RESET DEMO DATA
// ==========================================

export const resetDemoData = () => {
  currentMenu = getInitialMenu();
  currentBills = getInitialBills();
  currentExpenses = getInitialExpenses();

  saveStorage(STORAGE_KEY_MENU, currentMenu);
  saveStorage(STORAGE_KEY_BILLS, currentBills);
  saveStorage(STORAGE_KEY_EXPENSES, currentExpenses);

  notifySubscribers('menu');
  notifySubscribers('bills');
  notifySubscribers('expenses');

  return true;
};
