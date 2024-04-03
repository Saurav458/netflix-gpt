// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXvWTI0FH0-1oGsCMxg8morGUizqMdOns",
  authDomain: "netflixgpt-3d8c2.firebaseapp.com",
  projectId: "netflixgpt-3d8c2",
  storageBucket: "netflixgpt-3d8c2.appspot.com",
  messagingSenderId: "760077368857",
  appId: "1:760077368857:web:37ae7c414731836ff43488",
  measurementId: "G-E1J9FN9Z8Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
