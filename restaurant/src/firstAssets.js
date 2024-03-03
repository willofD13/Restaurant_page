import homeImage from './download.jpeg'

const myAssets =  (() => {
    const content = document.getElementById('content');

    const h2 = document.createElement('h2')
    h2.textContent = 'Welcome to a world of flavours';
    content.appendChild(h2)

    const glass = new Image();
    glass.src = homeImage;

    content.appendChild(glass);
})();


