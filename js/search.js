// search.js - In-Page Search Functionality

let searchModal = null;
let searchMatches = [];
let currentMatchIndex = 0;
let originalContent = null;

// Initialize search functionality
// Initialize search functionality
function initializeSearch() {
  // Create search modal
  createSearchModal();

  // Attach click event to search button using the ID
  const searchButton = document.getElementById("navbar-search-btn");

  if (searchButton) {
    console.log("Attaching click event to search button");
    searchButton.addEventListener("click", openSearchModal);
  } else {
    console.error("Search button not found!");
  }
}

// Create the search modal HTML
function createSearchModal() {
  const modalHTML = `
    <div id="searchModal" class="search-modal hidden">
      <div class="search-modal-content">
        <div class="search-header">
          <input 
            type="text" 
            id="searchInput" 
            placeholder="Search on this page..." 
            class="search-input"
            autocomplete="off"
          />
          <button onclick="closeSearchModal()" class="search-close-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="search-info">
          <span id="searchResultCount">Type to search...</span>
        </div>
        <div class="search-navigation hidden" id="searchNav">
          <button onclick="previousMatch()" class="nav-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Previous
          </button>
          <button onclick="nextMatch()" class="nav-btn">
            Next
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <style>
      .search-modal {
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        width: 90%;
        max-width: 600px;
        padding: 20px;
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
      }
      
      .search-modal.hidden {
        opacity: 0;
        pointer-events: none;
        transform: translateX(-50%) translateY(-20px);
      }
      
      .search-header {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 15px;
      }
      
      .search-input {
        flex: 1;
        padding: 12px 16px;
        border: 2px solid #e0e0e0;
        border-radius: 8px;
        font-size: 16px;
        outline: none;
        transition: border-color 0.3s ease;
      }
      
      .search-input:focus {
        border-color: rgba(5, 5, 143, 1);
      }
      
      .search-close-btn {
        background: #f5f5f5;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
      
      .search-close-btn:hover {
        background: #e0e0e0;
      }
      
      .search-info {
        color: #666;
        font-size: 14px;
        margin-bottom: 12px;
        min-height: 20px;
      }
      
      .search-navigation {
        display: flex;
        gap: 10px;
        justify-content: flex-end;
      }
      
      .search-navigation.hidden {
        display: none;
      }
      
      .nav-btn {
        padding: 8px 16px;
        background: rgba(5, 5, 143, 1);
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 14px;
        transition: background-color 0.3s ease;
      }
      
      .nav-btn:hover {
        background: rgba(5, 5, 143, 0.8);
      }
      
      .nav-btn:disabled {
        background: #ccc;
        cursor: not-allowed;
      }
      
      .search-highlight {
        background-color: #ffeb3b;
        padding: 2px 4px;
        border-radius: 3px;
        font-weight: 500;
      }
      
      .search-highlight.active {
        background-color: #ff9800;
        color: white;
      }
      
      .search-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 9999;
        transition: opacity 0.3s ease-in-out;
      }
      
      .search-overlay.hidden {
        opacity: 0;
        pointer-events: none;
      }
      
      @media (max-width: 768px) {
        .search-modal {
          top: 80px;
          width: 95%;
          padding: 15px;
        }
        
        .search-input {
          font-size: 14px;
          padding: 10px 12px;
        }
        
        .nav-btn {
          font-size: 12px;
          padding: 6px 12px;
        }
      }
    </style>
  `;

  // Add modal to body
  document.body.insertAdjacentHTML("beforeend", modalHTML);

  // Add overlay
  const overlayHTML =
    '<div id="searchOverlay" class="search-overlay hidden" onclick="closeSearchModal()"></div>';
  document.body.insertAdjacentHTML("beforeend", overlayHTML);

  searchModal = document.getElementById("searchModal");

  // Add input event listener
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", handleSearch);

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !searchModal.classList.contains("hidden")) {
      closeSearchModal();
    }
  });
}

// Open search modal
function openSearchModal() {
  searchModal.classList.remove("hidden");
  document.getElementById("searchOverlay").classList.remove("hidden");
  document.getElementById("searchInput").focus();

  // Store original content
  if (!originalContent) {
    const mainContent = document.body.innerHTML;
    originalContent = mainContent;
  }
}

// Close search modal
function closeSearchModal() {
  searchModal.classList.add("hidden");
  document.getElementById("searchOverlay").classList.add("hidden");
  document.getElementById("searchInput").value = "";
  clearHighlights();
  document.getElementById("searchNav").classList.add("hidden");
  document.getElementById("searchResultCount").textContent =
    "Type to search...";
}

