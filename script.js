const form = document.querySelector('form');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    mensagemSucesso.style.display = 'block';
    form.reset();
})