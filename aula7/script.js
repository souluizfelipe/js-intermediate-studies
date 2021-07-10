const toast = document.querySelector('.toast');
const btnSend = document.querySelector('#btnSend');
const inpText = document.querySelector('#inpText');


btnSend.addEventListener('click', () => {
    toast.classList.toggle('active');
    toast.textContent = `Tarefa ${inpText.value} cadastrada com sucesso`

    setTimeout(() => {
        toast.classList.toggle('active');
    }, 3000);
});