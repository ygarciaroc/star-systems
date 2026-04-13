document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar el fondo espacial
    createSpaceBackground();

    // 2. Efecto de entrada suave (Fade-in)
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1.5s ease-in-out';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // 3. Log de consola estilo Ingeniero
    console.log("%c STAR ELECTRONICS | System Online ", 
                "color: #89CFF0; background: #050A14; font-weight: bold; border: 1px solid #89CFF0; padding: 5px;");
});

/**
 * Genera estrellas aleatorias en el contenedor .stars-container
 */
function createSpaceBackground() {
    const container = document.querySelector('.stars-container');
    if (!container) return;

    const starCount = 150; // Cantidad de estrellas

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star-particle';
        
        // Posición aleatoria
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Tamaño aleatorio (pequeñas para profundidad)
        const size = Math.random() * 2 + 'px';
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = size;
        star.style.height = size;
        
        // Animación de parpadeo aleatoria
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() *// Mensaje de bienvenida en la consola para otros desarrolladores
console.log("%c Star Systems | Inicializado ", "color: #c0c0c0; background: #222; font-size: 15px; padding: 5px;");

// Aquí podrías añadir un efecto de sonido tipo "click" industrial 
// o transiciones suaves entre secciones.
