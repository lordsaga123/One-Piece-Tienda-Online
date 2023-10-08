// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXnbWj1fDla0uVdsMF5WN5EAu4l0uxuSE",
  authDomain: "one-piece-tienda-online.firebaseapp.com",
  projectId: "one-piece-tienda-online",
  storageBucket: "one-piece-tienda-online.appspot.com",
  messagingSenderId: "854808846126",
  appId: "1:854808846126:web:c559ee4f51db8e09dae4bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);