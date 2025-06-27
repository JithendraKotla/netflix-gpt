// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFqNiAKQtABxsRljzxA00S9Ym6mwDW6js",
  authDomain: "netflixgpt-7a967.firebaseapp.com",
  projectId: "netflixgpt-7a967",
  storageBucket: "netflixgpt-7a967.firebasestorage.app",
  messagingSenderId: "426489215046",
  appId: "1:426489215046:web:bdd2a4623d0c8d652f3247",
  measurementId: "G-S6X3FBPYRW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
