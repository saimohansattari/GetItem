// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI9CqCwGMDs-oZy24KlNMky2-u7LGHOAs",
  authDomain: "getitem-25269.firebaseapp.com",
  projectId: "getitem-25269",
  storageBucket: "getitem-25269.appspot.com",
  messagingSenderId: "279317927784",
  appId: "1:279317927784:web:184602b2190b18b7f868dd",
  measurementId: "G-ER5PDJMR0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore()