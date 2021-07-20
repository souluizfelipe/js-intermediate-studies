const counterRes = document.querySelector('.counterResult');
const btnMinus = document.querySelector('.buttonMinus');
const btnPlus = document.querySelector('.buttonPlus');

let counter = 0;

counterRes.textContent = counter;

btnMinus.addEventListener('click', () => {
  counter --
  counterRes.textContent = counter 
});

btnPlus.addEventListener('click', () => {
  counter ++
  counterRes.textContent = counter 
});

