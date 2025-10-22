// // Switch Service Category Tab
// function switchServiceTab(tabName) {
//   // Hide all service contents
//   document.querySelectorAll(".service-content").forEach((content) => {
//     content.classList.remove("active");
//   });

//   // Remove active class from all tabs
//   document.querySelectorAll(".service-category-tab").forEach((tab) => {
//     tab.classList.remove("active");
//   });

//   // Show selected content
//   document.getElementById(`service-content-${tabName}`).classList.add("active");
//   document.getElementById(`service-tab-${tabName}`).classList.add("active");
// }

// // Switch Product Tab
// function switchProductTab(category, productName) {
//   // Hide all product contents for this category
//   document
//     .querySelectorAll(`#service-content-${category} .product-content`)
//     .forEach((content) => {
//       content.classList.remove("active");
//     });

//   // Remove active class from all product tabs
//   document
//     .querySelectorAll(`#service-content-${category} .product-tab`)
//     .forEach((tab) => {
//       tab.classList.remove("active");
//     });

//   // Show selected product content
//   document
//     .getElementById(`product-content-${category}-${productName}`)
//     .classList.add("active");
//   document
//     .getElementById(`product-tab-${category}-${productName}`)
//     .classList.add("active");
// }

// // Switch Project Tab
// function switchProjectTab(category, projectName) {
//   // Hide all project contents for this category
//   document
//     .querySelectorAll(`#service-content-${category} .project-content`)
//     .forEach((content) => {
//       content.classList.remove("active");
//     });

//   // Remove active class from all project tabs
//   document
//     .querySelectorAll(`#service-content-${category} .project-tab`)
//     .forEach((tab) => {
//       tab.classList.remove("active");
//     });

//   // Show selected project content
//   document
//     .getElementById(`project-content-${category}-${projectName}`)
//     .classList.add("active");
//   document
//     .getElementById(`project-tab-${category}-${projectName}`)
//     .classList.add("active");
// }

// Main Tab Switching
// Main Tab Switching
function switchMainTab(tabNumber) {
  // Hide all content
  document.querySelectorAll(".tab-content-main").forEach((content) => {
    content.classList.add("hidden");
  });

  // Remove active class from all buttons
  document.querySelectorAll(".main-tab-btn").forEach((btn) => {
    btn.classList.remove("active", "bg-[#05058F]", "text-white");
    btn.classList.add("bg-white", "text-gray-700", "border", "border-gray-200");
  });

  // Show selected content
  document
    .getElementById("content-tab-" + tabNumber)
    .classList.remove("hidden");

  // Add active class to clicked button
  const activeBtn = document.getElementById("main-tab-" + tabNumber);
  activeBtn.classList.add("active", "bg-[#05058F]", "text-white");
  activeBtn.classList.remove(
    "bg-white",
    "text-gray-700",
    "border",
    "border-gray-200"
  );
}
// Product Tab Switching
function switchProductTab(tabNumber) {
  // Hide all product content
  document.querySelectorAll(".product-content").forEach((content) => {
    content.classList.add("hidden");
  });

  // Remove active class from all product tabs
  document.querySelectorAll(".product-tab").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Show selected product content
  document
    .getElementById("product-content-" + tabNumber)
    .classList.remove("hidden");

  // Add active class to clicked tab
  document.getElementById("product-tab-" + tabNumber).classList.add("active");
}

// Toggle Between About and Feature Views with Sliding Animation
function toggleProductView(productNumber, view) {
  const aboutContent = document.getElementById(
    "about-content-" + productNumber
  );
  const featureContent = document.getElementById(
    "feature-content-" + productNumber
  );
  const aboutBtn = document.getElementById(
    "toggle-" + productNumber + "-about"
  );
  const featureBtn = document.getElementById(
    "toggle-" + productNumber + "-feature"
  );
  const slider = document.getElementById("toggle-slider-" + productNumber);

  if (view === "about") {
    // Show about content
    aboutContent.classList.remove("hidden");
    featureContent.classList.add("hidden");

    // Update button states
    aboutBtn.classList.add("active");
    featureBtn.classList.remove("active");

    // Slide background to left (about button)
    const aboutBtnWidth = aboutBtn.offsetWidth;
    slider.style.width = aboutBtnWidth + "px";
    slider.style.transform = "translateX(0)";
  } else {
    // Show feature content
    aboutContent.classList.add("hidden");
    featureContent.classList.remove("hidden");

    // Update button states
    featureBtn.classList.add("active");
    aboutBtn.classList.remove("active");

    // Slide background to right (feature button)
    const aboutBtnWidth = aboutBtn.offsetWidth;
    const featureBtnWidth = featureBtn.offsetWidth;
    slider.style.width = featureBtnWidth + "px";
    slider.style.transform = `translateX(${aboutBtnWidth}px)`;
  }
}

// Initialize - Show first product by default on page load
document.addEventListener("DOMContentLoaded", function () {
  // Show first product content
  const firstProduct = document.getElementById("product-content-1");
  if (firstProduct) {
    firstProduct.classList.remove("hidden");
  }

  // Make first product tab active
  const firstTab = document.getElementById("product-tab-1");
  if (firstTab) {
    firstTab.classList.add("active");
  }

  // Initialize toggle slider position and width
  const aboutBtn = document.getElementById("toggle-1-about");
  const slider = document.getElementById("toggle-slider-1");
  if (aboutBtn && slider) {
    slider.style.width = aboutBtn.offsetWidth + "px";
    slider.style.transform = "translateX(0)";
  }
});

