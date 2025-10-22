// Contact Modal Script
document.addEventListener("DOMContentLoaded", function () {
  // Get modal elements
  const contactModal = document.getElementById("contactModal");
  const closeContactBtn = document.getElementById("closeContactModal");
  const letsTalkButtons = document.querySelectorAll('a[href="#contact"]');

  // Function to open contact modal
  function openContactModal(e) {
    e.preventDefault();
    contactModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // Function to close contact modal
  function closeContactModal() {
    contactModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Add click event to all "Let's Talk" buttons
  letsTalkButtons.forEach(function (button) {
    button.addEventListener("click", openContactModal);
  });

  // Close button click
  if (closeContactBtn) {
    closeContactBtn.addEventListener("click", function (e) {
      e.preventDefault();
      closeContactModal();
    });
  }

  // Close when clicking outside modal
  if (contactModal) {
    contactModal.addEventListener("click", function (e) {
      if (e.target === contactModal) {
        closeContactModal();
      }
    });
  }

  // Close modal with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      if (contactModal && contactModal.classList.contains("active")) {
        closeContactModal();
      }
    }
  });
});

// Book An Appointment

// Appointment Modal Script
document.addEventListener("DOMContentLoaded", function () {
  // Get modal elements
  const appointmentModal = document.getElementById("appointmentModal");
  const closeAppointmentBtn = document.getElementById("closeAppointmentModal");
  const appointmentButtons = document.querySelectorAll(
    'a[href="#appointment"]'
  );
  const appointmentForm = document.getElementById("appointmentForm");

  // Function to open appointment modal
  function openAppointmentModal(e) {
    e.preventDefault();
    e.stopPropagation();

    appointmentModal.classList.add("active");

    // Lock body scroll
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${window.scrollY}px`;
  }

  // Function to close appointment modal
  function closeAppointmentModal() {
    const scrollY = document.body.style.top;

    appointmentModal.classList.remove("active");

    // Restore body scroll
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.width = "";
    document.body.style.top = "";

    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }

  // Add click event to all appointment buttons
  appointmentButtons.forEach(function (button) {
    button.addEventListener("click", openAppointmentModal);
  });

  // Close button click
  if (closeAppointmentBtn) {
    closeAppointmentBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeAppointmentModal();
    });
  }

  // Close when clicking outside modal content (on the overlay)
  if (appointmentModal) {
    appointmentModal.addEventListener("click", function (e) {
      if (e.target === appointmentModal) {
        closeAppointmentModal();
      }
    });
  }

  // Prevent clicks inside modal content from closing it
  const appointmentModalContent = document.querySelector(
    ".appointment-modal-content"
  );
  if (appointmentModalContent) {
    appointmentModalContent.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

  // Close modal with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      if (appointmentModal && appointmentModal.classList.contains("active")) {
        closeAppointmentModal();
      }
    }
  });

  // Handle form submission
  if (appointmentForm) {
    appointmentForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = {
        name: document.getElementById("appointmentName").value,
        email: document.getElementById("appointmentEmail").value,
        phone: document.getElementById("appointmentPhone").value,
        date: document.getElementById("appointmentDate").value,
        time: document.getElementById("appointmentTime").value,
        type: document.getElementById("appointmentType").value,
        service: document.getElementById("appointmentService").value,
        info: document.getElementById("appointmentInfo").value,
      };

      // Log form data (you can replace this with your actual submission logic)
      console.log("Appointment Request:", formData);

      // Show success message (you can customize this)
      alert("Thank you! Your appointment has been booked.");

      // Reset form and close modal
      appointmentForm.reset();
      closeAppointmentModal();
    });
  }
});
//  career

// Career Modal Script
document.addEventListener("DOMContentLoaded", function () {
  // Get modal elements
  const careerModal = document.getElementById("careerModal");
  const closeCareerBtn = document.getElementById("closeCareerModal");
  const careerButtons = document.querySelectorAll('a[href="#careers"]');
  const careerForm = document.getElementById("careerForm");
  const fileInput = document.getElementById("careerResume");
  const fileNameDisplay = document.getElementById("careerFileName");

  // Function to open career modal
  function openCareerModal(e) {
    e.preventDefault();
    e.stopPropagation();

    careerModal.classList.add("active");

    // Lock body scroll
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${window.scrollY}px`;
  }

  // Function to close career modal
  function closeCareerModal() {
    const scrollY = document.body.style.top;

    careerModal.classList.remove("active");

    // Restore body scroll
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.width = "";
    document.body.style.top = "";

    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }

  // Add click event to all career buttons
  careerButtons.forEach(function (button) {
    button.addEventListener("click", openCareerModal);
  });

  // Close button click
  if (closeCareerBtn) {
    closeCareerBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeCareerModal();
    });
  }

  // Close when clicking outside modal content
  if (careerModal) {
    careerModal.addEventListener("click", function (e) {
      if (e.target === careerModal) {
        closeCareerModal();
      }
    });
  }

  // Prevent clicks inside modal content from closing it
  const careerModalContent = document.querySelector(".career-modal-content");
  if (careerModalContent) {
    careerModalContent.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

  // Close modal with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      if (careerModal && careerModal.classList.contains("active")) {
        closeCareerModal();
      }
    }
  });

  // File input change event
  if (fileInput) {
    fileInput.addEventListener("change", function (e) {
      if (this.files && this.files.length > 0) {
        const fileName = this.files[0].name;
        fileNameDisplay.textContent = fileName;
      } else {
        fileNameDisplay.textContent = "No file chosen";
      }
    });
  }

  // Handle form submission
  if (careerForm) {
    careerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData();
      formData.append("name", document.getElementById("careerName").value);
      formData.append("phone", document.getElementById("careerPhone").value);
      formData.append("email", document.getElementById("careerEmail").value);
      formData.append(
        "department",
        document.getElementById("careerDepartment").value
      );
      formData.append(
        "message",
        document.getElementById("careerMessage").value
      );

      // Add file if selected
      if (fileInput.files.length > 0) {
        formData.append("resume", fileInput.files[0]);
      }

      // Log form data (you can replace this with your actual submission logic)
      console.log("Career Application:");
      for (let [key, value] of formData.entries()) {
        console.log(key + ":", value);
      }

      // Show success message (you can customize this)
      alert("Thank you! Your application has been submitted.");

      // Reset form and close modal
      careerForm.reset();
      fileNameDisplay.textContent = "No file chosen";
      closeCareerModal();
    });
  }
});
