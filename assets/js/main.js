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

    initLangBanner();
  });

  function initLangBanner() {
    var translations = {
      math:    ['Math', 'Matem\u00e1ticas', 'Math\u00e9matiques', '\u6570\u5b66'],
      law:     ['Law', 'Derecho', 'Droit', '\u6cd5\u5f8b'],
      finance: ['Finance', 'Finanzas', 'Finance', '\u91d1\u878d']
    };

    var words = document.querySelectorAll('.lang-word');
    if (!words.length) return;

    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var cycleMs = 2600;
    var staggerMs = 550;

    words.forEach(function (el, index) {
      var key = el.getAttribute('data-lang');
      var list = translations[key];
      if (!list) return;
      var i = 0;

      function step() {
        i = (i + 1) % list.length;
        if (reduced) {
          el.textContent = list[i];
          return;
        }
        el.classList.add('swap');
        setTimeout(function () {
          el.textContent = list[i];
          el.classList.remove('swap');
        }, 280);
      }

      setTimeout(function () {
        setInterval(step, cycleMs);
      }, index * staggerMs);
    });
  }
})();
