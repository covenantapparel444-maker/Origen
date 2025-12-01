// LOADER ANIMATION
let width = 0;
const bar = document.getElementById("loader-bar");
const loader = document.getElementById("loader");

const loading = setInterval(() => {
  width += 8;
  bar.style.width = width + "%";

  if (width >= 100) {
    clearInterval(loading);
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.pointerEvents = "none";
      setTimeout(() => loader.remove(), 600);
    }, 300);
  }
}, 100);

// SCROLL ANIMATIONS
const elements = document.querySelectorAll(".fade-in, .fade-up");

function reveal() {
  const trigger = window.innerHeight * 0.85;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("show");
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
