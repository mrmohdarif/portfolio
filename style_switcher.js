const switcher = document.querySelector('.style-switcher');
const switcherToggle = document.querySelector('.style-switcher-toggle');
const themeToggle = document.querySelector('.theme-toggle');
const colorButtons = document.querySelectorAll('[data-color]');
const root = document.documentElement;

const savedAccent = localStorage.getItem('accentColor');
const savedTheme = localStorage.getItem('siteTheme');

if (savedAccent) {
  root.style.setProperty('--accent', savedAccent);
  colorButtons.forEach((button) => {
    button.classList.toggle('selected', button.dataset.color === savedAccent);
  });
}

if (savedTheme === 'dark') {
  document.body.classList.add('dark');
}

switcherToggle.addEventListener('click', () => {
  switcher.classList.toggle('open');
});

window.addEventListener('scroll', () => {
  if (switcher.classList.contains('open')) {
    switcher.classList.remove('open');
  }
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const themeMode = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('siteTheme', themeMode);
});

colorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const color = button.dataset.color;
    root.style.setProperty('--accent', color);
    colorButtons.forEach((item) => item.classList.toggle('selected', item === button));
    localStorage.setItem('accentColor', color);
  });
});
