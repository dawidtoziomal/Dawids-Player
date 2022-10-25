//let songs = ["", ", ""]
const song1 = document.getElementById('song1')
const songList = document.getElementById("songList")

let player = new Audio();

let songs = [
    {
        title: 'Imagine Dragons - Enemy',
        audio: new Audio('mp3/enemy.mp3'),
    },
    {
        title: 'Jamal - Peron',
        audio: new Audio('mp3/peron.mp3'),
    },
    {
        title: 'WŁODAR - SIE WJEZDZA',
        audio: new Audio('mp3/włodar.mp3'),
    },
];

for (let i=0; i < songs.length; i++) {
    const song = document.createElement('li')
    const img = document.createElement('img')
    const eq = document.createElement('img')
    const title = document.createElement('p')
    const div = document.createElement('div');

    div.className = 'tit'

    eq.src = "img/eq.png"
    eq.style.opacity = '0'
    div.appendChild(eq)

    title.innerHTML = songs[i].title
    div.appendChild(title)

    song.appendChild(div)

    img.src = "img/play.png"
    
    song.appendChild(img)
    songList.appendChild(song)
    
    songs[i].img = img;
    songs[i].eq = eq;

    img.onclick = function () { play(i) }
}

function play(songId) {
    let played = false;

    for (let i=0; i < songs.length; i++) {
        if (i == songId && !songs[i].audio.paused)
            played = true;

        songs[i].audio.pause();
        songs[i].img.src = "img/Play.png"
        songs[i].eq.style.opacity ='0'
    }

    if (!played) {
        songs[songId].audio.play();
        songs[songId].img.src = "img/Pause.png"
        songs[songId].eq.style.opacity = '1'
    }
        
}