console.log("Welcome to the spotify");
let songInd = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById("masterplay");
let myprogressBar = document.getElementById("myprogressBar");
let gif = document.getElementById("gif");
let songs = [
    { songName: "ishq", filepath: "song/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "rang", filepath: "song/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "Aseer_MOhabat", filepath: "song/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "Khuda Ki kasam", filepath: "song/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "Dil-Lagi", filepath: "song/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "Bhomia", filepath: "song/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "salute", filepath: "song/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "Lala_MOLI", filepath: "song/1.mp3", coverpath: "covers/1.jpg" },
];
masterplay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove("fa - circle - play");
        masterplay.classList.add("fa - circle - pause");
        gif.style.opacity = 1;


    }
    else {
        audioElement.pause();
        masterplay.classList.remove("fa - circle - play");
        masterplay.classList.add("fa - circle - pause");
        gif.style.opacity = 0;
    }

})
// LIst
audio.addEventListener("timeupdate", () => {
progress = parseInt((audioElement.currentTime/audioElement.duratiom)*100);
myprogressBar.value = progress;

})