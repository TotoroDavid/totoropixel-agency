// Initialize GSAP and plugins
console.log("hello world");



gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    smoothTouch: false,
    touchMultiplier: 2
});

// Sync Lenis with GSAP
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

// Main animation context
gsap.context(() => {
    // Navbar animations
    gsap.from('.navbar', {
        opacity: 0,
        y: -20,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.from('.navbar .nav-link', {
        opacity: 0,
        y: -10,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
    });

    // Hero section animations
    gsap.from('.hero', {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: 'power2.out'
    });

    gsap.from('.hero h1', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power2.out'
    });

    gsap.from('.hero p', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.4,
        ease: 'power2.out'
    });

    gsap.from('.hero .button', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.6,
        ease: 'power2.out'
    });

    // Features section animations
    gsap.from('.features', {
        scrollTrigger: {
            trigger: '.features',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.from('.feature-card', {
        scrollTrigger: {
            trigger: '.features',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    });

    // About section animations
    gsap.from('.about', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.from('.about-content', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%'
        },
        opacity: 0,
        x: -30,
        duration: 1,
        delay: 0.2,
        ease: 'power2.out'
    });

    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%'
        },
        opacity: 0,
        x: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power2.out'
    });

    // Cards section animations
    gsap.from('.cards', {
        scrollTrigger: {
            trigger: '.cards',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.from('.card', {
        scrollTrigger: {
            trigger: '.cards',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    });

    // Gallery section animations
    gsap.from('.gallery', {
        scrollTrigger: {
            trigger: '.gallery',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.from('.gallery-item', {
        scrollTrigger: {
            trigger: '.gallery',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
    });

    // Testimonials section animations
    gsap.from('.testimonials', {
        scrollTrigger: {
            trigger: '.testimonials',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.from('.testimonial', {
        scrollTrigger: {
            trigger: '.testimonials',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    });

    // Footer animations
    gsap.from('.footer', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%'
        },
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.from('.footer-link', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%'
        },
        opacity: 0,
        y: 10,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
    });
});

// Image hover effects
document.querySelectorAll('.hover-image').forEach(img => {
    img.addEventListener('mouseenter', () => {
        gsap.to(img, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    img.addEventListener('mouseleave', () => {
        gsap.to(img, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Refresh ScrollTrigger after images and fonts load
window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});

// Container queries setup
document.querySelectorAll('[data-container-query]').forEach(element => {
    observeContainer(element, {
        breakpoints: {
            small: '20em',
            medium: '40em',
            large: '60em'
        }
    });
});
