(function initTheme() {
  var theme = JSON.parse(localStorage.getItem('theme')) || 'light';

  document.documentElement.className = theme;
})();
