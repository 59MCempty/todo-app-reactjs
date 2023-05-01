// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCo5yr0NTraczH2woM1G9qxSHwsBZAQ-Vs",
    authDomain: "todo-app-d1cf2.firebaseapp.com",
    projectId: "todo-app-d1cf2",
    storageBucket: "todo-app-d1cf2.appspot.com",
    messagingSenderId: "760989330485",
    appId: "1:760989330485:web:8f7c1b5363e7efa77d157c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)