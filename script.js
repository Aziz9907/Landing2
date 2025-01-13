  const audio = document.getElementById('player');
  const playPauseButton = document.getElementById('playAudioAndPause');
  

  playPauseButton.addEventListener('click', () => {
    let i=0
    if (audio.paused) {
      audio.play();
      
    } else {
      audio.pause();
    }
  });


  const forwardButton = document.getElementById('forwardButton');
  const backButton = document.getElementById('backButton');
  
  forwardButton.addEventListener('click', () => {
    player.currentTime += 10;
    
  });
  
  backButton.addEventListener('click', () => {
    player.currentTime -= 10;
  });



  let isImage1 = true;
  const playButtonSvg = '/icons/play-button.svg';
  const pauseButtonSvg = '/icons/pause-button.svg';


    document.getElementById("playButton").onclick = function() {
    if(isImage1) {
      this.src = pauseButtonSvg;
    }else {
      this.src = playButtonSvg;
    }
    isImage1 = !isImage1;
  }
