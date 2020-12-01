import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDwwiwiQllZUi2Qn1wIpTIlzMz61XBSLUE",
    authDomain: "fir-photogallary.firebaseapp.com",
    databaseURL: "https://fir-photogallary.firebaseio.com",
    projectId: "fir-photogallary",
    storageBucket: "fir-photogallary.appspot.com",
    messagingSenderId: "773813039980",
    appId: "1:773813039980:web:28f5daf1188e700abb7949",
    measurementId: "G-SW3X8NL5CY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {storage, firestore, timestamp}