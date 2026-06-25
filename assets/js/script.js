  const counters = document.querySelectorAll(".count");

    const animateCounter = (counter) => {
      const target = +counter.dataset.target;
      const duration = 2000;
      const startTime = performance.now();

      function update(currentTime) {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * target);

        counter.textContent = value + "%";

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          counter.textContent = target + "%";
        }
      }

      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target); // Run only once
        }
      });
    }, {
      threshold: 0.5
    });

    counters.forEach(counter => observer.observe(counter));
const toggle = document.querySelector('.sfe-presence__toggle');
const hiddenCountries = document.querySelectorAll('.sfe-presence__country--hidden');

toggle.addEventListener('click', () => {
    const expanded = toggle.classList.toggle('is-open');

    hiddenCountries.forEach(country => {
        country.classList.toggle('is-visible', expanded);
    });

    toggle.textContent = expanded ? 'Show less' : 'and more';
});
