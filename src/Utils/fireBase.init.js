// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALxjDqKLWd96GvdhUi3C4Oa6b1vCU6HpE",
  authDomain: "private-route-ea970.firebaseapp.com",
  projectId: "private-route-ea970",
  storageBucket: "private-route-ea970.firebasestorage.app",
  messagingSenderId: "893392860459",
  appId: "1:893392860459:web:8733cbef635451399b016e",
  measurementId: "G-JNT0ZG8QZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);