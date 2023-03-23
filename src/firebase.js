import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZOZwkeBsc_KX4IEU2OuR8foL3RiKBWQM",
  authDomain: "clone-93a03.firebaseapp.com",
  projectId: "clone-93a03",
  storageBucket: "clone-93a03.appspot.com",
  messagingSenderId: "163815876069",
  appId: "1:163815876069:web:d12ac3c32477355df4fb0c",
  measurementId: "G-4T6PHSKCDH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
