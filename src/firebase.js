import firebase from "firebase";

/*
const firebaseConfig = {
  apiKey: "AIzaSyAARMdx81V3qGCe0FP3aOzrRRZYFokjrSg",
  authDomain: "fyp-1-82732.firebaseapp.com",
  projectId: "fyp-1-82732",
  storageBucket: "fyp-1-82732.appspot.com",
  messagingSenderId: "486075527936",
  appId: "1:486075527936:web:250591dff697f4c7daf9e5",
  measurementId: "G-C1X3R6N972"
};
*/

const firebaseConfig = {
  apiKey: "AIzaSyAARMdx81V3qGCe0FP3aOzrRRZYFokjrSg",
  authDomain: "fyp-1-82732.firebaseapp.com",
  projectId: "fyp-1-82732",
  storageBucket: "fyp-1-82732.appspot.com",
  messagingSenderId: "486075527936",
  appId: "1:486075527936:web:250591dff697f4c7daf9e5",
  measurementId: "G-C1X3R6N972"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };