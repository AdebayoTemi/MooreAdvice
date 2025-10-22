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

// Star rating functionality
document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(
    '.article-content svg[fill="currentColor"]'
  );

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
