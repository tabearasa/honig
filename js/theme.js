// Handles the navbar dark/light toggle button.
// The initial theme itself is set by an inline script in <head> so it
// applies before first paint (see the anti-flash snippet on each page).
(function () {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  toggle.addEventListener('click', function () {
    const current = document.documentElement.getAttribute('data-bs-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', next);
    localStorage.setItem('theme', next);
  });
})();
