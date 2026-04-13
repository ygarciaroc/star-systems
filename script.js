document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar el fondo espacial de Star Systems
    createSpaceBackground();

    // 2. Efecto de entrada suave (Fade-in)
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1.5s ease-in-out';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // 3. Log de consola profesional
    console.log("%c STAR SYSTEMS | System Online ", 
                "color: #E5E4E2; background: #050A14; font-weight: bold; border: 1px solid #89CFF0; padding: 5px;");
});

/**
 * Genera el campo de estrellas dinámico
 */
function createSpaceBackground() {
    const container = document.querySelector('.stars-container');
    if (!container) return;

    const starCount = 120; // Un balance elegante

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star-particle';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2 + 'px';
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = size;
        star.style.height = size;
        
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 5;
        star.style.animation = `twinkle ${duration}s infinite ${delay}s`;

        container.appendChild(star);
    }
}

/**
 * Interactividad para la estrella de Star Systems
 */
const starIcon = document.querySelector('.modern-star');
if (starIcon) {
    starIcon.addEventListener('mouseover', () => {
        starIcon.style.filter = 'drop-shadow(0 0 25px rgba(255, 255, 255, 0.8))';
        starIcon.style.transform = 'scale(1.08) rotate(3deg)';
        starIcon.style.transition = '0.5s ease';
    });

    starIcon.addEventListener('mouseout', () => {
