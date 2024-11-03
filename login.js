// Exemplo de usuários (normalmente você buscaria isso de um servidor)
const users = [
    { username: "admin", password: "12345678", name: "User" },
];

// Adiciona um listener para o evento de envio do formulário
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("message");

    // Verifica se as credenciais estão corretas
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        messageElement.textContent = "Login bem-sucedido! Bem-vindo, " + username + ".";
        messageElement.style.color = "green";

        // Redireciona o usuário para a página de projetos após 1 segundo
        setTimeout(function() {
            window.location.href = "projetos.html"; // Altere para o nome da sua página
        }, 1000); // Tempo em milissegundos antes de redirecionar
    } else {
        messageElement.textContent = "Usuário ou senha incorretos.";
        messageElement.style.color = "red";
    }
});