let currentSlide = 0;
let autoplayInterval = 3000; // Set autoplay interval (in milliseconds)

// Function to show the slide
function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-item");
  const thumbnails = document.querySelectorAll(".thumbnail");

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    thumbnails[i].classList.toggle("active", i === index);
  });

  currentSlide = index;
}

// Function to go to the next slide
function nextSlide() {
  const slides = document.querySelectorAll(".carousel-item");
  const nextIndex = (currentSlide + 1) % slides.length;
  showSlide(nextIndex);
}

// Function to go to a specific slide (on thumbnail click)
function goToSlide(index) {
  showSlide(index);
  resetAutoplay(); // Reset autoplay timer on manual interaction
}

// Autoplay logic
let autoplayTimer = setInterval(nextSlide, autoplayInterval);

// Reset the autoplay timer when the user interacts with the carousel
function resetAutoplay() {
  clearInterval(autoplayTimer);
  autoplayTimer = setInterval(nextSlide, autoplayInterval);
}

// Initialize the slider
showSlide(currentSlide);
