const navbar = document.getElementById("navbar");
const themeBtn = document.getElementById("themeBtn");

const themes = ["#38bdf8", "#22c55e", "#f97316", "#a855f7"];
let index = 0;

// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Theme change on button click
themeBtn.addEventListener("click", () => {
  index = (index + 1) % themes.length;
  document.documentElement.style.setProperty("--main-color", themes[index]);
});
