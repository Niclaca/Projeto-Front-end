const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");  // Corrigir a seleção do campo de senha

// Função para validar a senha
const validatePassword = (password) => {
    // Exemplo de validação de senha: mínimo de 8 caracteres, pelo menos uma letra maiúscula, uma minúscula e um número
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();  // Impede o envio do formulário para validação

    // Verificar se o nome está vazio
    if (nameInput.value.trim() === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }

    // Verificar se o e-mail está preenchido e se é válido
    if (emailInput.value.trim() === "") {
        alert("Por favor, preencha o seu e-mail");
        return;
    }

    // Verificar se a senha está preenchida e é válida
    if (passwordInput.value.trim() === "") {
        alert("Por favor, preencha a sua senha");
        return;
    }

    if (!validatePassword(passwordInput.value.trim())) {
        alert("A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número.");
        return;
    }

    // Se todos os campos estiverem preenchidos corretamente, envie o formulário
    alert("Formulário enviado com sucesso!");
    form.submit();
});
