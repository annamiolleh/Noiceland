"use strict"
const iconMenu = document.querySelector('.header__burger');
if (iconMenu){
    const menuBody = document.querySelector('.menu__body');  
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
  });
}