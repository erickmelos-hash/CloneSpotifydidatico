import { database } from './firebaseConfig.js';
import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const songsFolder = ref(database, 'musics');

onValue(songsFolder, (snapshot) => {
    const data = snapshot.val();
})

const DOMlist = document.getElementById('')