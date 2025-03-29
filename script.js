
//function for display time on header

function updateTime() {
    var now = new Date();
    var timeSpan = document.getElementById("live-time");
    timeSpan.innerHTML = now.toLocaleTimeString();


  }

  setInterval(updateTime, 1000);
  

//function for flashing visit site logo

  setInterval(function() {

    var image = document.getElementById('flashing-image');
    if (image.style.visibility === 'hidden') {
        image.style.visibility = 'visible';


    } else {
        image.style.visibility = 'hidden';

    }
}, 1000); 


