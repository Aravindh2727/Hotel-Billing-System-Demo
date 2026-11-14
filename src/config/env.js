/**
 * Application Environment and Mode Configuration
 * Supports both build-time configuration (VITE_APP_MODE)
 * and runtime switching (URL query `?mode=demo` or localStorage toggle)
 * to ensure recruiters and visitors can test the demo anytime.
 */

const STORAGE_KEY_MODE = 'hbs_app_mode';

const getEnvVar = (key, fallback = '') => {
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key] !== undefined) {
    return import.meta.env[key];
  }
  if (typeof process !== 'undefined' && process.env && process.env[key] !== undefined) {
    return process.env[key];
  }
  return fallback;
};

// Detect whether running in demo mode
export const getAppMode = () => {
  // 1. Check URL search params (?mode=demo or ?mode=production)
  if (typeof window !== 'undefined' && window.location) {
    const params = new URLSearchParams(window.location.search);
    const queryMode = params.get('mode');
    if (queryMode === 'demo' || queryMode === 'production') {
      if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY_MODE, queryMode);
      return queryMode;
    }

    // 2. Check localStorage override
    if (typeof localStorage !== 'undefined') {
      const storedMode = localStorage.getItem(STORAGE_KEY_MODE);
      if (storedMode === 'demo' || storedMode === 'production') {
        return storedMode;
      }
    }
  }

  // 3. Fallback to build-time Vite environment variable
  const buildMode = getEnvVar('VITE_APP_MODE');
  if (buildMode === 'production') return 'production';
  if (buildMode === 'demo') return 'demo';

  // Default to demo mode if not explicitly set to production,
  // ensuring public visitors/recruiters have a seamless zero-friction experience
  return 'demo';
};

export const isDemoMode = () => getAppMode() === 'demo';

export const setAppMode = (mode) => {
  if (mode !== 'demo' && mode !== 'production') return;
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY_MODE, mode);
  }
  if (typeof window !== 'undefined' && window.location) {
    window.location.reload();
  }
};

export const config = {
  mode: getAppMode(),
  isDemo: isDemoMode(),
  firebase: {
    apiKey: getEnvVar('VITE_FIREBASE_API_KEY', "AIzaSyATImZKj-kISPLYR68wDnmZPNsnItXdiZ4"),
    authDomain: getEnvVar('VITE_FIREBASE_AUTH_DOMAIN', "sri-raghavendra-mess-billing.firebaseapp.com"),
    projectId: getEnvVar('VITE_FIREBASE_PROJECT_ID', "sri-raghavendra-mess-billing"),
    storageBucket: getEnvVar('VITE_FIREBASE_STORAGE_BUCKET', "sri-raghavendra-mess-billing.firebasestorage.app"),
    messagingSenderId: getEnvVar('VITE_FIREBASE_MESSAGING_SENDER_ID', "225930121586"),
    appId: getEnvVar('VITE_FIREBASE_APP_ID', "1:225930121586:web:5356dc0465009441128deb"),
    measurementId: getEnvVar('VITE_FIREBASE_MEASUREMENT_ID', "G-Z2ZSHZNH5H")
  }
};
