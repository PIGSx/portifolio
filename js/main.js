<<<<<<< HEAD
var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");

function playVideo(file){
    myVideo.src = file;
    videoPlayer.style.display="block";
    myVideo.style.display="block";
}
function stopVideo() {
    videoPlayer.style.display="none";
    myVideo.style.display="none";
=======
var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");

function playVideo(file){
    myVideo.src = file;
    videoPlayer.style.display="block";
    myVideo.style.display="block";
}
function stopVideo() {
    videoPlayer.style.display="none";
    myVideo.style.display="none";
>>>>>>> f9402d6258abb4fdbf8af7608189917deafcb4fb
}