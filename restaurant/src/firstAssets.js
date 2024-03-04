const myAssets =  () => {
    const content = document.getElementById('content')
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home');
    content.appendChild(homeContainer);

    const h2 = document.createElement('h2')
    h2.textContent = 'Welcome to a world of flavours';
    homeContainer.appendChild(h2)

    const homeText = document.createElement('div')
    homeText.textContent = 'In our reastaurant you will enjoy tasteful dishes and a friendly atmosphere. Take a look at our menu!'
    h2.appendChild(homeText);
};

export { myAssets };
