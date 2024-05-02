// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpIOAuk_Rx80xM2Bcv3x3KgIKO9vaMX3k",
    authDomain: "warehouse-management-92018.firebaseapp.com",
    projectId: "warehouse-management-92018",
    storageBucket: "warehouse-management-92018.appspot.com",
    messagingSenderId: "145966802590",
    appId: "1:145966802590:web:1470dd1fd38a370d31fd8f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;