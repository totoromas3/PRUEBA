const DEMO_WHATSAPP_NUMBER = '12025550147';

const menuToggle = document.querySelector('.menu-toggle');
const siteNavigation = document.querySelector('.site-nav');

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isExpanded));
  menuToggle.setAttribute('aria-label', isExpanded ? 'Abrir menú' : 'Cerrar menú');
  siteNavigation.classList.toggle('is-open', !isExpanded);
});

siteNavigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú');
    siteNavigation.classList.remove('is-open');
  }
});

document.querySelectorAll('.js-whatsapp').forEach((link) => {
  const message = link.dataset.message || 'Hola, me gustaría hacer una consulta.';
  link.href = `https://wa.me/${DEMO_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  link.target = '_blank';
  link.rel = 'noreferrer';
});

document.querySelector('#current-year').textContent = new Date().getFullYear();

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}