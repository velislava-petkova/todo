// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwV2-dE6j-JhewD0WQu8bioDzIvEg9Fbc",
  authDomain: "to-do-web-app-93058.firebaseapp.com",
  projectId: "to-do-web-app-93058",
  storageBucket: "to-do-web-app-93058.appspot.com",
  messagingSenderId: "1022806491507",
  appId: "1:1022806491507:web:2ea621710959cfdae30506",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
