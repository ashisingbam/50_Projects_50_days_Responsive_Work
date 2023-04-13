
const container = document.querySelector('.container')
const circleMenu = document.querySelector('.circle')
const openMenu = document.querySelector('#open')
const closeMenu = document.querySelector('#close')

openMenu.addEventListener('click', () => {
  circleMenu.classList.toggle('rotateIcon')
  container.classList.add('rotatePage')
  console.log('rotate');
})
closeMenu.addEventListener('click', () => {
  circleMenu.classList.toggle('rotateIcon')
  container.classList.remove('rotatePage')

  console.log('rotate');
})