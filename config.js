import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDKudXlXRI7ceV3ZHFWw4xbumziEkSvO88",
    authDomain: "agenda-b3591.firebaseapp.com",
    projectId: "agenda-b3591",
    storageBucket: "agenda-b3591.appspot.com",
    messagingSenderId: "458416589067",
    appId: "1:458416589067:web:451179fd95c84e6b747a0e"
};

firebase.initializeApp(firebaseConfig)

const database = firebase.firestore()

export default database