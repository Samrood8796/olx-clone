import firebase from "firebase";

import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAgyHrrwAiAEjAn_9HE9RdRygwzPfD5bdg",
    authDomain: "fir-4c25c.firebaseapp.com",
    projectId: "fir-4c25c",
    storageBucket: "fir-4c25c.appspot.com",
    messagingSenderId: "505248275649",
    appId: "1:505248275649:web:843b7294de445f5ae48840",
    measurementId: "G-CX5HDHFGC9" 
  };

  export default firebase.initializeApp(firebaseConfig)