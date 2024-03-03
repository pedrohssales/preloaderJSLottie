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
lottieContainer.style.display = 'none';

document.body.appendChild(lottieContainer);

function showLottie() {
    lottieContainer.style.display = 'block';
    // Substitua pela URL direta do seu arquivo JSON do Lottie.
    lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg', // ou 'canvas' se preferir
        loop: true,
        autoplay: true,
        path: 'https://pedrohssales.github.io/preloaderJSLottie/carregamento-cmeax-novo.json',
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showLottie(); // Teste sem o setTimeout
});

window.addEventListener('load', showLottie);
