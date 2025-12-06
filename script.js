// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Close menu when clicking a link (mobile)
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});

// Set current year in footer
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

// Fake contact form submission
const form = document.getElementById("contact-form");
const statusText = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  statusText.textContent = "Sending…";
  setTimeout(() => {
    statusText.textContent = "Thanks, I'll get back to you soon.";
    form.reset();
  }, 800);
});
