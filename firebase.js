// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC14KSIXjD-tMvddvsDeU8fEjaPrBw7A1k",
  authDomain: "insta-v2-e628e.firebaseapp.com",
  projectId: "insta-v2-e628e",
  storageBucket: "insta-v2-e628e.appspot.com",
  messagingSenderId: "859263204769",
  appId: "1:859263204769:web:ade7b929bc666ea50f1fe0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };