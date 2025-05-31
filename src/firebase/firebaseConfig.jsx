// src/firebaseconfig.jsx
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSJEsd08w3za_6cbA93lzkmLpcY_BG834",
  authDomain: "ag-tech-48479.firebaseapp.com",
  projectId: "ag-tech-48479",
  storageBucket: "ag-tech-48479.firebasestorage.app",
  messagingSenderId: "344613489408",
  appId: "1:344613489408:android:944b505d91ca689e0f01e5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
