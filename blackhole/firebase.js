import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjbTMnAQeOwczaykL3pKdWZu9R4nADu3A",
    authDomain: "blackhole-3315a.firebaseapp.com",
    projectId: "blackhole-3315a",
    storageBucket: "blackhole-3315a.appspot.com",
    messagingSenderId: "1020157115406",
    appId: "1:1020157115406:web:c76bc9b2cfdf58d19cd05f",
    measurementId: "G-ZNNN9L99ZR"
  };

const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig) 
    : firebase.app()

const db = firebase.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider};