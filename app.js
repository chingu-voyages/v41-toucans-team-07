const musicsong=document.querySelector("#audio")
const changeimg=document.querySelector("img")
const cover=document.querySelector(`.disc`)
const playBtn=document.querySelector(`#play`)
const pauseBtn=document.querySelector(`#pause`)
const nextBtn=document.querySelector(`#next`)
const stopBtn=document.querySelector(`#stop`)
const previousBtn=document.querySelector(`#previous`)
const music_container=document.querySelector(`.main_container_disc`)
const title=document.querySelector(`.title`)
const progress = document.getElementById('progress');
const disc = document.querySelector('.disc');
const controller_container=document.querySelector(`.main_controller`)


// Song titles
const songs = ['01billy', '02rio', '03goodbye','04johnny', '05clear', '06lowlands','07sally', '08santy', '09shenandoah','10stormalong', '11hogseye', '12goose','13bound', '14drunken', '15blow', '16blowtheman', '17cheerly','18morning', '19hanging', '20hilo']
const disc_covers = ["boat", "cat", "ship1", "ship2", "ship3", "ship4", "treasure","pirate_face", "pirate_flag"]
// Keep track of song
let songIndex = 0;
let randompic =Math.floor(Math.random() * disc_covers.length)

// Initially load song details into DOM
loadSong(songs[songIndex]);
loadImg(disc_covers[randompic]);

// Update song details
function loadSong(song) {
  musicsong.src = `music/${song}.mp3`;
let currentsong= document.querySelector(`#song_${songIndex}`).textContent;
title.textContent=currentsong
;
}

function loadImg(disc_cover){
  cover.src = `img/${disc_cover}.png`;
  cover.style.minHeight=`300px`
  cover.style.minWidth='300px'
  cover.style.zIndex = "-1"; }

// Play song
function playSong() {
  music_container.classList.add('play');
  controller_container.classList.add('play');
  playBtn.src="img/pause.svg";
  audio.play();

  
}

// Pause song
function pauseSong() {
  music_container.classList.remove('play');
  controller_container.classList.remove('play');
  playBtn.src="img/play.svg";
  audio.pause();
  



}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  let randompic =Math.floor(Math.random() * disc_covers.length)
  loadImg(disc_covers[randompic]);
  playSong();
 
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  let randompic =Math.floor(Math.random() * disc_covers.length)
  loadImg(disc_covers[randompic]);
  playSong();
}
// Stop song
 function stopSong(){
  music_container.classList.remove('play');
  controller_container.classList.remove('play');
  stopBtn.animate([
    { right: '10px' },
    { left: '10px' }
  ], {
    duration: 500,
    iterations: 1,
  })

  audio.pause();  
  audio.currentTime = 0
 }
// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = music_container.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
  
}
// Change song
previousBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);


// Time/song update
musicsong.addEventListener('timeupdate', updateProgress);

//stop song
stopBtn.addEventListener('click', stopSong);