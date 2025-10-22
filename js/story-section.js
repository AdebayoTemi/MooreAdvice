// Update Active Navigation Link
function updateActiveNavLink(activeSectionId) {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href").substring(1); // Remove #

    if (href === activeSectionId) {
      // Add active state
      link.classList.add("active");
    } else {
      // Remove active state
      link.classList.remove("active");
    }
  });
}

// Scroll to Section Function
function scrollToSection(sectionId) {
  event.preventDefault();
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Update active state in navigation
    updateActiveNavLink(sectionId);
  }
}

// Observe sections for auto-highlighting navigation
document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    root: null,
    rootMargin: "-100px 0px -60% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        updateActiveNavLink(entry.target.id);
      }
    });
  }, observerOptions);

  // Observe all content cards
  document.querySelectorAll(".content-card").forEach((card) => {
    observer.observe(card);
  });
});

// Toggle Accordion Function
function toggleAccordion(id) {
  const content = document.getElementById(`content-${id}`);
  const icon = document.getElementById(`icon-${id}`);

  // Check if accordion is currently open
  const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

  if (isOpen) {
    // Close accordion
    content.style.maxHeight = "0";
    icon.style.transform = "rotate(0deg)";
  } else {
    // Open accordion
    content.style.maxHeight = content.scrollHeight + "px";
    icon.style.transform = "rotate(180deg)";
  }
}
