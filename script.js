let videoBtn = document.getElementById('switch-btn');
let playBtn = document.querySelector('.play-btn');
let pauseBtn = document.querySelector('.pause-btn');
let video = document.querySelector('.video-container');
let preloader = document.getElementById('preloader');
let main = document.getElementById("main");

function init(){
  setTimeout(function(){
    preloader.classList.add('preloader');
    main.classList.remove('main');
  },300)
}

init();



pauseBtn.addEventListener("click", function(event){
 
  event.preventDefault();
   videoBtn.classList.remove('videoPlayBtn');
  videoBtn.classList.remove('switch-btn');
  videoBtn.classList.add('videoPauseBtn');
  video.pause();

})

playBtn.addEventListener("click", function(event){
  event.preventDefault();
  videoBtn.classList.remove('videoPauseBtn');
  videoBtn.classList.remove('switch-btn');
  videoBtn.classList.add('videoPlayBtn');
  video.play();
})