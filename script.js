const typed = new Typed('.typing', {
  strings: ['Fullstack Developer', 'Frontend Developer', 'Backend Developer'],
  typeSpeed: 90,
  backSpeed: 60,
  backDelay: 1800,
  loop: true,
});

const sidebar = document.querySelector('.sidebar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.sidebar-nav a');

navToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
});

const sections = document.querySelectorAll('section[id]');
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.35,
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.id;
    const activeLink = document.querySelector(`.sidebar-nav a[href="#${id}"]`);

    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.remove('active'));
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}, observerOptions);

sections.forEach((section) => sectionObserver.observe(section));

const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = event.target.name.value.trim();
  const email = event.target.email.value.trim();
  const subject = event.target.subject.value.trim();
  const message = event.target.message.value.trim();

  const mailto = `mailto:dev.mohdarif@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`)}`;
  window.location.href = mailto;
});
