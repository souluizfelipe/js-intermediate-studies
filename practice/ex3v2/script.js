const dataForm = document.querySelector('#dataForm');
const stateSelect = document.querySelector('#state');
const citySelect = document.querySelector('#city');
const citySection = document.querySelector('.city-section');

const cities = {
  pr: ['Curitiba', 'Ponta Grossa', 'Guarapuava', 'Paranaguá'],
  sc: ['Florianópolis', 'Joinville', 'Bombinhas', 'Canoinhas'],
}


stateSelect.addEventListener('change', e => {
  let state = e.target.value;
  let citiesList;

  if(state === 'pr') {
    citiesList = cities.pr;
  };
  
  if(state === 'sc') {
    citiesList = cities.sc;
  };
 
  citySection.classList.add('active');

  let cityOptions = `<option value="">--Selecione uma Cidade--</option>`;

  for(let city of citiesList) { 
    cityOptions += `<option value="${city}">${city}</option>`;
  };
  
  citySelect.innerHTML = cityOptions;
});

dataForm.addEventListener('submit', e => {
  e.preventDefault();

  let hasError = false;
  let selectState = document.forms['dataForm']['state'];
  let selectCity = document.forms['dataForm']['city'];

  if(!selectState.value) {
    hasError = true;
    selectState.nextSibling.nextSibling.textContent = 'Escolha um estado!'
    selectState.classList.add('inputError');
  } else {
    selectState.nextSibling.nextSibling.textContent = ''
    selectState.classList.remove('inputError');
  };

  if(!selectCity.value) {
    hasError = true;
    selectCity.classList.add('inputError');
    selectCity.nextSibling.nextSibling.textContent = 'Escolha uma cidade!'
  } else {
    selectCity.classList.remove('inputError');
    selectCity.nextSibling.nextSibling.textContent = ''
  };
  
  if(!hasError) {
    dataForm.submit();
  }

});
