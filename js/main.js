// Modern JavaScript for Leon Template
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('.header');
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        // Header scroll effect
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Back to top button visibility
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Back to top functionality
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    document.querySelectorAll('.feat, .srv, .card, .about-content').forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
    
    // Add loading states to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.classList.contains('loading')) return;
            
            // Simulate loading state for demo
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                this.classList.add('loading');
                this.innerHTML = '<span class="loading"></span> Loading...';
                
                setTimeout(() => {
                    this.classList.remove('loading');
                    this.innerHTML = this.textContent.includes('View') ? 'View Project' : 'Get In Touch';
                }, 2000);
            }
        });
    });
    
    // Parallax effect for landing section
    const landing = document.querySelector('.landing');
    if (landing) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = landing.querySelector('.intro-text');
            if (parallax) {
                const speed = 0.5;
                parallax.style.transform = `translateY(${scrolled * speed}px)`;
            }
        });
    }
    
    // Add hover effect to social icons
    document.querySelectorAll('.contact .info .social i').forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 0.6s ease-in-out';
        });
        
        icon.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
    
    // Dynamic year in footer
    const yearElement = document.querySelector('.footer-text');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close any open menus or modals
            const links = document.querySelector('.header .links ul');
            if (links && links.style.display === 'block') {
                links.style.display = 'none';
            }
        }
    });
    
    // Performance optimization - Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(function() {
            // Scroll-based animations here
        });
    });
    
    // Touch device detection
    function isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }
    
    if (isTouchDevice()) {
        document.body.classList.add('touch-device');
    }
    
    // Console welcome message
    console.log('%c🎨 Leon Template - Modern CSS Enhanced', 'color: #10cab7; font-size: 20px; font-weight: bold;');
    console.log('%cBuilt with modern CSS features and best practices', 'color: #2c4755; font-size: 14px;');
});
