import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAOf6y4qVKosc8DGklZ8Rwa5_NkYleNMTY",
    authDomain: "crown-db-d5e82.firebaseapp.com",
    projectId: "crown-db-d5e82",
    storageBucket: "crown-db-d5e82.appspot.com",
    messagingSenderId: "444739538771",
    appId: "1:444739538771:web:cc03e3c993bbc2c9da5ba6",
    measurementId: "G-ZHH9EHPRYR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;