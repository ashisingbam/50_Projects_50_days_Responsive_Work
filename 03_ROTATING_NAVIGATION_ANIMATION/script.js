const container = document.querySelector('.container')
const openMenu = document.querySelector('#open')
const closeMenu = document.querySelector('#close')

openMenu.addEventListener('click', () => {
  container.classList.toggle('show-nav')
})
closeMenu.addEventListener('click', () => {
  container.classList.toggle('show-nav')
})