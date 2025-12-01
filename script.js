// -----------------------------
// PANTALLA DE CARGA
// -----------------------------
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  setTimeout(() => {
    loader.classList.add("hide");
  }, 1200);
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
// CURSOR PARALLAX EN EL HERO
// -----------------------------
const hero = document.querySelector(".hero");
const overlay = document.querySelector(".hero-overlay");

hero.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  overlay.style.transform = `translate(${x}px, ${y}px)`;
});

// -----------------------------
// EASTER EGG DEL PACTO
// -----------------------------
let clicks = 0;
const hiddenWord = document.querySelector(".hidden-word");

hiddenWord.addEventListener("click", () => {
  clicks++;

  if (clicks === 3) {
    hiddenWord.textContent = "… no estás listo para lo que viene.";
    hiddenWord.classList.add("revealed");
  }

  if (clicks === 7) {
    hiddenWord.textContent = "THE PACT IS WATCHING";
    hiddenWord.style.letterSpacing = "6px";
    hiddenWord.style.color = "var(--accent)";
  }
});

// -----------------------------
// BOTÓN FINAL
// -----------------------------
document.querySelector("#go-to-site").addEventListener("click", () => {
  window.location.href = "https://tusitio.com"; // cámbialo cuando quieras
});
