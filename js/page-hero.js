/**
 * Initialize Page Hero Component
 * @param {Object} options - Configuration options
 * @param {string} options.backgroundImage - URL of the background image
 * @param {string} options.title - Hero title text
 * @param {string} options.subtitle - Hero subtitle text
 */
function initPageHero(options) {
  const hero = document.getElementById("pageHero");
  const background = hero.querySelector(".page-hero__background");
  const title = document.getElementById("heroTitle");
  const subtitle = document.getElementById("heroSubtitle");

  // Set background image
  if (options.backgroundImage) {
    background.style.backgroundImage = `url('${options.backgroundImage}')`;
  }

  // Set title
  if (options.title) {
    title.textContent = options.title;
  }

  // Set subtitle
  if (options.subtitle) {
    subtitle.textContent = options.subtitle;
  }
}

// Example: Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  // Default initialization - can be customized per page
  initPageHero({
    backgroundImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop",
    title: "Where It All Began",
    subtitle: "Our journey from humble beginnings to industry leadership",
  });
});
