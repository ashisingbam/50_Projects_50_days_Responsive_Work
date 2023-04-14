
const container = document.querySelector('.container')
const circleMenu = document.querySelector('.circle')
const openMenu = document.querySelector('#open')
const closeMenu = document.querySelector('#close')
const navLi = document.querySelectorAll('.nav-icons')

function handleEvents() {
    circleMenu.classList.toggle('rotateIcon')
    container.classList.toggle('rotatePage')
    navLi.forEach(li => {
      li.classList.toggle('show-nav')
    })
}
openMenu.addEventListener('click', () => {
  handleEvents()
})
closeMenu.addEventListener('click', () => {
  handleEvents()
})