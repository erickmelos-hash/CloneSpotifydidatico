import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";


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


const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };


