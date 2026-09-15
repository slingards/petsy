(function () {
    "use strict";

    const section = document.querySelector("#marketplace-stats");
    if (!section) return;

    const counters = section.querySelectorAll(".stat-number[data-count]");
    let hasStarted = false;

    function animateCounter(element) {
        const target = Number(element.dataset.count);
        const duration = target <= 10 ? 850 : 1200;
        const startTime = performance.now();

        function tick(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(target * eased);
            element.textContent = value.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                element.textContent = target.toLocaleString();
            }
        }

        requestAnimationFrame(tick);
    }

    function startCounters() {
        if (hasStarted) return;
        hasStarted = true;
        counters.forEach(function (counter, index) {
            window.setTimeout(function () {
                animateCounter(counter);
            }, index * 120);
        });
    }

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function (entries) {
            if (entries.some(function (entry) { return entry.isIntersecting; })) {
                startCounters();
                observer.disconnect();
            }
        }, { threshold: 0.28 });

        observer.observe(section);
    } else {
        startCounters();
    }
})();
