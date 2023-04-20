
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDec7tLEL95kHy64dlHgc-sp7vOvfQruuE",
  authDomain: "listed-40055.firebaseapp.com",
  projectId: "listed-40055",
  storageBucket: "listed-40055.appspot.com",
  messagingSenderId: "845028252019",
  appId: "1:845028252019:web:398c191d5ae3afb7c14d06",
  measurementId: "G-1Y1EMPGCNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);

    });
};