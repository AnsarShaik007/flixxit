// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_Jr8_BRFdF7qkFOAr_H9hNiGg9QjhlwY",
  authDomain: "flixxit-8f9ec.firebaseapp.com",
  projectId: "flixxit-8f9ec",
  storageBucket: "flixxit-8f9ec.appspot.com",
  messagingSenderId: "134845594007",
  appId: "1:134845594007:web:752f026738a84500a9acd2",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
