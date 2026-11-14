import { initializeApp, getApps } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence, RecaptchaVerifier } from 'firebase/auth';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { config, isDemoMode } from './config/env.js';

let app = null;
let auth = null;
let db = null;
let storage = null;

// Only initialize live Firebase when in production mode or when valid credentials are provided
if (!isDemoMode()) {
  try {
    app = getApps().length === 0 ? initializeApp(config.firebase) : getApps()[0];
    auth = getAuth(app);
    setPersistence(auth, browserLocalPersistence).catch(err => {
      console.warn('[Firebase] setPersistence error:', err);
    });
    db = getFirestore(app);
    storage = getStorage(app);
  } catch (err) {
    console.warn('[Firebase] Production initialization error:', err);
  }
}

export const getTimestamp = serverTimestamp;
export { auth, db, storage, RecaptchaVerifier };
