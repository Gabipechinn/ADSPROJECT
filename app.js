const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function (){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

document.getElementById('loginButton').addEventListener('click', function() {
    var notification = document.getElementById('notification');
    notification.style.display = 'block';

    // Esconde a notificação após 3 segundos
    setTimeout(function() {
        notification.style.display = 'none';
    }, 3000);
});

// Função para verificar se todos os campos estão preenchidos
function areFieldsFilled() {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input[required]');
    for (let input of inputs) {
        if (input.value.trim() === '') {
            return false; // Se algum campo estiver vazio, retorna falso
        }
    }
    return true; // Se todos os campos estiverem preenchidos, retorna verdadeiro
};

// Adiciona o evento de clique ao botão "Entrar"
document.querySelector('.login-button button').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do botão

    if (areFieldsFilled()) {
        showNotification(); // Chama a função para mostrar a notificação
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.'); // Mostra um alerta se algum campo estiver vazio
    }
});