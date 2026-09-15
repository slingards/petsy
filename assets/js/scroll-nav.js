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

        let lastScrollY = window.scrollY;
        let ticking = false;
        const threshold = 8;

        function updateHeader() {
            const currentScrollY = window.scrollY;

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
                document.querySelector(".nav-dropdown.active, .nav-dropdown:hover");

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
                // Scrolling down: hide.
                header.classList.add("header--hidden");
            } else {
                // Scrolling up: show.
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
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initScrollHeader);
    } else {
        initScrollHeader();
    }
})();
