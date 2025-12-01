// -----------------------------
// PANTALLA DE CARGA (VERSIÓN INFALIBLE)
// -----------------------------
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  if (!loader) return;

  // Asegura fade out
  loader.style.opacity = "1";

  setTimeout(() => {
    loader.style.transition = "opacity 0.8s ease";
    loader.style.opacity = "0";

    // Remueve del DOM después del fade
    setTimeout(() => {
      loader.style.display = "none";
    }, 900);
  }, 800);
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
