  // Wait for the DOM to load

  // Mobile menu
  document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.hamburger');
    var menu = document.querySelector('nav ul');

    // Toggle the "show" class on click
    hamburger.addEventListener('click', function () {
      menu.classList.toggle('show');
      // Update aria-expanded for accessibility
      var isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
    });
  });