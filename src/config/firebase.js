// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const apiKey = process.env.REACT_APP_APIKEY
const authDomain = process.env.REACT_APP_AUTHDOMAIN
const messagingSenderId = process.env.REACT_APP_MESSAGINGSENDERID
const appId = process.env.REACT_APP_APPID

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: "reactcoder-2d406",
  storageBucket: "reactcoder-2d406.appspot.com",
  messagingSenderId: messagingSenderId,
  appId: appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);