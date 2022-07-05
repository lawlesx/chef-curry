// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIUlUr_bZ8YARN6jiHjatlN8PTk_wFJbQ",
  authDomain: "awp-project-257f3.firebaseapp.com",
  projectId: "awp-project-257f3",
  storageBucket: "awp-project-257f3.appspot.com",
  messagingSenderId: "1050773002318",
  appId: "1:1050773002318:web:aecb5b0d26fe732d374b1f",
  measurementId: "G-RB8TR2919Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)