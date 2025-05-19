// animation.js
// Este archivo contiene todas las animaciones scroll-triggered del sitio usando GSAP y ScrollTrigger.
// Se utilizan funciones reutilizables para evitar repetición y mejorar el mantenimiento del código.

gsap.registerPlugin(ScrollTrigger);

/**
 * Función utilitaria para crear animaciones con ScrollTrigger.
 * - targets: elemento(s) a animar
 * - animationProps: propiedades de animación
 * - trigger: elemento que activa el scrollTrigger
 * - fromTo: booleano que indica si es una animación fromTo (true) o solo from (false)
 */
function createScrollAnimation(targets, animationProps, trigger, fromTo = false) {
    const base = {
        scrollTrigger: {
            trigger,
            start: animationProps.start || "top 80%",
        },
        ...animationProps
    };
    if (fromTo) {
        gsap.fromTo(targets, animationProps.from, {
            ...animationProps.to,
            ...base
        });
    } else {
        gsap.from(targets, base);
    }
}


// Animación principal de la sección Hero Feature.
// Incluye títulos, botones, y etiquetas que entran con un timeline según el tamaño de pantalla.
gsap.context(() => {
    document.querySelectorAll(".hero-feature_wrap").forEach(section => {
        const layout = section.querySelector(".hero-feature_contain");

        layout.observeContainer("(width < 40em)", (match) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                }
            });

            tl.from(section.querySelectorAll(".heading"), {
                y: match ? 30 : 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                stagger: 0.15
            });

            tl.from(section.querySelector(".hero-feature_footer"), {
                y: match ? 20 : 40,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.5");

            tl.from(section.querySelector(".hero-feature_cta"), {
                y: match ? 20 : 40,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.6");

            tl.from(section.querySelector(".hero-feature_medium p"), {
                y: match ? 20 : 40,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.8");

            tl.from(section.querySelector(".u-btn-header"), {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.7");

            tl.from(section.querySelector(".hero-feature_bt"), {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.9");

            tl.from(section.querySelector(".hero-feature_tag"), {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.8");
        });
    });
});


// Animación para los testimonios principales (3 elementos en fila).
// Entrada horizontal desde lados opuestos con fade.
gsap.context(() => {
    document.querySelectorAll(".testimonial_wrap").forEach(section => {
        const trio = section.querySelectorAll(".flex-row > *"); // img-testimonial, card, img-testimonial

        createScrollAnimation(trio, {
            from: {
                opacity: 0,
                x: (i) => i === 0 ? -60 : i === 2 ? 60 : 0
            },
            to: {
                opacity: 1,
                x: 0,
                duration: 1.2,
                ease: "power2.out",
                stagger: 0.2,
                clearProps: "transform,opacity",
            }
        }, section, true);
    });

    // Animación para testimonios adicionales en grid debajo.
    // Entrada con desplazamiento vertical y fade en cascada.
    document.querySelectorAll(".testimonial_component").forEach(component => {
        const blocks = component.querySelectorAll(".testimonial_content");

        createScrollAnimation(blocks, {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.3,
            clearProps: "transform,opacity",
            start: "top 85%"
        }, component);
    });

    // Animación en cascada para las estrellas de rating.
    // Escala y opacidad con efecto de rebote.
    document.querySelectorAll(".testimonial_component").forEach(component => {
        const stars = component.querySelectorAll(".testimonial_rating-icon");

        if (stars.length > 0) {
            createScrollAnimation(stars, {
                scale: 0.6,
                opacity: 0,
                duration: 0.5,
                ease: "back.out(1.7)",
                stagger: {
                    each: 0.05,
                    from: "start"
                },
                clearProps: "transform,opacity",
                start: "top 90%"
            }, component);
        }
    });
});


// Aplica animación en cascada a los ítems del layout, entrando desde la izquierda.
gsap.context(() => {
    document.querySelectorAll(".layout_wrap").forEach(section => {
        const items = section.querySelectorAll(".layout_content-right .layout_item");

        createScrollAnimation(items, {
            from: {
                opacity: 0,
                x: -60
            },
            to: {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power2.out",
                stagger: {
                    each: 0.15,
                    from: "start"
                },
                clearProps: "transform,opacity",
            }
        }, section, true);
    });
});


// Animación para la sección About.
// Títulos y párrafos entran desde la izquierda con fade y los items e imagen con ligeras variaciones.
gsap.context(() => {
    document.querySelectorAll(".about_wrap").forEach(section => {
        const title = section.querySelector(".heading-style-h3");
        const paragraph = section.querySelector(".text-size-medium");
        const items = section.querySelectorAll(".about_item");
        const image = section.querySelector(".about_image");

        createScrollAnimation([title, paragraph], {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
            clearProps: "transform,opacity",
            start: "top 60%"
        }, section);

        createScrollAnimation(items, {
            x: -40,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2,
            clearProps: "transform,opacity",
            start: "top 55%"
        }, section);

        createScrollAnimation(image, {
            scale: 0.92,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
            clearProps: "transform,opacity",
            start: "top 50%"
        }, section);
    });
});


// Animación para las tarjetas de servicios (services_lightbox).
// Entrada con desplazamiento lateral, opacidad y escala con retraso entre cada tarjeta.
const cards = gsap.utils.toArray(".services_lightbox");

cards.forEach((card, i) => {
    createScrollAnimation(card, {
        from: {
            x: -100,
            opacity: 0,
            scale: 0.95
        },
        to: {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "expo.out",
            delay: i * 0.1,
            toggleActions: "play none none reverse"
        },
        start: "top 85%"
    }, card, true);
});


// Timeline para animación coordinada del header: contenido entra desde la izquierda y la imagen desde la derecha.
const tlHeader = gsap.timeline({
    scrollTrigger: {
        trigger: ".header_wrap",
        start: "top 85%",
    }
});

tlHeader.from(".header_content-left > *", {
    x: -80,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out"
});

tlHeader.from(".header_image-wrapper", {
    x: 100,
    opacity: 0,
    duration: 1.2,
    ease: "expo.out"
}, "-=0.8");


// Animación para acordeón FAQ.
// Entrada con desplazamiento vesrtical y fade en cascada.
createScrollAnimation(".faq_accordion", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2
}, ".faq_wrap");


// Timeline para animación de la sección About Me.
// Imagen y contenido textual entran desde lados opuestos con solapamiento para fluidez.
const aboutTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".aboutme_wrap",
        start: "top 80%",
    }
});

aboutTimeline
    .from(".layout-image-block", {
        x: -80,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out"
    })
    .from(".about-me-content", {
        x: 80,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out"
    }, "-=0.8"); // se solapan ligeramente para que la entrada se sienta más fluida
