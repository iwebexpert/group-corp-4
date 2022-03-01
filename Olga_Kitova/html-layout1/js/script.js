document.addEventListener("DOMContentLoaded", function() {

    const body = document.body,
        burger = document.querySelector('.header__burger'),
        nav = document.querySelector('.header__nav');

    burger.addEventListener('click', () => {
        body.classList.toggle('block');
        burger.classList.toggle('activeMenu');
        nav.classList.toggle('activeMenu');
    })
  });