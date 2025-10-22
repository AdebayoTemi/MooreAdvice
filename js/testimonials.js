let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial-slide");
const totalTestimonials = testimonials.length;
let autoRotateInterval;
const AUTO_ROTATE_DELAY = 5000; // Change slide every 5 seconds

function showTestimonial(index) {
  // Remove active class from all testimonials
  testimonials.forEach((testimonial) => {
    testimonial.classList.remove("active");
  });

  // Add active class to current testimonial
  testimonials[index].classList.add("active");
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
  showTestimonial(currentTestimonial);
  // Reset the auto-rotate timer when user clicks next
  resetAutoRotate();
}

function previousTestimonial() {
  currentTestimonial =
    (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
  showTestimonial(currentTestimonial);
  // Reset the auto-rotate timer when user clicks previous
  resetAutoRotate();
}

function autoRotate() {
  nextTestimonial();
}

function startAutoRotate() {
  autoRotateInterval = setInterval(autoRotate, AUTO_ROTATE_DELAY);
}

function resetAutoRotate() {
  // Clear existing interval
  clearInterval(autoRotateInterval);
  // Start a new interval
  startAutoRotate();
}

function stopAutoRotate() {
  clearInterval(autoRotateInterval);
}

// Initialize carousel when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  // Show first testimonial
  showTestimonial(currentTestimonial);

  // Start auto-rotation
  startAutoRotate();

  // Optional: Stop auto-rotate when hovering over carousel
  const carousel = document.querySelector(".testimonial-carousel"); // Adjust selector if needed
  if (carousel) {
    carousel.addEventListener("mouseenter", stopAutoRotate);
    carousel.addEventListener("mouseleave", startAutoRotate);
  }

  // Star rating functionality
  const stars = document.querySelectorAll(".star-rating");

  stars.forEach((star, index) => {
    star.addEventListener("click", function () {
      stars.forEach((s, i) => {
        if (i <= index) {
          s.classList.remove("text-gray-300");
          s.classList.add("text-yellow-400");
        } else {
          s.classList.remove("text-yellow-400");
          s.classList.add("text-gray-300");
        }
      });
    });
  });
});
