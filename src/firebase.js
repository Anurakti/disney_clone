// Import the functions you need from the SDKs you need
// import firebase from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUt83jAEzkbzgGH_bOInAg9xNStIdor0Q",
  authDomain: "disneyplus-clone-9adba.firebaseapp.com",
  projectId: "disneyplus-clone-9adba",
  storageBucket: "disneyplus-clone-9adba.appspot.com",
  messagingSenderId: "742340640248",
  appId: "1:742340640248:web:36be8954c2e99e6157aa0d",
  measurementId: "G-JKQXX1J5DP",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
// const analytics = getAnalytics(app);
