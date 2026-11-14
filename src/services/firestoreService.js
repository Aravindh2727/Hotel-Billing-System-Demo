import {
  collection, addDoc, updateDoc, deleteDoc, doc,
  onSnapshot, query, where, orderBy, serverTimestamp, limit
} from 'firebase/firestore';
import { db } from '../firebase.js';
import { isDemoMode } from '../config/env.js';
import {
  listenMenuDemo,
  addMenuItemDemo,
  updateMenuItemDemo,
  deleteMenuItemDemo,
  addBillDemo,
  addExpenseDemo,
  updateExpenseDemo,
  deleteExpenseDemo,
  listenBillsByDateDemo,
  listenExpensesByDateDemo,
  listenRecentBillsDemo,
  listenRecentExpensesDemo,
  listenDailySummaryRecentDemo,
  resetDemoData
} from './demoStoreService.js';

// Lazily get Firestore collections in production
const getMenuCol = () => collection(db, 'menu');
const getBillsCol = () => collection(db, 'bills');
const getExpensesCol = () => collection(db, 'expenses');
const getSummaryCol = () => collection(db, 'daily_summary');

export const listenMenu = (sessionType, cb) => {
  if (isDemoMode()) {
    return listenMenuDemo(sessionType, cb);
  }
  return onSnapshot(
    query(getMenuCol(), where('sessionType', '==', sessionType), orderBy('createdAt', 'asc')),
    cb
  );
};

export const addMenuItem = (data) => {
  if (isDemoMode()) {
    return addMenuItemDemo(data);
  }
  return addDoc(getMenuCol(), { ...data, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
};

export const updateMenuItem = (id, data) => {
  if (isDemoMode()) {
    return updateMenuItemDemo(id, data);
  }
  return updateDoc(doc(getMenuCol(), id), { ...data, updatedAt: serverTimestamp() });
};

export const deleteMenuItem = (id) => {
  if (isDemoMode()) {
    return deleteMenuItemDemo(id);
  }
  return deleteDoc(doc(getMenuCol(), id));
};

export const addBill = (payload) => {
  if (isDemoMode()) {
    return addBillDemo(payload);
  }
  return addDoc(getBillsCol(), { ...payload, createdAt: serverTimestamp() });
};

export const addExpense = (payload) => {
  if (isDemoMode()) {
    return addExpenseDemo(payload);
  }
  return addDoc(getExpensesCol(), { ...payload, createdAt: serverTimestamp() });
};

export const updateExpense = (id, data) => {
  if (isDemoMode()) {
    return updateExpenseDemo(id, data);
  }
  return updateDoc(doc(getExpensesCol(), id), { ...data, updatedAt: serverTimestamp() });
};

export const deleteExpense = (id) => {
  if (isDemoMode()) {
    return deleteExpenseDemo(id);
  }
  return deleteDoc(doc(getExpensesCol(), id));
};

export const listenBillsByDate = (dateKey, cb) => {
  if (isDemoMode()) {
    return listenBillsByDateDemo(dateKey, cb);
  }
  return onSnapshot(query(getBillsCol(), where('createdDate', '==', dateKey)), cb);
};

export const listenExpensesByDate = (dateKey, cb) => {
  if (isDemoMode()) {
    return listenExpensesByDateDemo(dateKey, cb);
  }
  return onSnapshot(query(getExpensesCol(), where('expenseDate', '==', dateKey)), cb);
};

export const listenRecentBills = (cb) => {
  if (isDemoMode()) {
    return listenRecentBillsDemo(cb);
  }
  return onSnapshot(query(getBillsCol(), orderBy('createdAt', 'desc'), limit(400)), cb);
};

export const listenRecentExpenses = (cb) => {
  if (isDemoMode()) {
    return listenRecentExpensesDemo(cb);
  }
  return onSnapshot(query(getExpensesCol(), orderBy('expenseDate', 'desc'), limit(400)), cb);
};

export const listenDailySummaryRecent = (cb) => {
  if (isDemoMode()) {
    return listenDailySummaryRecentDemo(cb);
  }
  return onSnapshot(query(getSummaryCol(), orderBy('date', 'desc'), limit(30)), cb);
};

export { resetDemoData };
