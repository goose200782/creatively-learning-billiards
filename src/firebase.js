//For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCN1ljY3DUEBqLp03fYqiHpAbBBFB66lao",
//     authDomain: "creatively-learning-billiards.firebaseapp.com",
//     projectId: "creatively-learning-billiards",
//     storageBucket: "creatively-learning-billiards.appspot.com",
//     messagingSenderId: "446551025970",
//     appId: "1:446551025970:web:763151d36eb3902b248f2b",
//     measurementId: "G-02JQJGY7GJ"
//   };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCN1ljY3DUEBqLp03fYqiHpAbBBFB66lao",
    authDomain: "creatively-learning-billiards.firebaseapp.com",
    projectId: "creatively-learning-billiards",
    storageBucket: "creatively-learning-billiards.appspot.com",
    messagingSenderId: "446551025970",
    appId: "1:446551025970:web:763151d36eb3902b248f2b",
    measurementId: "G-02JQJGY7GJ"
});

const db = firebaseApp.firestore();

export default db; 
