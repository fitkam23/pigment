import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBXadyvJKSL4tLujZ2WLmOwzYc-qmwFUyc",
    authDomain: "pigment-paint.firebaseapp.com",
    projectId: "pigment-paint",
    storageBucket: "pigment-paint.firebasestorage.app",
    messagingSenderId: "337083068856",
    appId: "1:337083068856:web:2a15eea56beea594cb5f4d",
    measurementId: "G-2XMVD4ZH2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export service biar bisa dipake di app.js
export const auth = getAuth(app);
export const db = getFirestore(app);