// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDXneBBh4SBkvD4S6BgEbX3_kDRwhiiXBw",
    authDomain: "projetop1-de6a3.firebaseapp.com",
    projectId: "projetop1-de6a3",
    storageBucket: "projetop1-de6a3.appspot.com",
    messagingSenderId: "688958281412",
    appId: "1:688958281412:web:9dd6b08ea3bbe2b9fe9b91",
    measurementId: "G-T2T4WTQXP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);