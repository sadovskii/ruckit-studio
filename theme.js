(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  function setTheme(theme) {
    if (theme !== 'light' && theme !== 'dark') return;
    root.dataset.theme = theme;
    toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    toggle.querySelector('.theme-label').textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
    toggle.querySelector('[aria-hidden]').textContent = theme === 'dark' ? '☀' : '☾';
    document.querySelector('.theme-status').textContent = theme === 'dark' ? 'Dark theme' : 'Light theme';
    document.querySelectorAll('[data-set-theme]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.setTheme === theme)));
    try { localStorage.setItem('ruckit-theme', theme); } catch (_) {}
  }
  toggle.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
  document.querySelectorAll('[data-set-theme]').forEach(button => button.addEventListener('click', () => setTheme(button.dataset.setTheme)));
  setTheme(root.dataset.theme);
})();
