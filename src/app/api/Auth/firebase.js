// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTcHBfXkp5xfwvzlJDEKZqW-QbZvxn2yY",
  authDomain: "your-ecommerce-store.firebaseapp.com",
  projectId: "your-ecommerce-store",
  storageBucket: "your-ecommerce-store.appspot.com",
  messagingSenderId: "387499780023",
  appId: "1:387499780023:web:4793d84dbd9a0f76cdaa32",
  measurementId: "G-JHVFNPD2QB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;