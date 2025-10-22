let currentSlide = 0;
const totalSlides = 6;
let autoplayInterval;

function showSlide(index) {
  // Hide all slides
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => {
    slide.classList.remove("slide-active");
    slide.classList.add("slide-inactive");
  });

  // Show current slide
  const activeSlide = document.querySelector(`[data-slide="${index}"]`);
  activeSlide.classList.remove("slide-inactive");
  activeSlide.classList.add("slide-active");

  // Update dots
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => {
    dot.classList.remove("w-3", "h-3", "bg-white");
    dot.classList.add("w-2.5", "h-2.5", "bg-white", "bg-opacity-50");
  });

  const activeDot = document.querySelector(`[data-dot="${index}"]`);
  activeDot.classList.remove("w-2.5", "h-2.5", "bg-opacity-50");
  activeDot.classList.add("w-3", "h-3");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
  resetAutoplay();
}

function startAutoplay() {
  // Changed to 60000ms = 1 minute
  autoplayInterval = setInterval(nextSlide, 8000);
}

function resetAutoplay() {
  clearInterval(autoplayInterval);
  startAutoplay();
}

// Start autoplay when page loads
startAutoplay();

let touchStartX = 0;
let touchEndX = 0;

const carousel = document.getElementById("heroCarousel");

carousel.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

carousel.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (touchEndX < touchStartX - 50) {
    nextSlide(); // Swipe left
  }
  if (touchEndX > touchStartX + 50) {
    prevSlide(); // Swipe right
  }
}
