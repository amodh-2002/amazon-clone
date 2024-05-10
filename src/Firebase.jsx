// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBXqljgsGcb0VIDiwp0eT69a-tqGd2WZpo",
  authDomain: "clone-4d065.firebaseapp.com",
  projectId: "clone-4d065",
  storageBucket: "clone-4d065.appspot.com",
  messagingSenderId: "55402115665",
  appId: "1:55402115665:web:f8e36784d8f3dffa9a7e70",
  measurementId: "G-7C4JFTDQ0X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
