// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDstIB8qpp0MkpzdASaQ0jpMBXuHoIkSVg",
  authDomain: "todo-react-firebase-e9783.firebaseapp.com",
  projectId: "todo-react-firebase-e9783",
  storageBucket: "todo-react-firebase-e9783.appspot.com",
  messagingSenderId: "826157126482",
  appId: "1:826157126482:web:2d185abc23cbe8c29da08b",
  measurementId: "G-B71SB2QFPT"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()
const auth = firebase.auth();
export { db, auth }