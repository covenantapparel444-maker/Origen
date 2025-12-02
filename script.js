// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Loader fake progress (rápido)
  const loader = document.getElementById('loader');
  const prog = document.querySelector('.loader-progress');
  const pct = document.querySelector('.loader-percentage');
  let val = 0;
  const iv = setInterval(() => {
    val += Math.floor(Math.random() * 12) + 6; // subidas aleatorias
    if (val >= 100) { val = 100; clearInterval(iv); }
    prog.style.width = val + '%';
    pct.textContent = val + '%';
    if (val === 100) {
      // espera un pelín y oculta
      setTimeout(() => loader.classList.add('hidden'), 300);
    }
  }, 90);

  // IntersectionObserver para animar .fade cuando entren en viewport
  const fades = document.querySelectorAll('.fade');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        // si quieres que solo ocurra una vez:
        obs.unobserve(e.target);
      }
    });
  }, { root: null, threshold: 0.18 });

  fades.forEach(f => obs.observe(f));
});
