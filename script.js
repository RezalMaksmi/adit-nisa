// const cardForm = document.getElementById("card-comment");

function openCard() {
    document.getElementById("card-invitation").classList.toggle("hidden");
    document.getElementById("navbar-invitation").classList.toggle("opacity-100");
    document.getElementById("btn-open").classList.toggle("hidden");

    audio.play();
    let container = document.querySelector("#card-invitation");
    container.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
    });
}

// function scrollToBottom() {}

let slideIndex = 1;

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function toggleFullScreen() {
    let doc = window.document;
    let docEl = doc.documentElement;

    let requestFullScreen =
        docEl.requestFullscreen ||
        docEl.mozRequestFullScreen ||
        docEl.webkitRequestFullScreen ||
        docEl.msRequestFullscreen;
    let cancelFullScreen =
        doc.exitFullscreen ||
        doc.mozCancelFullScreen ||
        doc.webkitExitFullscreen ||
        doc.msExitFullscreen;

    if (
        !doc.fullscreenElement &&
        !doc.mozFullScreenElement &&
        !doc.webkitFullscreenElement &&
        !doc.msFullscreenElement
    ) {
        requestFullScreen.call(docEl);
    } else {
        cancelFullScreen.call(doc);
    }
}

function zoomIn(event) {
    var img = event.target;
    var imgContainer = img.parentNode;

    if (imgContainer.classList.contains("zoomed")) {
        imgContainer.classList.remove("zoomed");
    } else {
        imgContainer.classList.add("zoomed");
    }
}

// music
let audio = document.getElementById("myAudio");

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
