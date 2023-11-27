import { initializeApp } from "firebase/app";
import { GoogleAuthProvider , getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDf2BAv5gQZIcsuBLbBBUvHM4m0aEtfFIU",
  authDomain: "auth-b61a2.firebaseapp.com",
  projectId: "auth-b61a2",
  storageBucket: "auth-b61a2.appspot.com",
  messagingSenderId: "1046091614151",
  appId: "1:1046091614151:web:baa71d027559befd4abbe2",
  measurementId: "G-E5JH70PE4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
export default app;