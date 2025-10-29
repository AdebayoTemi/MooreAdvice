// navbar.js - Reusable Navbar Component with Sticky Scroll Effect

function Navbar({ logo, links, brandColor = "rgba(5, 5, 143, 1)" }) {
  // Store brandColor in a global variable for the script to access
  window.navbarBrandColor = brandColor;

  const htmlContent = `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Montserrat:wght@400;500;600;700&display=swap');
      
      .navbar-desktop { font-family: 'Montserrat', sans-serif; }
      .navbar-mobile { font-family: 'Montserrat', sans-serif; }
      
      /* Sticky navbar styles */
      .main-navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        height: 84px;
        transition: background-color 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        background-color: ${brandColor};
      }
      
      /* Navbar container with proper alignment */
      .nav-container {
        height: 84px;
        display: flex;
        align-items: center;
        padding-left: 0;
        padding-right: 2rem;
        gap: 2rem;
      }
      
      /* Logo sizing for desktop (84px navbar) */
      .navbar-logo {
        height: 82px;
        width: auto;
        object-fit: contain;
      }
      
      /* Logo wrapper to remove space */
      .navbar-logo-wrapper {
        display: flex;
        align-items: center;
        height: 100%;
        flex-shrink: 0;
      }
      
      /* Keep nav items and icons visible */
      .main-navbar .nav-link,
      .main-navbar button {
        transition: text-shadow 0.3s ease-in-out;
      }
      
      /* Add spacing to prevent content from going under navbar */
      body {
        padding-top: 84px;
      }
      
      /* ===== TABLET VIEW (1024px - 1280px) ===== */
      @media (min-width: 1024px) and (max-width: 1280px) {
        .main-navbar {
          height: 72px;
        }
        
        .nav-container {
          height: 72px;
          padding-left: 0;
          padding-right: 1.5rem;
        }
        
        .navbar-logo {
          height: 72px;
        }
        
        body {
          padding-top: 72px;
        }
        
        .nav-link { 
          font-size: 13px !important; 
        }
        
        .nav-gap { 
          gap: 1.5rem; 
        }
        
        .icon-gap { 
          gap: 0.75rem; 
        }
        
        .hidden.lg\\:flex {
          margin-right: 1rem;
        }
      }
      
      /* ===== SMALL LAPTOP (768px - 1023px) ===== */
      @media (min-width: 768px) and (max-width: 1023px) {
        .main-navbar {
          height: 64px;
        }
        
        .nav-container {
          height: 64px;
          padding-left: 0;
          padding-right: 1rem;
        }
        
        .navbar-logo {
          height: 64px;
        }
        
        body {
          padding-top: 64px;
        }
      }
      
      /* ===== TABLET (480px - 767px) ===== */
      @media (min-width: 480px) and (max-width: 767px) {
        .main-navbar {
          height: 56px;
        }
        
        .nav-container {
          height: 56px;
          padding-left: 0;
          padding-right: 1rem;
        }
        
        .navbar-logo {
          height: 56px;
        }
        
        body {
          padding-top: 56px;
        }
      }
      
      /* ===== MOBILE (Below 480px) ===== */
      @media (max-width: 479px) {
        .main-navbar {
          height: 52px;
        }
        
        .nav-container {
          height: 52px;
          padding-left: 0;
          padding-right: 0.75rem;
        }
        
        .navbar-logo {
          height: 52px;
        }
        
        body {
          padding-top: 52px;
        }
        
        .lg\\:hidden {
          padding: 0.5rem;
        }
        
        .lg\\:hidden svg {
          width: 20px;
          height: 20px;
        }
      }
 
      /* Default state - no hover background */
      .nav-link:hover {
        background-color: transparent !important;
      }
      
      /* Hover effect when scrolled */
      .main-navbar.navbar-scrolled .nav-link:hover {
        background-color: rgba(5, 5, 143, 1) !important;
        color: white !important;
        border-radius: 50px !important;
        padding: 0.4rem 0.2rem !important;
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, padding 0.3s ease-in-out;
      }
      
      /* Active page styling - Always visible */
      .nav-link.active-page {
        background-color: rgba(5, 5, 143, 1) !important;
        color: white !important;
        border-radius: 50px !important;
        padding: 0.4rem 0.2rem !important;
      }
      
      /* Active page styling when scrolled */
      .main-navbar.navbar-scrolled .nav-link.active-page {
        background-color: rgba(5, 5, 143, 1) !important;
        color: white !important;
        border-radius: 50px !important;
        padding: 0.4rem 0.2rem !important;
      }
    </style>
    
    <nav class="main-navbar border-b-2 border-white w-full">
      <div class="nav-container mx-auto justify-between">
        <!-- Logo -->
        <div class="navbar-logo-wrapper">
          <a href="index.html" class="logo-link" aria-label="Go to homepage">
            <img src="${logo}" alt="Logo" class="navbar-logo">
          </a>
        </div>
        
        <!-- Navigation Links (Desktop) -->
        <ul class="hidden lg:flex items-center gap-8 nav-gap navbar-desktop">
          ${links
            .map(
              (link, index) => `
            <li class="${index > 4 ? "hidden xl:block" : ""}">
              <a 
                href="${link.url}" 
                class="text-white font-normal nav-link whitespace-nowrap p-1"
                style="font-size: 15px;"
                data-page="${link.url}"
              >
                ${link.text}
              </a>
            </li>
          `
            )
            .join("")}
          <!-- More Menu for Hidden Links -->
          <li class="xl:hidden relative group">
            <button class="text-white transition-colors duration-200 font-normal flex items-center gap-1" style="font-size: 15px;">
              More
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <!-- Dropdown -->
            <div class="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg py-2 hidden group-hover:block min-w-[200px] z-50">
              ${links
                .slice(5)
                .map(
                  (link) => `
                <a href="${link.url}" class="block px-4 py-2 text-gray-800 whitespace-nowrap nav-link-dropdown" style="font-size: 15px;" data-page="${link.url}">
                  ${link.text}
                </a>
              `
                )
                .join("")}
            </div>
          </li>
        </ul>
        
        <!-- Search and User Icons -->
        <div class="hidden lg:flex items-center gap-10 icon-gap mr-12 flex-shrink-0">
          <button id="navbar-search-btn" class="text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>
            </svg>
          </button>
          
          <button class="text-white transition-colors">
            <a href="HowtoReachUs.html" aria-label="How to reach US page">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>
              </svg>
            </a>
          </button>

          <a href="index.html" class="text-white transition-colors" aria-label="Go to homepage">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </a>
        </div>
        
        <!-- Mobile Menu Button -->
        <button class="lg:hidden text-white" onclick="toggleMobileMenu()">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div id="mobileMenu" class="hidden lg:hidden navbar-mobile" style="background-color: rgba(20, 30, 40, 0.98);">
        <div class="px-4 py-4">
          <div class="text-white text-lg font-semibold mb-4 pb-3 border-b border-gray-600">Menu</div>
          <ul class="space-y-0">
            ${links
              .map(
                (link) => `
              <li class="border-b border-gray-700">
                <a 
                  href="${link.url}" 
                  class="block text-white hover:bg-gray-700/30 transition-colors py-3 px-2 nav-link-mobile"
                  style="font-size: 16px; font-weight: 400;"
                  data-page="${link.url}"
                >
                  ${link.text}
                </a>
              </li>
            `
              )
              .join("")}
          </ul>
        </div>
      </div>
    </nav>
  `;

  // Initialize scroll effect and active page detection
  setTimeout(() => {
    initNavbarScrollEffect();
    setActivePage();
  }, 100);

  return htmlContent;
}

