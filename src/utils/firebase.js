// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "netmini-f2f72.firebaseapp.com",
  projectId: "netmini-f2f72",
  storageBucket: "netmini-f2f72.firebasestorage.app",
  messagingSenderId: "885289872638",
  appId: "1:885289872638:web:59252802fba5e4508189af",
  measurementId: "G-WDJ50BMJCE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
