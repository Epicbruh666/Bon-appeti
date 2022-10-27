const menuHamburgers = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")

menuHamburgers.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})