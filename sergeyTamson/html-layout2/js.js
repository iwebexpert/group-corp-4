document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.burger__menu')
  const btn = document.querySelectorAll('.burger__btn')

  burger.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    for (let i = 0; i < btn.length; i++) {
      btn[i].classList.toggle('hidden')
    }
  })
})

document.addEventListener('scroll', () => {
  const body = document.querySelector('body')
  const item = document.querySelector('.header__top')
  let pos = window.scrollY
  if (pos > 50) {
    item.classList.add('fixed')
  } else {
    item.classList.remove('fixed')
  }
})
