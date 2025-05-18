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


gsap.context(() => {
    // === 1. Entrada horizontal de los 3 elementos principales ===
    document.querySelectorAll(".testimonial_wrap").forEach(section => {
        const trio = section.querySelectorAll(".flex-row > *"); // img-testimonial, card, img-testimonial

        gsap.fromTo(trio,
            {
                opacity: 0,
                x: (i) => i === 0 ? -60 : i === 2 ? 60 : 0
            },
            {
                opacity: 1,
                x: 0,
                duration: 1.2,
                ease: "power2.out",
                stagger: 0.2,
                clearProps: "transform,opacity",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                }
            }
        );
    });

    // === 2. Testimonios adicionales en grid debajo ===
    document.querySelectorAll(".testimonial_component").forEach(component => {
        const blocks = component.querySelectorAll(".testimonial_content");

        gsap.from(blocks, {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.3,
            clearProps: "transform,opacity",
            scrollTrigger: {
                trigger: component,
                start: "top 85%",
            }
        });
    });

    // === 3. Estrellas (rating) animadas en cascada ===
    document.querySelectorAll(".testimonial_component").forEach(component => {
        const stars = component.querySelectorAll(".testimonial_rating-icon");

        if (stars.length > 0) {
            gsap.from(stars, {
                scale: 0.6,
                opacity: 0,
                duration: 0.5,
                ease: "back.out(1.7)",
                stagger: {
                    each: 0.05,
                    from: "start"
                },
                clearProps: "transform,opacity",
                scrollTrigger: {
                    trigger: component,
                    start: "top 90%",
                }
            });
        }
    });
});


gsap.context(() => {
    document.querySelectorAll(".layout_wrap").forEach(section => {
        const items = section.querySelectorAll(".layout_content-right .layout_item");

        gsap.fromTo(items,
            {
                opacity: 0,
                x: -60
            },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power2.out",
                stagger: {
                    each: 0.15,
                    from: "start"
                },
                clearProps: "transform,opacity",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                }
            }
        );
    });
});

gsap.context(() => {
    document.querySelectorAll(".about_wrap").forEach(section => {
        const title = section.querySelector(".heading-style-h3");
        const paragraph = section.querySelector(".text-size-medium");
        const items = section.querySelectorAll(".about_item");
        const image = section.querySelector(".about_image");

        // Paso 1: Título + Párrafo
        gsap.from([title, paragraph], {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
            clearProps: "transform,opacity",
            scrollTrigger: {
                trigger: section,
                start: "top 60%", // ajustado para iniciar más abajo
            }
        });

        // Paso 2: Items en cascada
        gsap.from(items, {
            x: -40,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2,
            clearProps: "transform,opacity",
            scrollTrigger: {
                trigger: section,
                start: "top 55%", // aparece cuando ya está bien visible
            }
        });

        // Paso 3: Imagen grande (última)
        gsap.from(image, {
            scale: 0.92,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
                trigger: section,
                start: "top 50%", // imagen aparece cuando la mayoría del contenido ya entró
            }
        });
    });
});

gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray(".services_lightbox");

cards.forEach((card, i) => {
    gsap.fromTo(card,
        {
            x: -100,
            opacity: 0,
            scale: 0.95
        },
        {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: {
                trigger: card,
                start: "top 85%", // se activa cuando entra en viewport
                toggleActions: "play none none reverse"
            },
            delay: i * 0.1 // cascada
        }
    );
});


gsap.registerPlugin(ScrollTrigger);

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


gsap.from(".faq_accordion", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".faq_wrap",
        start: "top 80%",
    }
});

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

