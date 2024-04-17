// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbPGnJu5IcM4gOf52AiOtDHfk97w4po20",
    authDomain: "cyber-squeak.firebaseapp.com",
    databaseURL: "https://cyber-squeak-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cyber-squeak",
    storageBucket: "cyber-squeak.appspot.com",
    messagingSenderId: "822156637261",
    appId: "1:822156637261:web:a43350bc6ebc9c1e7e9804"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;