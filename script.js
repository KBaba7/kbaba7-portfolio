document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    // --- Particle Background ---
    tsParticles.load("particles-js", {
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab" // "grab", "bubble", "repulse"
                },
                onClick: {
                    enable: true,
                    mode: "push" // "push", "remove", "bubble"
                }
            },
            modes: {
                grab: {
                    distance: 140,
                    links: { opacity: 0.3 }
                },
                bubble: {
                    distance: 200,
                    size: 40,
                    duration: 2,
                    opacity: 0.8
                },
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    quantity: 4
                },
                remove: {
                    quantity: 2
                }
            }
        },
        particles: {
            number: {
                value: 60, // Adjust particle count
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#444444" // Particle color
            },
            shape: {
                type: "circle" // "circle", "edge", "triangle", "polygon", "star"
            },
            opacity: {
                value: {min: 0.1, max: 0.4},
                animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.05
                }
            },
            size: {
                value: {min: 1, max: 3},
                animation: {
                    enable: true,
                    speed: 2,
                    minimumValue: 0.3
                }
            },
            links: {
                enable: true,
                distance: 150,
                color: "#555555", // Link color
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 1, // Movement speed
                direction: "none", // "none", "top", "top-right", ...
                random: true,
                straight: false,
                outModes: "out" // "out", "bounce"
            }
        },
        detectRetina: true
    });

    // --- GSAP Animations ---

    // Hero Section Animation
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    heroTl.to(".hero-title span", {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.05,
        duration: 1
    })
    .to(".hero-subtitle", { opacity: 1, y: 0, duration: 0.8, delay: -0.5 })
    .to(".hero-cta", { opacity: 1, scale: 1, duration: 0.8, delay: -0.4 });

    // General Section Title and Text Animation
    gsap.utils.toArray('.content-section').forEach(section => {
        const title = section.querySelector('.section-title');
        const text = section.querySelector('.section-text'); // If present

        const sectionTl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 80%", // Trigger when 80% of section is in view
                toggleActions: "play none none none", // Play animation once
            }
        });

        if (title) {
            sectionTl.to(title, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });
        }
        if (text) {
            sectionTl.to(text, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: -0.4 });
        }
    });
    
    // Timeline Items Animation
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        gsap.fromTo(item, 
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            }
        );
    });

    // Project Cards Animation (Flip effect is CSS, GSAP for reveal)
    gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.fromTo(card,
            { opacity: 0, y: 50, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.7,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card.parentNode, // Trigger on the grid
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            }
        );
    });

    // Skills Categories Animation
    gsap.utils.toArray('.skill-category').forEach((category, index) => {
        gsap.fromTo(category,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                stagger: 0.15,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: category.parentNode, // Trigger on the grid
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            }
        );
    });
    
    // Education Items Animation
    gsap.utils.toArray('.edu-item').forEach((item, index) => {
        gsap.fromTo(item,
            { opacity: 0, x: -30 },
            {
                opacity: 1,
                x: 0,
                duration: 0.7,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 90%",
                    toggleActions: "play none none none",
                }
            }
        );
    });


    // --- Header Scroll Effect ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Active Navigation Link Highlighting ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');

    function changeNav() {
        let index = sections.length;

        while(--index && window.scrollY + 100 < sections[index].offsetTop) {}
        
        navLinks.forEach((link) => link.classList.remove('active'));
        // Ensure the link exists before trying to add 'active' class
        if (navLinks[index]) { 
            navLinks[index].classList.add('active');
        } else if (window.scrollY < sections[0].offsetTop -100 && navLinks[0]) {
            // Special case for top of page if hero is first link
             navLinks[0].classList.add('active');
        }
    }
    changeNav(); // Call on load
    window.addEventListener('scroll', changeNav);

    // Basic mobile menu toggle (if you want to implement it)
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            // This is a very basic toggle. A real implementation would animate, etc.
            if (navUl.style.display === 'flex') {
                navUl.style.display = 'none';
            } else {
                navUl.style.display = 'flex';
                // You'd need more CSS to style this for mobile (e.g., flex-direction: column)
            }
        });
    }

});