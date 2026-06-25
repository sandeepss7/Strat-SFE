const toggle = document.querySelector('.sfe-presence__toggle');
const hiddenCountries = document.querySelectorAll('.sfe-presence__country--hidden');

toggle.addEventListener('click', () => {
    const expanded = toggle.classList.toggle('is-open');

    hiddenCountries.forEach(country => {
        country.classList.toggle('is-visible', expanded);
    });

    toggle.textContent = expanded ? 'Show less' : 'and more';
});