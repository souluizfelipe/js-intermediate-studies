const menuToggle = document.querySelector('.menuToggle');
const mobileMenu = document.querySelector('.mobileMenu');

let menu = false

menuToggle.addEventListener('click', () => {
    if(menu === true) {
        menu = false
        mobileMenu.classList.remove('menuOn')
        menuToggle.textContent = 'Abrir'
    } else {
        menu = true
        mobileMenu.classList.add('menuOn')
        menuToggle.textContent = 'Fechar'

    }
});