document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu
  const hamburger = document.querySelector('#hamburger');
  const navLinks = document.querySelector('nav ul');

  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
          navLinks.classList.remove('active');
      });
  });

  // Fade-in Animation for Sections
  const sections = document.querySelectorAll('section');
  const options = {
      threshold: 0.2
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, options);

  sections.forEach(section => {
      observer.observe(section);
  });

  // Carousel Functionality
  const carouselImages = document.querySelector('.carousel-images');
  const teamMembers = document.querySelectorAll('.team-member');
  const leftBtn = document.querySelector('.carousel-btn.left');
  const rightBtn = document.querySelector('.carousel-btn.right');

  let currentIndex = 0;
  const totalImages = teamMembers.length;

  function updateCarousel() {
      const offset = -currentIndex * 100;
      carouselImages.style.transform = `translateX(${offset}%)`;
  }

  updateCarousel();

  leftBtn.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
      updateCarousel();
  });

  rightBtn.addEventListener('click', () => {
      currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
      updateCarousel();
  });

  setInterval(() => {
      currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
      updateCarousel();
  }, 5000);

  // Dark Mode Toggle
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;

  darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      darkModeToggle.textContent = body.classList.contains('dark-mode') ? 'Toggle Light Mode' : 'Toggle Dark Mode';
  });
});