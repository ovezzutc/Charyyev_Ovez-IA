var images = ["cpu.png", "memory.png", "disc.png"];
var currentIndex = 0;
var intervalId = null;

var slideImg = document.getElementById("slide-img");
var startSlideshowBtn = document.getElementById("start-slideshow-btn");

function startSlideshow() {
    if (intervalId) return; 

    startSlideshowBtn.disabled = true;
    startSlideshowBtn.innerHTML = '<i class="fas fa-pause"></i>';
    startSlideshowBtn.classList.add('active');

    document.querySelector('#monitorizare h2').childNodes[0].nodeValue = "Utilizarea resurselor";

    slideImg.src = images[0];
    currentIndex = 0;

    intervalId = setInterval(function() {
        currentIndex++;

        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        
        slideImg.src = images[currentIndex];
        
    }, 3000);
}

startSlideshowBtn.addEventListener('click', startSlideshow);