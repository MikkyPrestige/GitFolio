// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgm7GIcWnTxPDIHPJL_SPZhI31giLAYu4",
  authDomain: "github-repos-display.firebaseapp.com",
  projectId: "github-repos-display",
  storageBucket: "github-repos-display.appspot.com",
  messagingSenderId: "465004654869",
  appId: "1:465004654869:web:aeea562624045e7b42791c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;