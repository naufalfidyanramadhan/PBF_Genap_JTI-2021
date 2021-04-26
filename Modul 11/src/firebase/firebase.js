import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfBuKnJYFqJHiIqHeteKEOaWYtVeSFchI",
    authDomain: "fir-login-pbf-407bc.firebaseapp.com",
    databaseURL: "https://fir-login-pbf-407bc-default-rtdb.firebaseio.com",
    projectId: "fir-login-pbf-407bc",
    storageBucket: "fir-login-pbf-407bc.appspot.com",
    messagingSenderId: "962078208446",
    appId: "1:962078208446:web:c2e0af9f8da84a380649ef",
    measurementId: "G-8MCBVWH56C"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;