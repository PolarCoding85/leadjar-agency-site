import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCmhkei_HTkcnliyb7vgYyvxksHdeu-aZE",
    authDomain: "fir-auth-d69ef.firebaseapp.com",
    databaseURL: "https://fir-auth-d69ef.firebaseio.com",
    projectId: "fir-auth-d69ef",
    storageBucket: "fir-auth-d69ef.appspot.com",
    messagingSenderId: "886895133667",
    appId: "1:886895133667:web:1d292c2839d219f7e016d6",
    measurementId: "G-3N85H0QMSN"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;