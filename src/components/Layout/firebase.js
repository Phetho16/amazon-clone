import firebase from "firebase/compat/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBzAHlDu-qglRX6PSHgaMIYBPv7w_v-QfU",
    authDomain: "zaio-clone.firebaseapp.com",
    projectId: "zaio-clone",
    storageBucket: "zaio-clone.appspot.com",
    messagingSenderId: "1063026509707",
    appId: "1:1063026509707:web:de118c153614824ad5918e",
    measurementId: "G-BHFBVCZRKW"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}