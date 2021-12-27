import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDduFQLA69XPLy_1hb7Z9flz3q3jkOKQTQ",
    authDomain: "crwn-db-873ea.firebaseapp.com",
    projectId: "crwn-db-873ea",
    storageBucket: "crwn-db-873ea.appspot.com",
    messagingSenderId: "106413454908",
    appId: "1:106413454908:web:6d42c5415e1e33cab4f539"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;