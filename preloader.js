const lottieContainer = document.createElement('div');
lottieContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;

document.body.appendChild(lottieContainer);

window.addEventListener('load', () => {
    lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://pedrohssales.github.io/preloaderJSLottie/carregamento-cmeax.json',
    });
});
