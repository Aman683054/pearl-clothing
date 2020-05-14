import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config= {
    apiKey: "AIzaSyDECxXS4jtP-tgs8ixfXmeG4MU34nqdLLI",
    authDomain: "pearl-clothing-2d0bf.firebaseapp.com",
    databaseURL: "https://pearl-clothing-2d0bf.firebaseio.com",
    projectId: "pearl-clothing-2d0bf",
    storageBucket: "pearl-clothing-2d0bf.appspot.com",
    messagingSenderId: "82741707548",
    appId: "1:82741707548:web:adbe74dce2161da44fb0d9",
    measurementId: "G-BPQZSNHF8X"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;