
document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("audio-overlay");
    const mainContent = document.getElementById("cover");
    const audio = document.getElementById("background-audio");
    const playButton = document.getElementById("play-audio");


    audio.addEventListener("canplaythrough", () => {
        playButton.style.display = "block";
    });

    // Evento para iniciar el audio y ocultar el overlay
    playButton.addEventListener("click", function () {
        audio.play().then(() => {
            overlay.style.display = "none";  // Ocultar el overlay
            mainContent.classList.remove("hidden"); // Mostrar el contenido principal
        }).catch(error => {
            console.error("Autoplay blocked:", error);
        });
    });
});

function openMap() {
    const placeName = "Sweet Land Confiteria";
    const url = `https://www.google.com/maps?q=${encodeURIComponent(placeName)}`;
    window.open(url, '_blank');
}

function enableMapButton() {
    const button = document.getElementById('button-map');
    button.disabled = false
}

function disableMapButton() {
    const button = document.getElementById('button-map');
    button.disabled = true
}


const page2 = document.getElementById('page-2');


page2.addEventListener('change', function () {
    if (this.checked) {
        enableMapButton()
    } else {
        disableMapButton()
    }
});


const page1 = document.getElementById('page-1');

page1.addEventListener('change', function () {
    if (this.checked) {
        disableMapButton()
    } else {
        enableMapButton()
    }
});


