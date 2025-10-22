// Tab Switching Function
function switchTab(tabName) {
  // Remove active class from all tabs
  const allTabs = document.querySelectorAll(".value-tab");
  allTabs.forEach((tab) => {
    tab.classList.remove("active", "bg-[#05058F]", "text-white");
    tab.classList.add("bg-[#7B8AA145]", "text-gray-700");
  });

  // Add active class to clicked tab
  const activeTab = document.getElementById(`tab-${tabName}`);
  activeTab.classList.add("active", "bg-[#05058F]", "text-white");
  activeTab.classList.remove("bg-[#7B8AA145]", "text-gray-700");

  // Hide all tab contents
  const allContents = document.querySelectorAll(".tab-content");
  allContents.forEach((content) => {
    content.classList.add("hidden");
    content.classList.remove("active");
  });

  // Show selected tab content
  const activeContent = document.getElementById(`content-${tabName}`);
  activeContent.classList.remove("hidden");
  activeContent.classList.add("active");
}

// Gallery image hover effect
const galleryImages = document.querySelectorAll(".gallery-image");
const timeouts = {};

galleryImages.forEach((img, index) => {
  img.addEventListener("mouseenter", () => {
    clearTimeout(timeouts[index]);
    img.classList.remove("scale-back");
    img.classList.add("scale-up");

    timeouts[index] = setTimeout(() => {
      img.classList.remove("scale-up");
      img.classList.add("scale-back");
    }, 2000);
  });

  img.addEventListener("mouseleave", () => {
    clearTimeout(timeouts[index]);
    img.classList.remove("scale-up");
    img.classList.add("scale-back");
  });
});

// Modal functions
function openModal(tab) {
  document.getElementById("galleryModal").classList.remove("hidden");
  document.getElementById("galleryModal").classList.add("flex");
  switchTab(tab);
}

function closeModal() {
  document.getElementById("galleryModal").classList.add("hidden");
  document.getElementById("galleryModal").classList.remove("flex");
}

function switchTab(tabName) {
  // Hide all tab contents
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });

  // Remove active class from all buttons
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.remove("active");
  });

  // Show selected tab content
  document.getElementById(tabName + "Tab").classList.add("active");

  // Add active class to clicked button
  const activeButton = document.querySelector(`[data-tab="${tabName}"]`);
  if (activeButton) {
    activeButton.classList.add("active");
  }
}

// Add click listeners to tab buttons
document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", function () {
    switchTab(this.getAttribute("data-tab"));
  });
});

// Close modal when clicking outside
document.getElementById("galleryModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});

// Star rating functionality
document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star-rating");

  if (!stars.length) {
    console.error("No stars found with class 'star-rating'");
    return;
  }
  console.log(`Found ${stars.length} stars`);

  stars.forEach((star, index) => {
    star.style.cursor = "pointer"; // Ensure cursor shows clickable
    star.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(`Star clicked: ${index + 1}`);

      stars.forEach((s, i) => {
        if (i <= index) {
          s.classList.add("text-yellow-400");
          s.classList.remove("text-gray-300");
        } else {
          s.classList.remove("text-yellow-400");
          s.classList.add("text-gray-300");
        }
      });
    });
  });
});

// Add this to your js/WhoweAre.js file or in a <script> tag

function switchTab(tabName) {
  // Hide all tab contents
  const allContents = document.querySelectorAll(".tab-content");
  allContents.forEach((content) => {
    content.classList.remove("active");
    content.classList.add("hidden");
  });

  // Remove active class from all tab buttons
  const allButtons = document.querySelectorAll(".value-tab");
  allButtons.forEach((button) => {
    button.classList.remove("active");
  });

  // Show selected tab content
  const selectedContent = document.getElementById(`content-${tabName}`);
  if (selectedContent) {
    selectedContent.classList.remove("hidden");
    selectedContent.classList.add("active");
  }

  // Add active class to clicked tab button
  const selectedButton = document.getElementById(`tab-${tabName}`);
  if (selectedButton) {
    selectedButton.classList.add("active");
  }
}

// Make sure the first tab is active on page load
document.addEventListener("DOMContentLoaded", function () {
  // Set the first tab as active
  switchTab("creativity");
});

// // modal window for who we are
// // Gallery Modal Functionality
// const galleryModal = document.getElementById("galleryModal");
// const closeModal = document.getElementById("closeModal");
// const modalImage = document.getElementById("modalImage");
// const galleryTabs = document.querySelectorAll(".gallery-tab");

// // Image data for each category
// const imageData = {
//   brand: [
//     "./img/Solving-Business-Problems.webp",
//     "./img/Brand-Transformation.webp",
//     "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
//   ],
//   team: [
//     "./img/team-young-african-people-office-600nw-1928516477.webp",
//     "./img/Viso.webp",
//     "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
//   ],
//   consultation: [
//     "./img/Mis.webp",
//     "./img/Initial-Consultation.webp",
//     "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800",
//   ],
//   project: [
//     "./img/Our-Expertise.webp",
//     "./img/Project-Kickoff-Speed.webp",
//     "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
//   ],
// };

