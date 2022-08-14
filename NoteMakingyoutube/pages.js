const fs = require('fs')
  

  
// Write data in 'Output.txt' .


// to get all video titles in a page
for (let index = 0; index < document.querySelectorAll("#video-title").length; index++) {
    console.log(document.querySelectorAll("#video-title")[index].innerText);
}

// to get current time of the video playing
document.getElementsByClassName("video-stream")[0].currentTime;
