import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB3V6K2pXQvBxG_zH9xyBkOTwCdRxPqVvQ",
    authDomain: "reactecommerce-2f034.firebaseapp.com",
    databaseURL: "https://reactecommerce-2f034.firebaseio.com",
    projectId: "reactecommerce-2f034",
    storageBucket: "reactecommerce-2f034.appspot.com",
    messagingSenderId: "817361145392",
    appId: "1:817361145392:web:cedb3ebc6a61105a73e7f5",
    measurementId: "G-9SCTMXEZP8",
};

firebase.initializeApp(firebaseConfig);



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({ prompt: 'Select Account' });
export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;