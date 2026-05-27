/* ============================================
   VALLE VERDE — JAVASCRIPT
   ============================================ */

// 1) Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// 2) Menú móvil
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// 3) Animación de aparición al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.stat-card, .feature-card, .zone-card, .benefit-card, .steps li')
  .forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    observer.observe(el);
  });

// 4) Header con sombra al hacer scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
  } else {
    header.style.boxShadow = 'none';
  }
});
