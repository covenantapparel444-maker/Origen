// LOADER ANIMATION
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const progress = document.querySelector(".loader-progress");
  const percent = document.querySelector(".loader-percentage");

  let load = 0;

  const interval = setInterval(() => {
    load += Math.floor(Math.random() * 8) + 3;

    if (load >= 100) {
      load = 100;
      clearInterval(interval);

      setTimeout(() => {
        loader.style.opacity = "0";
        loader.addEventListener("transitionend", () => {
          loader.style.display = "none";
        });
      }, 300);
    }

    progress.style.width = load + "%";
    percent.textContent = load + "%";
  }, 120);
});

// SCROLL ANIMATIONS
const elements = document.querySelectorAll(".fade");

function reveal() {
  const trigger = window.innerHeight * 0.85;

  elements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("visible");
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
