// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCCG95sLVq_uLmZMuXdGFIxtCPgasB7U-Y",
  authDomain: "twitter-36974.firebaseapp.com",
  projectId: "twitter-36974",
  storageBucket: "twitter-36974.appspot.com",
  messagingSenderId: "841111029529",
  appId: "1:841111029529:web:7548b2c10759215bdaa788",
  measurementId: "G-ZDENBDZJHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);

export const storage = getStorage(app);