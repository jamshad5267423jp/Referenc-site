const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.service-card');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;
    cards.forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

const revealItems = document.querySelectorAll('.service-card, .project, .process-list > div, .statement-left, .statement-right');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [
          {opacity: 0, transform: 'translateY(22px)'},
          {opacity: 1, transform: 'translateY(0)'}
        ],
        {duration: 650, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'forwards'}
      );
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.08});

revealItems.forEach(el => observer.observe(el));