// Update slider on window resize
window.addEventListener("resize", function () {
  const activeToggle = document.querySelector(".product-toggle.active");
  const productNumber = activeToggle ? activeToggle.id.split("-")[1] : "1";
  const slider = document.getElementById("toggle-slider-" + productNumber);
  const aboutBtn = document.getElementById(
    "toggle-" + productNumber + "-about"
  );

  if (activeToggle && slider && aboutBtn) {
    slider.style.width = activeToggle.offsetWidth + "px";

    if (activeToggle.id.includes("about")) {
      slider.style.transform = "translateX(0)";
    } else {
      slider.style.transform = `translateX(${aboutBtn.offsetWidth}px)`;
    }
  }
});

// Product Tab Switching
function switchProductTab(tabNumber) {
  // Hide all product content
  document.querySelectorAll(".product-content").forEach((content) => {
    content.classList.add("hidden");
  });

  // Remove active class from all product tabs
  document.querySelectorAll(".product-tab").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Show selected product content
  document
    .getElementById("product-content-" + tabNumber)
    .classList.remove("hidden");

  // Add active class to clicked tab
  document.getElementById("product-tab-" + tabNumber).classList.add("active");

  // Initialize toggle slider for the new product tab
  initializeToggleSlider(tabNumber);
}

// Initialize toggle slider position for a specific product
function initializeToggleSlider(productNumber) {
  const aboutBtn = document.getElementById(
    "toggle-" + productNumber + "-about"
  );
  const slider = document.getElementById("toggle-slider-" + productNumber);

  if (aboutBtn && slider) {
    // Set slider width and position
    slider.style.width = aboutBtn.offsetWidth + "px";
    slider.style.transform = "translateX(0)";
  }
}

// Toggle Between About and Feature Views with Sliding Animation
function toggleProductView(productNumber, view) {
  const aboutContent = document.getElementById(
    "about-content-" + productNumber
  );
  const featureContent = document.getElementById(
    "feature-content-" + productNumber
  );
  const aboutBtn = document.getElementById(
    "toggle-" + productNumber + "-about"
  );
  const featureBtn = document.getElementById(
    "toggle-" + productNumber + "-feature"
  );
  const slider = document.getElementById("toggle-slider-" + productNumber);

  if (view === "about") {
    // Show about content
    aboutContent.classList.remove("hidden");
    featureContent.classList.add("hidden");

    // Update button states
    aboutBtn.classList.add("active");
    featureBtn.classList.remove("active");

    // Slide background to left (about button)
    const aboutBtnWidth = aboutBtn.offsetWidth;
    slider.style.width = aboutBtnWidth + "px";
    slider.style.transform = "translateX(0)";
  } else {
    // Show feature content
    aboutContent.classList.add("hidden");
    featureContent.classList.remove("hidden");

    // Update button states
    featureBtn.classList.add("active");
    aboutBtn.classList.remove("active");

    // Slide background to right (feature button)
    const aboutBtnWidth = aboutBtn.offsetWidth;
    const featureBtnWidth = featureBtn.offsetWidth;
    slider.style.width = featureBtnWidth + "px";
    slider.style.transform = `translateX(${aboutBtnWidth}px)`;
  }
}

// Initialize - Show first product by default on page load
document.addEventListener("DOMContentLoaded", function () {
  // Show first product content
  const firstProduct = document.getElementById("product-content-1");
  if (firstProduct) {
    firstProduct.classList.remove("hidden");
  }

  // Make first product tab active
  const firstTab = document.getElementById("product-tab-1");
  if (firstTab) {
    firstTab.classList.add("active");
  }

  // Initialize toggle slider for product 1
  initializeToggleSlider(1);
});

// Update slider on window resize
window.addEventListener("resize", function () {
  // Find which product is currently visible
  const visibleProduct = document.querySelector(
    ".product-content:not(.hidden)"
  );
  if (visibleProduct) {
    const productNumber = visibleProduct.id.split("-")[2];
    const activeToggle = document.querySelector(
      `#toggle-${productNumber}-about.active, #toggle-${productNumber}-feature.active`
    );
    const slider = document.getElementById("toggle-slider-" + productNumber);
    const aboutBtn = document.getElementById(
      "toggle-" + productNumber + "-about"
    );

    if (activeToggle && slider && aboutBtn) {
      slider.style.width = activeToggle.offsetWidth + "px";

      if (activeToggle.id.includes("about")) {
        slider.style.transform = "translateX(0)";
      } else {
        slider.style.transform = `translateX(${aboutBtn.offsetWidth}px)`;
      }
    }
  }
});

// Project Tab Switching
function switchProjectTab(tabNumber) {
  // Hide all project content
  document.querySelectorAll(".project-content-item").forEach((content) => {
    content.classList.add("hidden");
  });

  // Remove active class from all project tabs
  document.querySelectorAll(".project-tab-btn").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Show selected project content
  document
    .getElementById("project-content-" + tabNumber)
    .classList.remove("hidden");

  // Add active class to clicked tab
  document.getElementById("project-tab-" + tabNumber).classList.add("active");
}
