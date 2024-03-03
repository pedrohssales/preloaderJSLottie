const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;

const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    display: flex; /* Alterado de 'none' para 'flex' */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

document.body.appendChild(overlay);
document.body.appendChild(lottieContainer);

// Carregar a animação do Lottie imediatamente após a criação do container
lottie.loadAnimation({
    container: lottieContainer,
    renderer: 'svg', // ou 'canvas' se preferir
    loop: true,
    autoplay: true,
    path: 'https://pedrohssales.github.io/preloaderJSLottie/carregamento-cmeax.json',
});

function hideOverlay() {
    overlay.style.display = 'none';
    lottieContainer.style.display = 'none';
}

// Remover o Lottie e o overlay assim que a página estiver completamente carregada
window.addEventListener('load', hideOverlay);
