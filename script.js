// -----------------------------
// PANTALLA DE CARGA (VERSIÓN INFALIBLE)
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const progress = document.querySelector(".loader-progress");
  const percent = document.querySelector(".loader-percentage");

  let load = 0;

  const interval = setInterval(() => {
    load += Math.floor(Math.random() * 8) + 3; // velocidad irregular para efecto realista

    if (load >= 100) {
      load = 100;
      clearInterval(interval);

      // Fade out
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


// -----------------------------
// SCROLL ANIMATIONS
// -----------------------------
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".fade-up, .fade-left, .fade-right").forEach((el) => {
  observer.observe(el);
});

// -----------------------------
// EFECTO PARALLAX EN HERO
// -----------------------------
const hero = document.querySelector(".hero");
const overlay = document.querySelector(".hero-overlay");

if (hero && overlay) {
  hero.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    overlay.style.transform = `translate(${x}px, ${y}px)`;
  });
}

// -----------------------------
// EASTER EGG THE PACT
// -----------------------------
let clicks = 0;
const hiddenWord = document.querySelector(".hidden-word");

if (hiddenWord) {
  hiddenWord.addEventListener("click", () => {
    clicks++;

    if (clicks === 3) {
      hiddenWord.textContent = "… no estás listo para lo que viene.";
      hiddenWord.classList.add("revealed");
    }

    if (clicks === 7) {
      hiddenWord.textContent = "THE PACT IS WATCHING";
      hiddenWord.style.letterSpacing = "6px";
    }
  });
}

// -----------------------------
// BOTÓN FINAL
// -----------------------------
const goButton = document.querySelector("#go-to-site");

if (goButton) {
  goButton.addEventListener("click", () => {
    window.location.href = "https://tusitio.com";
  });
}
