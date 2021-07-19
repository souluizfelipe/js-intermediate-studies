
const counter = document.querySelector('.counter')
const buttonCounter = document.querySelector('.buttonCounter')

let count = 0

const interval = setInterval(() => {
  count ++
  counter.textContent = count
})

buttonCounter.addEventListener('click', () => {
  clearInterval(interval)  
})