document.addEventListener("DOMContentLoaded", () => {

    /* ===== Counter Animation ===== */
    const counters = document.querySelectorAll(".count");

    const animateCounter = (counter) => {
        const target = +counter.dataset.target;
        const suffix = counter.dataset.suffix || "%";
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const value = Math.floor(progress * target);

            counter.textContent = value + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.textContent = target + suffix;
            }
        }

        requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    counters.forEach(counter => observer.observe(counter));


    /* ===== Show More Countries ===== */
    const toggle = document.querySelector(".sfe-presence__toggle");
    const hiddenCountries = document.querySelectorAll(".sfe-presence__country--hidden");

    if (toggle) {
        toggle.addEventListener("click", () => {
            const expanded = toggle.classList.toggle("is-open");

            hiddenCountries.forEach(country => {
                country.classList.toggle("is-visible", expanded);
            });

            toggle.textContent = expanded ? "Show less" : "and more";
        });
    }


    /* ===== Select Arrow Rotate ===== */
    document.querySelectorAll(".select-group select").forEach(select => {
        select.addEventListener("focus", () => {
            select.parentElement.classList.add("open");
        });

        select.addEventListener("blur", () => {
            select.parentElement.classList.remove("open");
        });

        select.addEventListener("change", () => {
            select.parentElement.classList.remove("open");
        });
    });

});