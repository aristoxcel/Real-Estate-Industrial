import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBYPpHr4UxUYNf-d-NONhCkVWJChw3q9SI",
  authDomain: "real-estate-industrial.firebaseapp.com",
  projectId: "real-estate-industrial",
  storageBucket: "real-estate-industrial.appspot.com",
  messagingSenderId: "1092599560817",
  appId: "1:1092599560817:web:e2843d64bea522769b39d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;