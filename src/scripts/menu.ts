document.querySelector('.hamburger')!.addEventListener('click', () => { // ! is non the non-null assertion operator, useful for TypeScript when thinks might be null
    document.querySelector('.nav-links')!.classList.toggle('expanded');
});