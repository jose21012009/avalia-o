// Aguarda o carregamento do DOM para garantir que os elementos existem
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('#navMenu a');

    // Abre e fecha o menu ao clicar no botão hambúrguer (Mobile)
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Altera o ícone visual do botão conforme o estado
        if (navMenu.classList.contains('active')) {
            menuToggle.textContent = '✕';
        } else {
            menuToggle.textContent = '☰';
        }
    });

    // Fecha o menu automaticamente quando o usuário clica em um link de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.textContent = '☰';
            }
        });
    });
});