// Function to set active page based on current URL
function setActivePage() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  // Select all navigation links
  const navLinks = document.querySelectorAll(
    ".nav-link, .nav-link-dropdown, .nav-link-mobile"
  );

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("data-page");
    const linkPageName = linkPage ? linkPage.split("/").pop() : "";

    // Compare current page with link page
    if (
      linkPageName === currentPage ||
      (currentPage === "" && linkPageName === "index.html") ||
      (currentPage === "index.html" && linkPageName === "")
    ) {
      link.classList.add("active-page");

      // For mobile menu, add active styling
      if (link.classList.contains("nav-link-mobile")) {
        link.style.backgroundColor = "rgba(5, 5, 143, 0.3)";
      }
    }
  });
}

// Separate function to initialize the scroll effect
function initNavbarScrollEffect() {
  const navbar = document.querySelector(".main-navbar");
  if (!navbar) {
    console.log("Navbar not found, retrying...");
    setTimeout(initNavbarScrollEffect, 100);
    return;
  }

  const brandColor = window.navbarBrandColor || "rgba(5, 5, 143, 1)";

  function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > 50) {
      // Add the navbar-scrolled class
      navbar.classList.add("navbar-scrolled");

      // Make background transparent with blur
      navbar.style.backgroundColor = "rgba(26, 26, 26, 0.7)";
      navbar.style.backdropFilter = "blur(10px)";
      navbar.style.webkitBackdropFilter = "blur(10px)";
      navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";

      const navLinks = navbar.querySelectorAll(".nav-link, button");
      navLinks.forEach((link) => {
        link.style.textShadow = "0 1px 3px rgba(0, 0, 0, 0.3)";
      });
    } else {
      // Remove the navbar-scrolled class
      navbar.classList.remove("navbar-scrolled");

      // Reset to original brand color
      navbar.style.backgroundColor = brandColor;
      navbar.style.backdropFilter = "none";
      navbar.style.webkitBackdropFilter = "none";
      navbar.style.boxShadow = "none";

      const navLinks = navbar.querySelectorAll(".nav-link, button");
      navLinks.forEach((link) => {
        link.style.textShadow = "none";
      });
    }
  }

  // Remove any existing scroll listeners first
  window.removeEventListener("scroll", handleScroll);

  // Listen for scroll events with passive option for better performance
  window.addEventListener("scroll", handleScroll, { passive: true });

  // Also listen on document
  document.addEventListener("scroll", handleScroll, { passive: true });

  // Initial check on page load
  handleScroll();
}

// Toggle mobile menu function
function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("hidden");
}
