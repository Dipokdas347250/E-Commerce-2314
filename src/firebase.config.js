// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_b0EvNsrOt6oTAeyfByNic4aKy3i8-dM",
  authDomain: "fdr-2314-e-commerce.firebaseapp.com",
  projectId: "fdr-2314-e-commerce",
  storageBucket: "fdr-2314-e-commerce.appspot.com",
  messagingSenderId: "151450768917",
  appId: "1:151450768917:web:a0ac2e947d816bdce9201c",
  measurementId: "G-R3QVR0X46Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export default firebaseConfig