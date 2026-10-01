console.log("ADMIN CARREGADO")

import {database} from '/Js/firebaseConfig.js';
import {ref, push, set, remove, onValue} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

console.log("Firebase carregado:", database)

const b40tsqgf = "b40tsqgf"; 
const ct64qnqb = "ct64qnqb";




const message = document.getElementById('message')
const upload = document.getElementById('upload')

upload.addEventListener('click', async () => {
   
    const title = document.getElementById('title').value;
    const artist = document.getElementById('artist').value;
    const cover = document.getElementById('cover').files[0];
    const file = document.getElementById('file').files[0];

    if(title === ""|| artist === ""|| cover === undefined || file === undefined){
        alert("Insufficient informations!");
        return;
    }

    message.innerText = "Sending to Cloudinary..."

    try{
        const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", ct64qnqb);

    const response = await fetch(`https://api.cloudinary.com/v1_1/${b40tsqgf}/video/upload`,{

            method: "POST",
            body: formData
    })
    
       const coverData = new FormData();
    coverData.append("file", cover);
    coverData.append("upload_preset", ct64qnqb);

    const coverResponse = await fetch(`https://api.cloudinary.com/v1_1/${b40tsqgf}/image/upload`,{

            method: "POST",
            body: coverData
    })

    const cloudinaryData = await response.json();
    const urlAudio = cloudinaryData.secure_url;

    const coverResult = await coverResponse.json();
    const coverLink = coverResult.secure_url
    
    message.innerText = "Saving informations in FireBase..."

    const musicList = document.getElementById('musicList')
    const songsFolder = ref(database, 'musics');

    onValue(songsFolder, (snapshot) => {

        musicList.innerHTML = "";

        const data = snapshot.val();

        if(!data){
            musicList.innerHTML = '<li> NO songs found</li>'
            return;
        }
        for (let id in data){
            const music = data[id];

            const listItem = document.createElement('li');

            listItem.innerHTML = `${music.title} - ${music.artist}`;

            const deleteButton = document.createElement('button');

            deleteButton.innerText = "Delete";

            deleteButton.addEventListener('click', () => {
                musicDelete(id, music.title)
            })

            listItem.appendChild(deleteButton);
            musicList.appendChild(listItem)
        }

        
    })

    async function musicDelete(id, title) {
            
            const confirmDelete = confirm( `Tem certeza que deseja deletar "${title}"?`)
    

        if(!confirmDelete){
            return;
        }

        try{
            const musicRef = ref(database, `musics/${id}`);

              remove(musicRef);

            alert('Music deleted succesfully!');
        } catch (erro){
            console.error("Error caugth trying to delete music")

            alert("Music not deleted")
        }}

    const newSongsRef = push(songsFolder);

    await set (newSongsRef, {
        title: title,
        artist: artist,
        coverLink: coverLink,
        songLink: urlAudio
    });

     message.innerText = "Song saved succesfully!";
    } catch (erro) {
        console.error(erro);
        message.innerText = "Error occurred";
    }

    }
   
);

