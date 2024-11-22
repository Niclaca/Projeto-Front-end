// Função para validar o formulário e exibir alerta de boas-vindas
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio do formulário para realizar a validação

    // Validação de campos obrigatórios
    let valid = true;

    // Verifica se os campos obrigatórios estão preenchidos corretamente
    const requiredFields = document.querySelectorAll('input[required], select[required], textarea[required]');
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            valid = false;
            field.style.borderColor = 'red';  // Destaca campos obrigatórios não preenchidos
        } else {
            field.style.borderColor = '';  // Restaura a borda do campo
        }
    });

    // Verificação de senha e confirmação de senha
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirm-password');

    if (password.value !== confirmPassword.value) {
        valid = false;
        alert("As senhas não coincidem!");
        password.style.borderColor = 'red';
        confirmPassword.style.borderColor = 'red';
    } else {
        password.style.borderColor = '';
        confirmPassword.style.borderColor = '';
    }

    // Validação de gênero
    const genderOptions = document.querySelectorAll('input[name="gender"]');
    let genderSelected = false;
    genderOptions.forEach(option => {
        if (option.checked) {
            genderSelected = true;
        }
    });

    if (!genderSelected) {
        valid = false;
        alert("Por favor, selecione seu gênero.");
    }

    // Se a validação for bem-sucedida, exibe o alerta e limpa o formulário
    if (valid) {
        alert('Parabéns, agora você é um Euterpiano!');
        document.querySelector('form').reset();  // Limpa os campos do formulário
    } else {
        alert('Por favor, preencha todos os campos obrigatórios corretamente.');
    }
});
