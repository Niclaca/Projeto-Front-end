// Função para mostrar o alerta quando o botão "Explorar Música" for clicado
document.querySelector('.conteudo-principal-escrito-botao').addEventListener('click', function() {
    alert('Você clicou em Explorar Música! Prepare-se para uma nova experiência musical!');
});

// Função para adicionar efeito de hover nos itens do menu
const menuItems = document.querySelectorAll('.cabecalho-menu-item');

menuItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.color = '#ffeb3b'; // Muda a cor ao passar o mouse
    });

    item.addEventListener('mouseleave', function() {
        this.style.color = ''; // Restaura a cor original
    });
});
