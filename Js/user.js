import { database } from './firebaseConfig.js';
import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const songsFolder = ref(database, 'musics');
const DOMlist = document.getElementById('musicList');

onValue(songsFolder, (snapshot) => {
    DOMlist.innerHTML = '';
    const data = snapshot.val();

if(data){
    for (let id in data){
    const music = data[id];

    const listItem = document.createElement('li');
    const cover = document.createElement('img');

    cover.src = music.coverLink;
    cover.alt = `Capa de ${music.title}`

    const info = document.createElement('span')

    info.innerText = `${music.title} - ${music.artist}`

    listItem.appendChild(cover)
    listItem.appendChild(info)

    cover.style.width = '60px';
    cover.style.height = '60px';
    cover.style.objectFit = 'cover';

    // listItem.innerText = `${music.title} - ${music.artist}`;
    // listItem.style.cursor = 'pointer' 

    listItem.addEventListener('click', () =>{
    const player = document.getElementById('player');
    player.src = music.songLink;
    console.log(music.songLink)
    player.play();
})

    DOMlist.appendChild(listItem);
} 

} else {
  DOMlist.innerHTML = "Song not found"  
}
})


