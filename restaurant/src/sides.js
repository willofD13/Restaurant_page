const sidesMenu = () => {
    const content = document.getElementById('content');
    const sidesContainer = document.createElement('div')
    sidesContainer.classList.add('container')

    const heading = document.createElement('h2');
    heading.classList.add('heading')
    heading.textContent = 'Sides'


    const title1  = document.createElement('h3');
    title1.textContent = 'Toast and Jam';
    const plate1 = document.createElement('div')
    plate1.textContent = 'A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.'
    title1.appendChild(plate1);

    const title2 = document.createElement('h3');
    title2.textContent = 'Fresh Fruit';
    const plate2= document.createElement('div')
    plate2.textContent = 'A small bowl of fresh fruit, whatever we find at the market for the day.'
    title2.appendChild(plate2);

    sidesContainer.append(heading,title1,title2)
    content.append(sidesContainer)
};

export { sidesMenu }