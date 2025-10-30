// js/main.js

document.addEventListener("DOMContentLoaded", () => {
  // ========== NAVBAR ==========
  if (typeof Navbar === "undefined") {
    console.error("Navbar function not found!");
  } else {
    const navbarContainer = document.getElementById("navbar");
    if (navbarContainer) {
      try {
        navbarContainer.innerHTML = Navbar({
          logo: "img/ma-logo.webp",
          links: [
            { text: "In the Beginning", url: "inTheBegining.html" },
            { text: "Who We Are", url: "WhoweAre.html" },
            { text: "What We Do", url: "WhatweDo.html" },
            { text: "When & From Whom", url: "WhenandFromWhom.html" },
            { text: "Where We Shine", url: "whereWeShine.html" },
            { text: "Why Choose Us", url: "whyChooseUs.html" },
            { text: "How to Reach Us", url: "HowtoReachUs.html" },
          ],
        });
        console.log("Navbar loaded successfully!");
      } catch (error) {
        console.error("Error rendering navbar:", error);
      }
    }
  }

  // ========== OUR IMPACT ==========
  if (typeof OurImpact === "undefined") {
    console.error("OurImpact function not found!");
  } else {
    const impactContainer = document.getElementById("ourImpact");
    if (impactContainer) {
      try {
        impactContainer.innerHTML = OurImpact({
          backgroundImage: "img/download.webp",
          leftImage: "img/udey.png",
          title: "Our Impact",
          description:
            "Our commitment to excellence and innovation has driven tangible results across industries and organizations.",
          stats: [
            { number: "100+", label: "Global Clients" },
            { number: "35+", label: "Years of Experience" },
            { number: "95%", label: "Clients Satisfaction" },
            { number: "24/7", label: "Support" },
          ],
          ctaText: "Get in Touch",
          ctaUrl: "HowtoReachUs.html",
        });
        console.log("Our Impact loaded successfully!");
      } catch (error) {
        console.error("Error rendering Our Impact:", error);
      }
    }
  }

  // ========== FOOTER ==========
  if (typeof Footer === "undefined") {
    console.error("Footer function not found!");
  } else {
    const footerContainer = document.getElementById("footer");
    if (footerContainer) {
      try {
        footerContainer.innerHTML = Footer({
          logo: "img/ma-logo.png",
          description:
            "A 460 degree brand agency delivering comprehensive marketing communication and brand identity development.",
          portfolioLink: "/Portfolio",
          socialLinks: [
            {
              label: "Facebook",
              url: "https://facebook.com/mooreadvice",
              icon: `<svg fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
            },
            {
              label: "Twitter",
              url: "https://twitter.com/mooreadvice",
              icon: `<svg fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>`,
            },
            {
              label: "Instagram",
              url: "https://instagram.com/mooreadvice",
              icon: `<svg fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
            },
            {
              label: "LinkedIn",
              url: "https://linkedin.com/company/mooreadvice",
              icon: `<svg fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
            },
          ],
          quickLinks: [
            { text: "The Beginning", url: "inTheBegining.html" },
            { text: "Who We Are", url: "WhoweAre.html" },
            { text: "What We Do", url: "WhatweDo.html" },
            { text: "When & For Whom", url: "WhenandFromWhom.html" },
            { text: "Where We Shine", url: "whereWeShine.html" },
            { text: "Why Choose Us", url: "whyChooseUs.html" },
            { text: "How to Reach Us", url: "HowtoReachUs.html" },
            { text: "Our Blog", url: "OurBlog.html" },
          ],
          servicesLinks: [
            {
              text: "Retail & Brand Space Design",
              url: "WhatweDo.html",
            },
            {
              text: "Advertising & Brand Development",
              url: "whatwedo-advertising-brand-development.html",
            },
            {
              text: "Websites & App Development",
              url: "whatwedo-websites-apps-development.html",
            },
            {
              text: "Digital Signage & OOH",
              url: "whatwedo-digital-signage-ooh.html",
            },
            {
              text: "Project Management",
              url: "whatwedo-project-management.html",
            },
            {
              text: "A.I. & Brand Transformation",
              url: "whatwedo-ai-brand-transformation.html",
            },
          ],
          portfolioLink: "Portfolio.html",
          contact: {
            address: "1b Emmanuel Street, Maryland, Ikeja, Lagos",
            phone: "+2348035354000",
            email: "info@mooreadvice.com",
          },
          footerLinks: [
            { text: "Privacy Policy", url: "#" },
            { text: "Terms of Service", url: "#" },
            { text: "Sitemap", url: "#" },
          ],
        });
        console.log("Footer loaded successfully!");
      } catch (error) {
        console.error("Error rendering footer:", error);
      }
    }
  }
});

// Contact Form Handler for how to reach us
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
      };

      // Here you can add your form submission logic
      // For example, send to your backend API
      console.log("Form submitted:", formData);

      // Show success message (you can customize this)
      alert("Thank you for your message! We will get back to you soon.");

      // Reset form
      contactForm.reset();

      // Or you can use fetch to send data to your backend:
      /*
      fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        alert('Message sent successfully!');
        contactForm.reset();
      })
      .catch(error => {
        alert('Error sending message. Please try again.');
        console.error('Error:', error);
      });
      */
    });
  }
});
