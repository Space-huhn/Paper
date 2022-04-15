'use strict'
let burgerElement = document.querySelector('.header-burger');
let hederMenu = document.querySelector('.header-nav');
let bodyScrollLook = document.querySelector('body');
let menuNavigationList = document.querySelectorAll('.nav-list__item');

function burgerMenu() {
    burgerElement.addEventListener('click', () => burgerElement.classList.toggle('active'));
    burgerElement.addEventListener('click', () => hederMenu.classList.toggle('active'));
    burgerElement.addEventListener('click', () => bodyScrollLook.classList.toggle('scroll-look'));
}
burgerMenu();

function menuPaddingOnScroll() {
    window.addEventListener('scroll', scrollFromTop);
    function scrollFromTop() {
        let scrollLenth = window.pageYOffset;
        let header = document.querySelector('.header');
        if (scrollLenth >= 100) {
            header.style.cssText = `
                padding: 10px 20px;
                transition: all 0.2s ease 0s;
                background-color: rgba(0, 0, 0, .3);
            `;
        } else {
            header.style.cssText = `
                padding: 38px 20px;
                transition: all 0.2s ease 0s;
            `;
        }
    }
}
menuPaddingOnScroll();

function closeMenuAfterClick() {
    menuNavigationList.forEach((element) => {
        element.addEventListener('click', (event) => {
            if (hederMenu.classList.contains('active')) {
                hederMenu.classList.remove('active');
                burgerElement.classList.remove('active');
                bodyScrollLook.classList.remove('active');
            }
        })
    });
}
closeMenuAfterClick();
