// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLqIvjWp5fRTdU9UCAO4ywoBzZuyJ40pE",
  authDomain: "app-gastos-c7c8a.firebaseapp.com",
  projectId: "app-gastos-c7c8a",
  storageBucket: "app-gastos-c7c8a.appspot.com",
  messagingSenderId: "912150381922",
  appId: "1:912150381922:web:67223f0751946678e7983b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
export { db, auth };
