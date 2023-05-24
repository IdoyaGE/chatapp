import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRxOIojBhVPIStDwX86IdSUqw3D6y83TQ",
  authDomain: "chatapp-8b856.firebaseapp.com",
  projectId: "chatapp-8b856",
  storageBucket: "chatapp-8b856.appspot.com",
  messagingSenderId: "84825480899",
  appId: "1:84825480899:web:66a295c19e34b88e15cc76",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
