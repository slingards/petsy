/*
 * Scroll-aware header
 * Hides the main navigation/header while scrolling down
 * and reveals it while scrolling up.
 */
(function () {
    "use strict";

    function initScrollHeader() {
        const header = document.querySelector(".header");
        if (!header) return;

        // Every hero used by the site. This keeps the color change
        // consistent across Dogs, Cats, Birds, Reptiles, Wild Cats,
        // Primates, Bears, and the main homepage hero.
        const hero = document.querySelector(
            ".dogs-hero, .cats-hero, .birds-hero, .reptiles-hero, " +
            ".wildcats-hero, .primates-hero, .bears-hero, .hero"
        );

        let lastScrollY = window.scrollY;
        let ticking = false;
        const threshold = 8;

        function updateHeader() {
            const currentScrollY = window.scrollY;

            // Change navigation color after the page hero has passed.
            if (hero) {
                const heroBottom = hero.getBoundingClientRect().bottom;

                if (heroBottom <= 70) {
                    header.classList.add("header--scrolled");
                } else {
                    header.classList.remove("header--scrolled");
                }
            } else if (currentScrollY <= 10) {
                header.classList.remove("header--scrolled");
            } else {
                // Pages without a hero should use the scrolled state
                // as soon as the user leaves the top of the page.
                header.classList.add("header--scrolled");
            }

            // Always show the header at the very top.
            if (currentScrollY <= 10) {
                header.classList.remove("header--hidden");
                lastScrollY = currentScrollY;
                ticking = false;
                return;
            }

            // Do not hide the header while a menu/dropdown is open.
            const mobileMenuOpen =
                document.querySelector(".mobile-menu.active");
            const navDropdownOpen =
                document.querySelector(
                    ".nav-dropdown.active, .nav-dropdown:hover, " +
                    ".dogs-nav-dropdown:hover, .cats-nav-dropdown:hover, " +
                    ".birds-nav-dropdown:hover, .reptiles-nav-dropdown:hover, " +
                    ".wildcats-nav-dropdown:hover, .primates-nav-dropdown:hover, " +
                    ".bears-nav-dropdown:hover"
                );

            if (mobileMenuOpen || navDropdownOpen) {
                header.classList.remove("header--hidden");
                lastScrollY = currentScrollY;
                ticking = false;
                return;
            }

            // Ignore tiny movements to prevent jitter.
            if (Math.abs(currentScrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }

            if (currentScrollY > lastScrollY) {
                header.classList.add("header--hidden");
            } else {
                header.classList.remove("header--hidden");
            }

            lastScrollY = currentScrollY;
            ticking = false;
        }

        window.addEventListener(
            "scroll",
            function () {
                if (!ticking) {
                    window.requestAnimationFrame(updateHeader);
                    ticking = true;
                }
            },
            { passive: true }
        );

        // Set the correct state immediately on page load/refresh.
        updateHeader();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initScrollHeader);
    } else {
        initScrollHeader();
    }
})();
