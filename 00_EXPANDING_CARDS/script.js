const cardSection = document.querySelectorAll('.card-section')

// console.log(cardSection);

cardSection.forEach(card => {
  console.log(card);
  card.addEventListener('click', () => {
    cardSection.forEach(card => {
      card.classList.remove('open')
    })
    card.classList.add('open')
    console.log('added');
  })
})
