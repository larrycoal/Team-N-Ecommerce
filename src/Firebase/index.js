import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'


var firebaseConfig = {
    apiKey: "AIzaSyBBpDu_xZQgViGSm6xE7bm2yVbr4iCU0Do",
    authDomain: "shophova-24b97.firebaseapp.com",
    projectId: "shophova-24b97",
    storageBucket: "shophova-24b97.appspot.com",
    messagingSenderId: "1096246875024",
    appId: "1:1096246875024:web:3547f2645de82da2599915",
    measurementId: "G-R0DF12TTZF"
  };
firebase.initializeApp(firebaseConfig);

const firebaseDb = firebase.database()

export {
    firebase,
    firebaseDb
}