import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAp_YHjgOVdGh32UWoIT1xCvBDs78xzDf4",
    authDomain: "eshop-f3d95.firebaseapp.com",
    projectId: "eshop-f3d95",
    storageBucket: "eshop-f3d95.firebasestorage.app",
    messagingSenderId: "403010472140",
    appId: "1:403010472140:web:e62a59eb110fbc2bee9a69",
    measurementId: "G-F74N3N14YE"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

export { db, auth };
