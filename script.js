// Aguarda o carregamento completo do DOM antes de executar os scripts
document.addEventListener('DOMContentLoaded', () => {

    // Seleção dos elementos do DOM
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.getElementById('togglePassword');
    const toggleLowStimulusBtn = document.getElementById('toggleLowStimulus');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    /* Alterna a visibilidade do campo de senha (Mostrar / Ocultar) */
    togglePasswordBtn.addEventListener('click', () => {
        const isPassword = passwordInput.getAttribute('type') === 'password';
        
        // Altera o tipo do input entre 'password' e 'text'
        passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
        
        // Atualiza o ícone visual
        togglePasswordBtn.textContent = isPassword ? '🙈' : '👁️';
    });

    /* Alterna o modo de baixo estímulo para acomodar sensibilidades sensoriais */
    toggleLowStimulusBtn.addEventListener('click', () => {
        document.body.classList.toggle('low-stimulus');
        
        // Notificação visual simples do estado
        const isLow = document.body.classList.contains('low-stimulus');
        toggleLowStimulusBtn.style.borderColor = isLow ? '#72A77D' : '#9DA6AD';
    });

    /* Validação simples do formulário de login */
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário padrão

        let isValid = true;

        // Limpa estados de erro anteriores
        usernameInput.parentElement.classList.remove('error');
        passwordInput.parentElement.parentElement.classList.remove('error');

        // Validação do campo Usuário (E-mail / CPF)
        if (!usernameInput.value.trim()) {
            usernameInput.parentElement.classList.add('error');
            isValid = false;
        }

        // Validação do campo Senha
        if (!passwordInput.value.trim()) {
            passwordInput.parentElement.parentElement.classList.add('error');
            isValid = false;
        }

        // Se os dados forem válidos, simula o login
        if (isValid) {
            console.log('Tentativa de Login:', {
                usuario: usernameInput.value,
                manterConectado: document.getElementById('rememberMe').checked
            });

            // Simulação de resposta da API
            alert('Login efetuado com sucesso! Redirecionando para o painel do Professor...');
        }
    });

});