const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
if (menuButton && siteNav && !siteNav.classList.contains('always-on')) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('open');
  });
}
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
