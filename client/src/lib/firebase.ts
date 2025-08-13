import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

/**
 * FIREBASE/ROWY CMS CONFIGURATION
 * 
 * This file configures Firebase connection for Rowy CMS integration.
 * Rowy provides a spreadsheet-like interface to manage your website content
 * stored in Firestore database.
 * 
 * Required Environment Variables:
 * - VITE_FIREBASE_API_KEY
 * - VITE_FIREBASE_AUTH_DOMAIN  
 * - VITE_FIREBASE_PROJECT_ID
 * - VITE_FIREBASE_STORAGE_BUCKET
 * - VITE_FIREBASE_MESSAGING_SENDER_ID
 * - VITE_FIREBASE_APP_ID
 * 
 * Setup Guide: See ROWY_CMS_SETUP.md for complete instructions
 */

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Validate configuration
const isConfigValid = () => {
  return Object.values(firebaseConfig).every(value => value && value !== '');
};

// Initialize Firebase only if configuration is valid
let app: any;
let db: any;

if (isConfigValid()) {
  try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    
    console.log('Firebase/Rowy CMS initialized successfully');
  } catch (error) {
    console.error('Firebase initialization error:', error);
  }
} else {
  console.warn('Firebase/Rowy CMS configuration incomplete. Content will use fallback data.');
}

export { db };
export const isFirebaseConfigured = () => !!db;