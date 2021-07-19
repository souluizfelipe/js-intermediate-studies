const form = document.querySelector('#dataForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  let inpName = document.forms['dataForm']['name']
  let inpEmail = document.forms['dataForm']['email']
  let inpCity = document.forms['dataForm']['city']
  let hasError = false
  
  if(!inpName.value){
    hasError = true
    inpName.classList.add('inputError');
    inpName.nextSibling.nextSibling.innerText = 'Este campo é obrigatório';
  } else {
    inpName.classList.remove('inputError');
    inpName.nextSibling.nextSibling.innerText = '';
  }
  
  if(!inpEmail.value){
    hasError = true
    inpEmail.classList.add('inputError');
    inpEmail.nextSibling.nextSibling.innerText = 'Digite um Email válido';
  } else {
    inpEmail.classList.remove('inputError');
    inpEmail.nextSibling.nextSibling.innerText = '';
  }

  if(!inpCity.value){
    hasError = true
    inpCity.classList.add('inputError');
    inpCity.nextSibling.nextSibling.innerText = 'Selecione uma cidade';
  } else {
    inpCity.classList.remove('inputError');
    inpCity.nextSibling.nextSibling.innerText = '';
  }

  if(!hasError) {
    form.submit()
  }
})
