// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5pc-a8uJI0RnvJpWSXC3G-T9dpbZ_sOo",
  authDomain: "clonespotify-6077c.firebaseapp.com",
  databaseURL: "https://clonespotify-6077c-default-rtdb.firebaseio.com",
  projectId: "clonespotify-6077c",
  storageBucket: "clonespotify-6077c.firebasestorage.app",
  messagingSenderId: "351648832138",
  appId: "1:351648832138:web:cc9903297d0fb5b831eb73",
  measurementId: "G-HLNZEECXF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDataBase(app)