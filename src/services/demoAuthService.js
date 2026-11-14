/**
 * Demo Authentication Service
 * Manages zero-friction, isolated multi-role authentication for recruiters and visitors.
 */

const STORAGE_KEY_DEMO_USER = 'hbs_demo_user';
const STORAGE_KEY_LOGIN_TIME = 'hbs_login_time';

export const DEMO_ROLES = {
  owner: {
    id: 'demo-owner',
    email: 'owner@raghavendramess.demo',
    password: 'demopassword',
    displayName: 'Mess Owner / Admin',
    role: 'owner',
    badge: '👑 Owner / Admin',
    description: 'Full permissions: Menu, Billing, Expenses, Auditing, and Data Reset',
    permissions: ['menu', 'update', 'orders', 'accounts', 'reset', 'delete_expense']
  },
  cashier: {
    id: 'demo-cashier',
    email: 'cashier@raghavendramess.demo',
    password: 'demopassword',
    displayName: 'Counter Cashier',
    role: 'cashier',
    badge: '⚡ Cashier',
    description: 'Counter POS Billing, Order Taking, Cash/UPI settlement',
    permissions: ['menu', 'orders']
  },
  auditor: {
    id: 'demo-auditor',
    email: 'auditor@raghavendramess.demo',
    password: 'demopassword',
    displayName: 'Accounts Auditor',
    role: 'auditor',
    badge: '📊 Auditor',
    description: 'Financial Reviews, Profit Breakdown, CSV & PDF Exports',
    permissions: ['accounts', 'orders']
  }
};

const authListeners = new Set();

const notifyAuth = (user) => {
  authListeners.forEach(cb => {
    try {
      cb(user);
    } catch (e) {
      console.error('[DemoAuth] Listener error:', e);
    }
  });
};

export const getDemoCurrentUser = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_DEMO_USER);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn('[DemoAuth] Failed to parse demo user:', e);
  }
  return null;
};

export const signInDemoRole = async (roleKey = 'owner') => {
  const roleConfig = DEMO_ROLES[roleKey] || DEMO_ROLES.owner;
  const user = {
    uid: roleConfig.id,
    email: roleConfig.email,
    displayName: roleConfig.displayName,
    role: roleConfig.role,
    permissions: roleConfig.permissions,
    isDemo: true
  };

  localStorage.setItem(STORAGE_KEY_DEMO_USER, JSON.stringify(user));
  localStorage.setItem(STORAGE_KEY_LOGIN_TIME, Date.now().toString());

  notifyAuth(user);
  return { user };
};

export const signInDemoWithEmail = async (email, password) => {
  const cleanEmail = (email || '').trim().toLowerCase();
  const matchedRole = Object.values(DEMO_ROLES).find(
    r => r.email.toLowerCase() === cleanEmail
  );

  // Allow any matching demo persona, or default to owner if testing arbitrary demo email
  if (matchedRole) {
    return signInDemoRole(matchedRole.role);
  }

  // If visitor enters any test email in demo mode, authenticate them cleanly as owner guest
  const user = {
    uid: `demo_user_${Date.now()}`,
    email: cleanEmail || 'guest@raghavendramess.demo',
    displayName: 'Demo Guest User',
    role: 'owner',
    permissions: DEMO_ROLES.owner.permissions,
    isDemo: true
  };

  localStorage.setItem(STORAGE_KEY_DEMO_USER, JSON.stringify(user));
  localStorage.setItem(STORAGE_KEY_LOGIN_TIME, Date.now().toString());

  notifyAuth(user);
  return { user };
};

export const signOutDemo = async () => {
  localStorage.removeItem(STORAGE_KEY_DEMO_USER);
  localStorage.removeItem(STORAGE_KEY_LOGIN_TIME);
  notifyAuth(null);
};

export const listenAuthDemo = (cb) => {
  authListeners.add(cb);
  const current = getDemoCurrentUser();
  setTimeout(() => cb(current), 0);
  return () => {
    authListeners.delete(cb);
  };
};

export const isDemoSessionValid = () => {
  const ts = Number(localStorage.getItem(STORAGE_KEY_LOGIN_TIME));
  if (!ts) return false;
  const diffHours = (Date.now() - ts) / (1000 * 60 * 60);
  return diffHours < 24; // 24 hour convenient demo session
};

