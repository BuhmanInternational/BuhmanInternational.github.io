const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const heroCarousel = document.querySelector(".visual-carousel");
const heroSlides = heroCarousel ? Array.from(heroCarousel.querySelectorAll(".visual-slide")) : [];
const heroIndicators = heroCarousel ? Array.from(heroCarousel.querySelectorAll(".indicator")) : [];

if (menuToggle && mainNav) {
    const closeMenu = () => {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir men\u00fa");
        mainNav.classList.remove("is-open");
    };

    const openMenu = () => {
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Cerrar men\u00fa");
        mainNav.classList.add("is-open");
    };

    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    mainNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 720) {
                closeMenu();
            }
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 720) {
            closeMenu();
        }
    });
}

if (heroCarousel && heroSlides.length > 0) {
    let activeIndex = 0;
    let autoplayId = null;

    const setActiveSlide = (index) => {
        heroSlides.forEach((slide, slideIndex) => {
            slide.classList.toggle("is-active", slideIndex === index);
        });

        heroIndicators.forEach((indicator, indicatorIndex) => {
            indicator.classList.toggle("is-active", indicatorIndex === index);
        });
    };

    const startAutoplay = () => {
        if (autoplayId) {
            clearInterval(autoplayId);
        }

        autoplayId = setInterval(() => {
            activeIndex = (activeIndex + 1) % heroSlides.length;
            setActiveSlide(activeIndex);
        }, 3000);
    };

    const stopAutoplay = () => {
        if (autoplayId) {
            clearInterval(autoplayId);
            autoplayId = null;
        }
    };

    setActiveSlide(activeIndex);
    startAutoplay();

    heroCarousel.addEventListener("mouseenter", stopAutoplay);
    heroCarousel.addEventListener("mouseleave", startAutoplay);
    heroCarousel.addEventListener("focusin", stopAutoplay);
    heroCarousel.addEventListener("focusout", startAutoplay);

    heroIndicators.forEach((indicator, indicatorIndex) => {
        indicator.addEventListener("click", () => {
            activeIndex = indicatorIndex;
            setActiveSlide(activeIndex);
            startAutoplay();
        });
    });
}
