document.addEventListener('DOMContentLoaded', function () {
  // Simple HTML includes for header/footer/legal
  document.querySelectorAll('[data-include]').forEach(function (placeholder) {
    var name = placeholder.getAttribute('data-include');
    if (!name) return;
    fetch('partials/' + name + '.html')
      .then(function (response) { return response.text(); })
      .then(function (html) {
        placeholder.innerHTML = html;
        if (name === 'header') {
          initNavToggle();
        }
        if (name === 'footer') {
          setCurrentYear();
        }
      })
      .catch(function (error) {
        console.error('Include failed for', name, error);
      });
  });

  function initNavToggle() {
    var toggle = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.nav-links');
    if (!toggle || !navLinks) return;
    toggle.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('nav-open');
    });
  }

  function setCurrentYear() {
    var el = document.getElementById('js-current-year');
    if (el) {
      el.textContent = new Date().getFullYear();
    }
  }
});