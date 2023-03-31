// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJLswICLwbptZdxCu4D0F9pjJyAmSKiAM",
  authDomain: "fir-test-4cf67.firebaseapp.com",
  projectId: "fir-test-4cf67",
  storageBucket: "fir-test-4cf67.appspot.com",
  messagingSenderId: "1019547942279",
  appId: "1:1019547942279:web:bd78cdc007a5ee1a732722",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
