import {
  signInWithPhoneNumber,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth, RecaptchaVerifier } from '../firebase.js';
import { isDemoMode } from '../config/env.js';
import {
  signInDemoRole,
  signInDemoWithEmail,
  signOutDemo,
  listenAuthDemo,
  isDemoSessionValid,
  DEMO_ROLES,
  getDemoCurrentUser
} from './demoAuthService.js';

const SESSION_HOURS = 12;
const LS_KEY = 'hbs_login_time';

export const renderRecaptcha = (containerId = 'recaptcha-container') => {
  if (isDemoMode()) {
    return {
      verify: async () => 'demo-recaptcha-token',
      clear: () => {}
    };
  }
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, containerId, {
      size: 'invisible'
    });
  }
  return window.recaptchaVerifier;
};

export const sendOtp = async (phoneNumber) => {
  if (!/^\+\d{10,15}$/.test(phoneNumber)) {
    throw new Error('Enter phone with country code, e.g. +9198xxxxxx');
  }

  if (isDemoMode()) {
    // Simulated OTP for demo users
    return {
      confirm: async (code) => {
        if (code === '123456' || code.length === 6) {
          return signInDemoRole('owner');
        }
        throw new Error('Invalid demo OTP. Use 123456 for instant demo access.');
      }
    };
  }

  const verifier = renderRecaptcha();
  await verifier.verify();
  try {
    return await signInWithPhoneNumber(auth, phoneNumber, verifier);
  } catch (err) {
    try { verifier.clear(); window.recaptchaVerifier = null; } catch (_) {}
    throw err;
  }
};

export const verifyOtp = async (confirmationResult, code) => {
  const result = await confirmationResult.confirm(code);
  localStorage.setItem(LS_KEY, Date.now().toString());
  return result;
};

export const signInWithEmail = async (email, password) => {
  if (isDemoMode()) {
    return signInDemoWithEmail(email, password);
  }

  const cred = await signInWithEmailAndPassword(auth, email, password);
  localStorage.setItem(LS_KEY, Date.now().toString());
  return cred;
};

export const isSessionValid = () => {
  if (isDemoMode()) {
    return isDemoSessionValid();
  }

  const ts = Number(localStorage.getItem(LS_KEY));
  if (!ts) return false;
  const diffHours = (Date.now() - ts) / (1000 * 60 * 60);
  return diffHours < SESSION_HOURS;
};

export const listenAuth = (cb) => {
  if (isDemoMode()) {
    return listenAuthDemo(cb);
  }

  if (!auth) {
    cb(null);
    return () => {};
  }
  return onAuthStateChanged(auth, cb);
};

export const logout = async () => {
  if (isDemoMode()) {
    return signOutDemo();
  }

  localStorage.removeItem(LS_KEY);
  if (auth) {
    await signOut(auth);
  }
};

export { signInDemoRole, DEMO_ROLES, getDemoCurrentUser };
