// Toggle FAQ Function
function toggleFAQ(faqId) {
  const content = document.getElementById(`content-${faqId}`);
  const icon = document.getElementById(`icon-${faqId}`);

  // Check if FAQ is currently open
  const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

  if (isOpen) {
    // Close this FAQ
    content.style.maxHeight = "0";
    icon.classList.remove("rotate-180");
  } else {
    // Close all other FAQs
    document.querySelectorAll(".faq-content").forEach((item) => {
      if (item.id !== `content-${faqId}`) {
        item.style.maxHeight = "0";
      }
    });

    // Reset all other icons
    document.querySelectorAll('[id^="icon-faq"]').forEach((item) => {
      if (item.id !== `icon-${faqId}`) {
        item.classList.remove("rotate-180");
      }
    });

    // Open this FAQ
    content.style.maxHeight = content.scrollHeight + "px";
    icon.classList.add("rotate-180");
  }
}

// Open first FAQ by default
document.addEventListener("DOMContentLoaded", function () {
  const firstFAQ = document.getElementById("content-faq1");
  const firstIcon = document.getElementById("icon-faq1");

  if (firstFAQ && firstIcon) {
    firstFAQ.style.maxHeight = firstFAQ.scrollHeight + "px";
    firstIcon.classList.add("rotate-180");
  }
});
