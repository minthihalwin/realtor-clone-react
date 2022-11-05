// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj0966CQcSe_IqAkKyjqRhqheXsaUGD4A",
  authDomain: "realtor-clone-react-eebba.firebaseapp.com",
  projectId: "realtor-clone-react-eebba",
  storageBucket: "realtor-clone-react-eebba.appspot.com",
  messagingSenderId: "62422960094",
  appId: "1:62422960094:web:4ec59712fa066be8283f4f",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();