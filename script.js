// Efeito de Revelação ao Rolar a Página (Scroll Animation)
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".text-card, .image-placeholder");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.15
    });

    cards.forEach(card => {
        // Configuração inicial oculta para animação
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });
});
