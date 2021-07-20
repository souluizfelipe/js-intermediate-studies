const form = document.querySelector('#formData');
const stateSelect = document.querySelector('#state-select');
const citySelect = document.querySelector('#city-select');
const cityWrapper = document.querySelector('.city-wrapper');

const cities = {
  sp: [
    'Jundiaí',
    'Campinas',
    'Limeira',
    'Atibaia',
  ],
  rj: [
    'Teresópolis', 
    'Resende', 
    'Maricá', 
    'Macaé',
  ],
};

stateSelect.addEventListener('change', (e)=> {
  const state = e.target.value;
  
  let cityList;
  
  if(state === 'sp') {
    cityList = cities.sp
  };
  
  if(state === 'rj') {
    cityList = cities.rj
  };
  
  let citiesHTML = `<option value=''>-- Selecione uma Cidade--</option>`;
  
  for(let city of cityList){
    citiesHTML +=  `<option value="${city}">${city}</option>`
  };
  
  citySelect.innerHTML = citiesHTML;
  cityWrapper.classList.add('active');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let hasError = false
  let selectState = document.forms['formData']['state']
  let selectCity = document.forms['formData']['city']

  if(!selectState.value){
    hasError = true
    selectState.classList.add('inputError');
    selectState.nextSibling.nextSibling.innerText = 'Selecione um estado';
  } else {
    selectState.classList.remove('inputError');
    selectState.nextSibling.nextSibling.innerText = "";
  };
   
  if(!selectCity.value) {
    hasError = true
    selectCity.classList.add('inputError');
    selectCity.nextSibling.nextSibling.innerText = 'selecione uma cidade purran';
  } else {
    selectCity.classList.remove('inputError');
    selectCity.nextSibling.nextSibling.innerText = '';
  };  

  if(!hasError) {
    form.submit();
  };
});
