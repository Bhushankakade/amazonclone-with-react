import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaMh75B3EVZhfPj-hUozY1_h9e9kF7yWc",
  authDomain: "challenge-b4d10.firebaseapp.com",
  projectId: "challenge-b4d10",
  storageBucket: "challenge-b4d10.appspot.com",
  messagingSenderId: "367134819574",
  appId: "1:367134819574:web:ef970e136e0549fd6c98d7",
  measurementId: "G-FB0BPBED5Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
