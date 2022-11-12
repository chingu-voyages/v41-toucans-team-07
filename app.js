// // js for changing img  

// // display_random_img=()=>{
// let GIF_list=[
//   {
//     src: "imgGIF/coffee-20.gif",
//     // width: "800",
//     // height: "800"
// },
//   {
//   src: "imgGIF/dog-15.gif",
//   // width: "800",
//   // height: "800"
// },
// {
//   src: "imgGIF/dog-15.gif",
//   // width: "800",
//   // height: "800"
// },
// {src: "imgGIF/light-87.gif",
// // width: "800",
// // height: "800"
// },
// {src: "imgGIF/music-note.gif",
// // width: "800",
// // height: "800"
// },
// {src: "imgGIF/penguin-252.gif",
// // width: "800",
// // height: "800"
// },
// {src: "imgGIF/sheep-824.gif",
// // width: "800",
// // height: "800"
// },
// {src: "imgGIF/wolf-862.gif",
// // width: "800",
// // height: "800"
// },
// ]
// const GIF = document.querySelector("img");
// function showImage() {
//     let a = Math.floor(Math.random() * GIF_list.length);
//     let img = GIF_list[a];
//     GIF.src = img;
// }

// setInterval(showImage, 1000);
//need to change the 1000 to the length of time when the music played
// }
// display_random_img

// js for changing music from list


let musicsong=document.querySelector("audio")
let changeimg=document.querySelector("img")
change_music_1=()=>{
  musicsong.src="music/Ballade no. 1 in G minor, Op. 23.mp3";
  changeimg.src="imgGIF/coffee-20.gif"}


change_music_2=()=>{
  musicsong.src="music/Etude Op. 25 no. 11 in A minor - 'Winter Wind'.mp3";
  changeimg.src="imgGIF/dog-15.gif"}


change_music_3=()=>{
  musicsong.src="music/Nocturne in B flat minor, Op. 9 no. 1.mp3";
  changeimg.src="imgGIF/light-87.gif"}
change_music_4=()=>{
  musicsong.src="music/Nocturne in E flat major, Op. 9 no. 2.mp3";
  changeimg.src="imgGIF/music-note.gif"}
change_music_5=()=>{
  musicsong.src="music/Paul Pitman - Moonlight Sonata Op. 27 No. 2 - III. Presto.mp3";
  changeimg.src="imgGIF/penguin-252.gif"}
change_music_6=()=>{
  musicsong.src="music/Sonata No. 14 in C Sharp Minor Moonlight, Op. 27.mp3";changeimg.src="imgGIF/sheep-824.gif"}

document.querySelector(".music1").addEventListener("click", change_music_1)
document.querySelector(".music2").addEventListener("click", change_music_2)
document.querySelector(".music3").addEventListener("click", change_music_3)
document.querySelector(".music4").addEventListener("click", change_music_4)
document.querySelector(".music5").addEventListener("click", change_music_5)
document.querySelector(".music6").addEventListener("click", change_music_6)

img.src="imgGIF/dog-15.gif"