  // Wait for the DOM to load

  // Mobile menu
  document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('nav ul');
  
    hamburger.addEventListener('click', function() {
      menu.classList.toggle('show'); // Toggle mobile menu
    });
  });
  