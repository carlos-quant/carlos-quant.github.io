(function () {
  var root = document.documentElement;
  var stored = localStorage.getItem('theme');
  var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  function apply(theme) {
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  }

  var initial = stored || (prefersLight ? 'light' : 'dark');
  apply(initial);

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;

    function updateIcon() {
      var isLight = root.classList.contains('light');
      toggle.textContent = isLight ? '\u25CF' : '\u25CB';
      toggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
    }
    updateIcon();

    toggle.addEventListener('click', function () {
      var isLight = root.classList.toggle('light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      updateIcon();
    });
  });
})();
