
const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector(".nav");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});


const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}


const form = document.getElementById("contact-form");
const statusText = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    statusText.textContent = "Sending…";

    setTimeout(() => {
      statusText.textContent = "Thanks, I'll get back to you soon.";
      form.reset();
    }, 800);
  });
}


document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-loaded");
});

document.addEventListener("DOMContentLoaded", () => {
  const typingEl = document.getElementById("typing-text");
  if (!typingEl) return;

  const text = typingEl.getAttribute("data-text") || typingEl.textContent.trim();
  let index = 0;
  const speed = 90; 

  typingEl.textContent = ""; 

  function type() {
    if (index <= text.length) {
      typingEl.textContent = text.slice(0, index);
      index++;
      setTimeout(type, speed);
    }
  }

  type();
});
