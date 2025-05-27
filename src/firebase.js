// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwKYJ88Au1aVq-fHbVqTDFMqZY_5FPcPc",
  authDomain: "pelatihan-sintak.firebaseapp.com",
  projectId: "pelatihan-sintak",
  storageBucket: "pelatihan-sintak.firebasestorage.app",
  messagingSenderId: "897067534772",
  appId: "1:897067534772:web:612793eba100d18dfb8ae1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export{db};