// Handle search input
function handleSearch(e) {
  const searchTerm = e.target.value.trim();

  // Clear previous highlights
  clearHighlights();

  if (searchTerm.length < 2) {
    document.getElementById("searchResultCount").textContent =
      "Type at least 2 characters...";
    document.getElementById("searchNav").classList.add("hidden");
    return;
  }

  // Search and highlight
  searchMatches = [];
  highlightSearchTerm(searchTerm);

  // Update UI
  if (searchMatches.length > 0) {
    currentMatchIndex = 0;
    updateMatchDisplay();
    scrollToMatch(0);
    document.getElementById("searchNav").classList.remove("hidden");
  } else {
    document.getElementById("searchResultCount").textContent =
      "No matches found";
    document.getElementById("searchNav").classList.add("hidden");
  }
}

// Highlight search term in page content
function highlightSearchTerm(searchTerm) {
  // Get all text nodes in the body (excluding navbar and search modal)
  const excludeElements = [searchModal, document.querySelector(".main-navbar")];
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function (node) {
        // Skip if parent is script, style, or excluded element
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;

        const tagName = parent.tagName.toLowerCase();
        if (tagName === "script" || tagName === "style") {
          return NodeFilter.FILTER_REJECT;
        }

        // Check if node is inside excluded elements
        for (let elem of excludeElements) {
          if (elem && elem.contains(node)) {
            return NodeFilter.FILTER_REJECT;
          }
        }

        // Only accept nodes with actual content
        if (node.textContent.trim().length > 0) {
          return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_REJECT;
      },
    }
  );

  const textNodes = [];
  let node;
  while ((node = walker.nextNode())) {
    textNodes.push(node);
  }

  // Create case-insensitive regex
  const regex = new RegExp(`(${escapeRegex(searchTerm)})`, "gi");

  textNodes.forEach((textNode) => {
    const text = textNode.textContent;
    if (regex.test(text)) {
      const parent = textNode.parentElement;
      const fragment = document.createDocumentFragment();

      let lastIndex = 0;
      text.replace(regex, (match, p1, offset) => {
        // Add text before match
        if (offset > lastIndex) {
          fragment.appendChild(
            document.createTextNode(text.slice(lastIndex, offset))
          );
        }

        // Add highlighted match
        const span = document.createElement("span");
        span.className = "search-highlight";
        span.textContent = match;
        span.dataset.searchMatch = searchMatches.length;
        fragment.appendChild(span);
        searchMatches.push(span);

        lastIndex = offset + match.length;
        return match;
      });

      // Add remaining text
      if (lastIndex < text.length) {
        fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
      }

      parent.replaceChild(fragment, textNode);
    }
  });
}

// Escape special regex characters
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Clear all highlights
function clearHighlights() {
  const highlights = document.querySelectorAll(".search-highlight");
  highlights.forEach((span) => {
    const parent = span.parentNode;
    parent.replaceChild(document.createTextNode(span.textContent), span);
    parent.normalize(); // Merge adjacent text nodes
  });
  searchMatches = [];
}

// Update match display
function updateMatchDisplay() {
  const total = searchMatches.length;
  const current = currentMatchIndex + 1;
  document.getElementById(
    "searchResultCount"
  ).textContent = `Match ${current} of ${total}`;

  // Update active highlight
  searchMatches.forEach((match, index) => {
    if (index === currentMatchIndex) {
      match.classList.add("active");
    } else {
      match.classList.remove("active");
    }
  });
}

// Scroll to specific match
function scrollToMatch(index) {
  if (searchMatches[index]) {
    searchMatches[index].scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}

// Navigate to next match
function nextMatch() {
  if (searchMatches.length === 0) return;

  currentMatchIndex = (currentMatchIndex + 1) % searchMatches.length;
  updateMatchDisplay();
  scrollToMatch(currentMatchIndex);
}

// Navigate to previous match
function previousMatch() {
  if (searchMatches.length === 0) return;

  currentMatchIndex =
    (currentMatchIndex - 1 + searchMatches.length) % searchMatches.length;
  updateMatchDisplay();
  scrollToMatch(currentMatchIndex);
}

// Initialize when DOM is ready
// Remove this old code:
// if (document.readyState === 'loading') {
//   document.addEventListener('DOMContentLoaded', initializeSearch);
// } else {
//   initializeSearch();
// }

// Replace with this new code:
function waitForNavbarAndInitialize() {
  const searchButton = document.getElementById("navbar-search-btn");

  if (searchButton) {
    // Navbar is ready, initialize search
    console.log("Search button found, initializing search...");
    initializeSearch();
  } else {
    // Navbar not ready yet, wait a bit and try again
    console.log("Waiting for navbar to load...");
    setTimeout(waitForNavbarAndInitialize, 100);
  }
}

// Start checking when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", waitForNavbarAndInitialize);
} else {
  waitForNavbarAndInitialize();
}
