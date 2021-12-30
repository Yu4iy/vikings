const openModal = document.querySelector('.open-modal')
const closeModal = document.querySelector('.close')
const modal = document.querySelector('.modal')

openModal.addEventListener('click', ()=>{
	modal.classList.add('active')
	player.playVideo()
})

closeModal.addEventListener('click', ()=>{
	modal.classList.remove('active')
	stopVideo()
})





// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('video', {
    height: '660',
    width: '1040',
    videoId: 'G1IbRujko-A',

  });
}

function stopVideo() {
  player.stopVideo();
}



