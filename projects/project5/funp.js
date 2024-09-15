const div1 = document.getElementById('div1');
const div2 = document.querySelector('.headerprimium');
const files = document.querySelector('.files');
const searchbrowser = document.querySelector('.searchbrowser');
const notification = document.querySelector('.notification');
const centrenotification = document.querySelector('.centrenotification');


document.addEventListener('DOMContentLoaded',()=>{
  const song1 = document.getElementById('song1');
  const playsong = document.getElementById('playsong');
  const playpausebutton = document.getElementById('playpausebutton');

  playpausebutton.addEventListener('click',()=>{
    if (song1.pause){
      song1.play();
      playsong.classList.toggle.remove('fa-play');
      playsong.classList.toggle.add('fa-pause');
    }
    else{
      song1.pause();
      playsong.classList.toggle.remove('fa-pause');
      playsong.classList.toggle.add('fa-play');
    }
  })
})



 notification.addEventListener('click',()=>{
  if (centrenotification.style.display === 'none'){
    centrenotification.style.display = 'block';
  }
  else {
    centrenotification.style.display = 'none';
  }
 });


 files.addEventListener('click',()=>{
  if (searchbrowser.style.display === 'none'){
    searchbrowser.style.display = 'block';
  }
  else {
    searchbrowser.style.display = 'none';
  }
 });


 div1.addEventListener('click',()=>{
  if (div2.style.display === 'none'){
    div2.style.display = 'block';
  }
  else {
    div2.style.display = 'none';
  }
 });