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
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

document.body.appendChild(overlay);
document.body.appendChild(lottieContainer);

let animationLoaded = false; // Adicionado para verificar se a animação já foi carregada

function hideOverlay() {
    if (!animationLoaded) { // Verifica se a animação ainda não foi carregada
        overlay.style.display = 'none';
        lottieContainer.style.display = 'block';
        lottie.loadAnimation({
            container: lottieContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://pedrohssales.github.io/preloaderJSLottie/carregamento-cmeax-novo.json',
        });
        animationLoaded = true; // Marca a animação como carregada
    }
}

window.addEventListener('load', hideOverlay);
