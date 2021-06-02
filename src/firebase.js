import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBRiJFT3UyP9oOZqeKlFO19icMfLY-2XCQ",
  authDomain: "crud-firestore-f1a04.firebaseapp.com",
  databaseURL: "https://crud-firestore-f1a04-default-rtdb.firebaseio.com",
  projectId: "crud-firestore-f1a04",
  storageBucket: "crud-firestore-f1a04.appspot.com",
  messagingSenderId: "192188096017",
  appId: "1:192188096017:web:023b92b15853a37a0c1bb0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase }