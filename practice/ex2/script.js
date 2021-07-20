
const counterRes = document.querySelector('.counterRes');
const btnMin = document.querySelector('.btnMinus');
const btnPlus = document.querySelector('.btnPlus');
const btnStopCount = document.querySelector('.btnStopCount');

let counter = 0
let increaseInterval
let decreaseInterval

counterRes.innerText = counter;

btnMin.addEventListener('click', () => {
  clearInterval(increaseInterval)

  btnMin.classList.add('minus')
  btnPlus.classList.remove('plus')

  decreaseInterval = setInterval(() => {
    counter-- 
    counterRes.innerText = counter
  }, 150)
}) 

btnPlus.addEventListener('click', () => {
  clearInterval(decreaseInterval);

  btnPlus.classList.add('plus');
  btnMin.classList.remove('minus');

  increaseInterval = setInterval(() => {
    counter ++
    counterRes.innerText = counter
  }, 150)
})

btnStopCount.addEventListener('click', () => {
  clearInterval(decreaseInterval)
  clearInterval(increaseInterval)
})
