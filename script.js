// =========================
// Mobile Menu Toggle
// =========================
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// =========================
// Contact Form Validation
// =========================
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validation flags
  let valid = true;
  let messages = [];

  // Name validation
  if (name === "") {
    valid = false;
    messages.push("Name cannot be empty.");
  }

  // Email validation (simple regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    valid = false;
    messages.push("Please enter a valid email.");
  }

  // Message validation
  if (message === "") {
    valid = false;
    messages.push("Message cannot be empty.");
  }

  // Show feedback
  if (!valid) {
    formFeedback.textContent = messages.join(" ");
    formFeedback.style.color = "red";
  } else {
    formFeedback.textContent = "Thank you! Your message has been sent.";
    formFeedback.style.color = "green";
    contactForm.reset(); // Clear form
  }
});

// =========================
// Optional: Project Card Interaction
// =========================
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("click", () => {
    alert(`You clicked on ${card.textContent}`);
  });
});
