import {database} from './firebaseConfig';
import {ref, push, set} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const b40tsqgf = "b40tsqgf"; 
const ct64qnqb = "ct64qnqb";




let message = document.getElementById('message')
let upload = document.getElementById('upload')

upload.addEventListener('click', async () => {
   
    let song = document.getElementById('song').value;
    let artist = document.getElementById('artist').value;
    let duration = document.getElementById('duration').value;
    let file = document.getElementById('file').files[0];

    if(song === ""|| file === undefined){
        alert("Insufficient informations!");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    const response = await fetch(`https://api.cloudinary.com/v1_1/${b40tsqgf}/video/upload`,{

            method: "POST",
            body: formData
    })

    const cloudinaryData = await response.json();
    const urlAudio = cloudinaryData.secure_url;
    

    const songsFolder = ref(database, 'musics');
    const newSongsRef = push(songsFolder);

    await set (newSongsRef, {
        song: title,
        songLink: urlAudio
    });
});