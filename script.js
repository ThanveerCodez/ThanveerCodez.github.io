document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle?.querySelector('i');
    const navbar = document.getElementById('navbar');
    const ctaButton = document.getElementById('cta-button');
    const contactForm = document.getElementById('contact-form');
    const yearSpan = document.getElementById('current-year');

    // Handle theme
    const setTheme = (theme) => {
        const isDark = theme === 'dark';
        document.body.classList.toggle('dark-mode', isDark);
        if (icon) {
            icon.classList.replace(isDark ? 'fa-moon' : 'fa-sun', isDark ? 'fa-sun' : 'fa-moon');
            icon.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        }
        localStorage.setItem('theme', theme);
    };

    // ts won't friggin work yo
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    setTheme(savedTheme);

    themeToggle?.addEventListener('click', () => {
        const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // Update year in footer
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Smooth scrolling for nav links
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // CTA button scroll to portfolio
    ctaButton?.addEventListener('click', () => {
        const portfolio = document.querySelector('#portfolio');
        portfolio?.scrollIntoView({ behavior: 'smooth' });
    });

    // Contact form handling
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if (name && email && message) {
            console.log('Form submitted:', { name, email, message });
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Navbar background scroll effect
    window.addEventListener('scroll', () => {
        if (!navbar) return;
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(44, 62, 80, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'var(--nav-bg)';
            navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        }
    });
});
