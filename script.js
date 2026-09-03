document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('#navMenu a');

  // Função para fechar o menu limpando estados
  const closeMenu = () => {
    navMenu.classList.remove('active');
    menuToggle.textContent = '☰';
    menuToggle.setAttribute('aria-expanded', 'false');
  };

  // Abre/Fecha o menu mobile
  menuToggle.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('active');
    menuToggle.textContent = isActive ? '✕' : '☰';
    menuToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
  });

  // Fecha o menu ao clicar em qualquer link (bom para links internos/âncoras)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        closeMenu();
      }
    });
  });
});
