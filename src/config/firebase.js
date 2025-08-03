// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8IBgrgpX1lTPu5O-9aEMTE8vL6AzeMoc",
  authDomain: "nirubhama-s-cloud.firebaseapp.com",
  projectId: "nirubhama-s-cloud",
  storageBucket: "nirubhama-s-cloud.firebasestorage.app",
  messagingSenderId: "891921456489",
  appId: "1:891921456489:web:fa0a8e86a2aad5a0abb1f8",
  measurementId: "G-CMQJ2WW4LJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const AuthProvider=new GoogleAuthProvider()