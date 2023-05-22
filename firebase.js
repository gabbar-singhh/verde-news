import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCQFbyabTA3qMmuv3muaX_iVrCHBbUD7oU",
  authDomain: "theverdenews.firebaseapp.com",
  projectId: "theverdenews",
  storageBucket: "theverdenews.appspot.com",
  messagingSenderId: "114618952588",
  appId: "1:114618952588:web:44d2fa2b6cf9bab2cd04a9",
  measurementId: "G-QPMVD4ZW6L",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
