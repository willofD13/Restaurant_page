const myAssets =  () => {
    const content = document.getElementById('content');

    const h2 = document.createElement('h2')
    h2.textContent = 'Welcome to a world of flavours';
    content.appendChild(h2)
};

export { myAssets };