// let currentCategory = "brand";
// let currentImageIndex = 0;

// // Open modal when gallery image is clicked (reusing existing galleryImages variable)
// galleryImages.forEach((image, index) => {
//   image.addEventListener("click", () => {
//     currentCategory = image.getAttribute("data-category") || "brand";
//     currentImageIndex = 0;

//     // Set active tab
//     galleryTabs.forEach((tab) => {
//       if (tab.getAttribute("data-tab") === currentCategory) {
//         tab.classList.add("active");
//       } else {
//         tab.classList.remove("active");
//       }
//     });

//     // Display image
//     updateModalImage();
//     galleryModal.classList.add("active");
//   });
// });

// // Close modal
// closeModal.addEventListener("click", () => {
//   galleryModal.classList.remove("active");
// });

// // Close modal when clicking outside
// galleryModal.addEventListener("click", (e) => {
//   if (e.target === galleryModal) {
//     galleryModal.classList.remove("active");
//   }
// });

// // Tab switching
// galleryTabs.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     // Remove active class from all tabs
//     galleryTabs.forEach((t) => t.classList.remove("active"));

//     // Add active class to clicked tab
//     tab.classList.add("active");

//     // Update current category and image
//     currentCategory = tab.getAttribute("data-tab");
//     currentImageIndex = 0;
//     updateModalImage();
//   });
// });

// // Update modal image based on current category
// function updateModalImage() {
//   const images = imageData[currentCategory];
//   if (images && images.length > 0) {
//     modalImage.src = images[currentImageIndex];
//   }
// }

// // Close modal with Escape key
// document.addEventListener("keydown", (e) => {
//   if (e.key === "Escape" && galleryModal.classList.contains("active")) {
//     galleryModal.classList.remove("active");
//   }
// });

// Gallery Modal Script
// Gallery Modal Script
document.addEventListener("DOMContentLoaded", function () {
  // Get modal elements
  const galleryModal = document.getElementById("galleryModal");
  const closeModalBtn = document.getElementById("closeModal");
  const modalImage = document.getElementById("modalImage");
  const allGalleryImages = document.querySelectorAll(".gallery-image");
  const allGalleryTabs = document.querySelectorAll(".gallery-tab");

  // Image data for each category (using consistent larger images)
  const categoryImages = {
    brand: [
      "./img/Solving-Business-Problems.webp",
      "./img/Brand-Transformation.webp",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop",
    ],
    team: [
      "./img/team-young-african-people-office-600nw-1928516477.webp",
      "./img/Viso.webp",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
    ],
    consultation: [
      "./img/Mis.webp",
      "./img/Initial-Consultation.webp",
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&h=800&fit=crop",
    ],
    project: [
      "./img/Our-Expertise.webp",
      "./img/Project-Kickoff-Speed.webp",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
    ],
  };

  let activeCategory = "brand";
  let activeImageIndex = 0;

  // Function to update the displayed image
  function displayImage() {
    const images = categoryImages[activeCategory];
    if (images && images.length > 0) {
      modalImage.src = images[activeImageIndex];
      modalImage.alt = activeCategory + " image " + (activeImageIndex + 1);
    }
  }

  // Function to set active tab
  function setActiveTab(category) {
    allGalleryTabs.forEach(function (tab) {
      if (tab.getAttribute("data-tab") === category) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });
  }

  // Function to open modal
  function openModal(category) {
    activeCategory = category || "brand";
    activeImageIndex = 0;
    setActiveTab(activeCategory);
    displayImage();
    galleryModal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent body scroll
  }

  // Function to close modal
  function closeModal() {
    galleryModal.classList.remove("active");
    document.body.style.overflow = ""; // Restore body scroll
  }

  // Add click event to all gallery images
  allGalleryImages.forEach(function (image) {
    image.addEventListener("click", function () {
      const category = this.getAttribute("data-category") || "brand";
      openModal(category);
    });
  });

  // Add click event to close button
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function (e) {
      e.preventDefault();
      closeModal();
    });
  }

  // Add click event to modal background (close when clicking outside)
  if (galleryModal) {
    galleryModal.addEventListener("click", function (e) {
      if (e.target === galleryModal) {
        closeModal();
      }
    });
  }

  // Add click event to all tabs
  allGalleryTabs.forEach(function (tab) {
    tab.addEventListener("click", function (e) {
      e.preventDefault();
      activeCategory = this.getAttribute("data-tab");
      activeImageIndex = 0;
      setActiveTab(activeCategory);
      displayImage();
    });
  });

  // Close modal with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      if (galleryModal && galleryModal.classList.contains("active")) {
        closeModal();
      }
    }
  });
});
