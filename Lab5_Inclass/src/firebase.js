import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe9SY7ET4Sgj9PM-8sEv7PMcgER8PzNps",
  authDomain: "test-73393.firebaseapp.com",
  projectId: "test-73393",
  storageBucket: "test-73393.appspot.com",
  messagingSenderId: "842040186812",
  appId: "1:842040186812:web:115de55599db835859fdb9",
  measurementId: "G-MQ0BT6H064"
    
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;