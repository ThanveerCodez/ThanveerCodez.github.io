document.addEventListener('DOMContentLoaded', function () {
  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  const icon = themeToggle.querySelector('i');
  let currentTheme = localStorage.getItem('theme') || 'dark';

  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    document.body.classList.remove('dark-mode');
    icon.classList.replace('fa-sun', 'fa-moon');
  }

  themeToggle.addEventListener('click', function () {
    if (document.body.classList.contains('dark-mode')) {
      document.body.classList.remove('dark-mode');
      icon.classList.replace('fa-sun', 'fa-moon');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark-mode');
      icon.classList.replace('fa-moon', 'fa-sun');
      localStorage.setItem('theme', 'dark');
    }
  });

  // Update copyright year
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth',
        });
      }
    });
  });

  // CTA button functionality
  const ctaButton = document.getElementById('cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', function () {
      document.querySelector('#portfolio').scrollIntoView({
        behavior: 'smooth',
      });
    });
  }

  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      console.log('Form submitted:', { name, email, message });

      alert('Thank you for your message! I will get back to you soon.');

      contactForm.reset();
    });
  }

  // Navbar background change on scroll
  window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(44, 62, 80, 0.95)';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.background = 'var(--nav-bg)';
      navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
  });

  // Slide-in animation on scroll
  function slideInOnScroll() {
    const sections = document.querySelectorAll('.slide-in-left');
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', slideInOnScroll);
  slideInOnScroll();
});
