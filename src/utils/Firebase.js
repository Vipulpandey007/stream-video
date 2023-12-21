// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlkaefYDzXDW6XZQeELpv-ZY1IRLH7tXc",
  authDomain: "streamvideo-dddca.firebaseapp.com",
  projectId: "streamvideo-dddca",
  storageBucket: "streamvideo-dddca.appspot.com",
  messagingSenderId: "170844596377",
  appId: "1:170844596377:web:627158e668d81b9127f008",
  measurementId: "G-P08GCGYL34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
