// Toggle Article Content
function toggleArticle(articleId) {
  const article = document.getElementById(articleId);
  const arrow = document.getElementById("arrow-" + articleId);

  // Toggle the article content
  if (article.classList.contains("hidden")) {
    // Close all other articles
    document.querySelectorAll(".article-content").forEach((content) => {
      if (content.id !== articleId) {
        content.classList.add("hidden");
      }
    });

    // Reset all arrows
    document.querySelectorAll('[id^="arrow-"]').forEach((arr) => {
      arr.classList.remove("rotate-180");
    });

    // Open this article
    article.classList.remove("hidden");
    arrow.classList.add("rotate-180");
  } else {
    // Close this article
    article.classList.add("hidden");
    arrow.classList.remove("rotate-180");
  }
}

// Filter Blogs by Category
function filterBlogs(category) {
  const allArticles = document.querySelectorAll(".blog-article");
  const allTabs = document.querySelectorAll(".blog-filter-tab");

  // Update active tab
  allTabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  document.getElementById(`filter-${category}`).classList.add("active");

  // Show/hide articles based on category
  allArticles.forEach((article) => {
    if (category === "all") {
      article.style.display = "block";
    } else {
      if (article.getAttribute("data-category") === category) {
        article.style.display = "block";
      } else {
        article.style.display = "none";
      }
    }
  });

  // Close all expanded articles when switching categories
  document.querySelectorAll(".article-content").forEach((content) => {
    content.classList.add("hidden");
  });
  document.querySelectorAll('[id^="arrow-"]').forEach((arrow) => {
    arrow.classList.remove("rotate-180");
  });
}

// Star Rating Functionality
document.addEventListener("DOMContentLoaded", function () {
  const starContainers = document.querySelectorAll(".article-content");

  starContainers.forEach((container) => {
    const stars = container.querySelectorAll(".star-rating");

    stars.forEach((star, index) => {
      star.addEventListener("click", function () {
        // Reset all stars in this container
        stars.forEach((s, i) => {
          if (i <= index) {
            s.classList.remove("text-gray-300");
            s.classList.add("text-yellow-400");
          } else {
            s.classList.add("text-gray-300");
            s.classList.remove("text-yellow-400");
          }
        });
      });
    });
  });
});
