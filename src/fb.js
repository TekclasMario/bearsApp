import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDXVipiHFZr-iz8sNaYcnFZUrTOpHsl0Iw",
  authDomain: "freshness-bear.firebaseapp.com",
  databaseURL: "https://freshness-bear.firebaseio.com",
  projectId: "freshness-bear",
  storageBucket: "freshness-bear.appspot.com",
  messagingSenderId: "578192013074"
};

firebase.initializeApp(config);
const db = firebase.firestore();
const auth = firebase.auth();

export default db;
