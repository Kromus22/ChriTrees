const buttonsOrder = document.querySelectorAll('.product__button_order')
const overlayOrder = document.querySelector('.overlay_order')
const buttonConsult = document.querySelector('.header__consultation')


buttonConsult.addEventListener('click', () => {
  overlayOrder.classList.add('overlay_active')
})

buttonsOrder.forEach(buttonOrder => {
  buttonOrder.addEventListener('click', () => {
    overlayOrder.classList.add('overlay_active')
    const order = overlayOrder.querySelector('.modal__order')
    order.value = buttonOrder.dataset.order
  })
})

overlayOrder.addEventListener('click', event => {
  const target = event.target

  if (target === overlayOrder || target.closest('.modal__close')) {
    overlayOrder.classList.remove('overlay_active')
  }

})