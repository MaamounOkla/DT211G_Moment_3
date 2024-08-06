//Responsiv menu toggle logik
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});