const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the 'active' class on click
  });
  