// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-588dd.firebaseapp.com",
  projectId: "mern-estate-588dd",
  storageBucket: "mern-estate-588dd.firebasestorage.app",
  messagingSenderId: "238640592398",
  appId: "1:238640592398:web:ce9374ea31c96f6f0cee5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };