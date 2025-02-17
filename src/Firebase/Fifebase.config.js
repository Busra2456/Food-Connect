// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkvplHy8zYWv-ELu8g0lclyC8WkyIwXLY",
  authDomain: "foot-connect-95c3a.firebaseapp.com",
  projectId: "foot-connect-95c3a",
  storageBucket: "foot-connect-95c3a.firebasestorage.app",
  messagingSenderId: "1040103084084",
  appId: "1:1040103084084:web:6af24e2f618a427d377a61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app