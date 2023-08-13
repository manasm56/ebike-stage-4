import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyA9qbuhubBeblkgpkCbcnqsQu020LMyves",
    authDomain: "ebike-stage-4.firebaseapp.com",
    projectId: "ebike-stage-4",
    storageBucket: "ebike-stage-4.appspot.com",
    messagingSenderId: "397435203330",
    appId: "1:397435203330:web:341394e7b87dbe5357dc1b"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
