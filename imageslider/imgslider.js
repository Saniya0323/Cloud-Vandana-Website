const images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg"
];

let currentIndex = 0;
const slider = document.getElementById("slider");

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
});

function updateImage() {
    slider.style.opacity = 0; // Fade out effect
    setTimeout(() => {
        slider.src = images[currentIndex];
        slider.style.opacity = 1; // Fade in effect
    }, 300);
}
