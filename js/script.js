const button = document.querySelector('.menu');
const nav = document.querySelector('nav');

// Toggle menu open/closed
button?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', isOpen);
});

// Close menu when a link is clicked
nav?.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    nav.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
  }
});

// Close menu on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    nav.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
  }
});