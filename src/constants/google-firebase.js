// Required for side-effects
import "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ394vtEPTX0ySBcGoB5Ygw1GThUhEsE4",
  authDomain: "fir-bd7fe.firebaseapp.com",
  projectId: "fir-bd7fe",
  storageBucket: "fir-bd7fe.appspot.com",
  messagingSenderId: "898838966275",
  appId: "1:898838966275:web:e23f0bed0fc18c65ec5e36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)