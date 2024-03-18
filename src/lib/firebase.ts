// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcTZwndUKtqPl2l5_4gWJORFgr3a4iiyU",
  authDomain: "svelte-course-ecb81.firebaseapp.com",
  projectId: "svelte-course-ecb81",
  storageBucket: "svelte-course-ecb81.appspot.com",
  messagingSenderId: "929869298127",
  appId: "1:929869298127:web:f4d1b22f2632cbce473aba",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();