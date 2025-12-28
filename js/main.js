const heroBg = document.getElementById('heroBg');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    
    // Grayscale fades over the first screen height
    let progress = scrollY / viewportHeight;
    if (progress > 1) progress = 1;
    if (progress < 0) progress = 0;

    const grayscaleValue = 100 - (progress * 100);
    heroBg.style.setProperty('--grayscale', `${grayscaleValue}%`);
});
