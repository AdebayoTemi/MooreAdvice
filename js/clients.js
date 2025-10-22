// Pause animation on hover for each logo card
document.addEventListener("DOMContentLoaded", function () {
  const track1 = document.getElementById("track1");
  const track2 = document.getElementById("track2");

  // Add hover listeners to individual logo cards in track 1
  const cards1 = track1.querySelectorAll(".logo-card");
  cards1.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      track1.style.animationPlayState = "paused";
    });

    card.addEventListener("mouseleave", () => {
      track1.style.animationPlayState = "running";
    });
  });

  // Add hover listeners to individual logo cards in track 2
  const cards2 = track2.querySelectorAll(".logo-card");
  cards2.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      track2.style.animationPlayState = "paused";
    });

    card.addEventListener("mouseleave", () => {
      track2.style.animationPlayState = "running";
    });
  });
});
