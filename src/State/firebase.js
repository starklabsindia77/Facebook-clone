import firebase, { firestore } from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBya5lZxuyAk3HlRmnocB_HkuyY-8sX0k8",
  authDomain: "facebook-clone-412c5.firebaseapp.com",
  databaseURL: "https://facebook-clone-412c5-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-412c5",
  storageBucket: "facebook-clone-412c5.appspot.com",
  messagingSenderId: "412633779454",
  appId: "1:412633779454:web:94fbf03d88d9dc722ba9af",
  measurementId: "G-0RJLLD83BP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
