const navbar = document.getElementById("navbar");
const themeBtn = document.getElementById("themeToggle");
const body = document.body;

// Scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Theme toggle
themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  themeBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});
