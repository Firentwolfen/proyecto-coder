// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiixsOV6gkVExm-5KJrWGFYpRPTtFDmKM",
  authDomain: "pokemart-app-35df8.firebaseapp.com",
  projectId: "pokemart-app-35df8",
  storageBucket: "pokemart-app-35df8.appspot.com",
  messagingSenderId: "579451566062",
  appId: "1:579451566062:web:fe2326d70397bc2bc880ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()