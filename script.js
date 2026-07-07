// ============================================================
// Mobile nav toggle
// ============================================================
const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('.topbar__nav');

menuBtn.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', isOpen);
});

// close mobile nav after clicking a link
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

// ============================================================
// Scroll-spy: highlight active nav link
// ============================================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.topbar__nav a');

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(section => spyObserver.observe(section));

// ============================================================
// Animate skill gauges when they scroll into view
// ============================================================
const gauges = document.querySelectorAll('.gauge');

const gaugeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const gauge = entry.target;
      const value = gauge.getAttribute('data-value');
      const fill = gauge.querySelector('.gauge__fill');
      fill.style.width = `${value}%`;
      gaugeObserver.unobserve(gauge);
    }
  });
}, { threshold: 0.4 });

gauges.forEach(gauge => gaugeObserver.observe(gauge));

// ============================================================
// Title block: live date
// ============================================================
const tbDate = document.getElementById('tbDate');
if (tbDate) {
  const now = new Date();
  const options = { year: 'numeric', month: 'short' };
  tbDate.textContent = now.toLocaleDateString('en-US', options).toUpperCase();
}

// ============================================================
// Footer year
// ============================================================
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================================
// Contact form (front-end only placeholder)
// To actually receive messages, hook this up to a service like
// Formspree, Netlify Forms, or your own backend. See README.
// ============================================================
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.textContent = 'STATUS: Message captured locally — connect a form service to send it (see README).';
  form.reset();
});
