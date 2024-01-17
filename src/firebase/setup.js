// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsx0y9vXYQKQUdrJPSOzyY6gZ38NqF_LA",
  authDomain: "whatsapp-clone-81c49.firebaseapp.com",
  projectId: "whatsapp-clone-81c49",
  storageBucket: "whatsapp-clone-81c49.appspot.com",
  messagingSenderId: "783119402397",
  appId: "1:783119402397:web:d7f27d0a79aac3e16c9b74",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
