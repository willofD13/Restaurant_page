const breakfastMenu = () => {
    const content = document.getElementById('content');
    const container = document.createElement('div')
    container.classList.add('container')

    const heading = document.createElement('h2');
    heading.classList.add('heading')
    heading.textContent = 'Main dishes'

    const title1  = document.createElement('h3');
    title1.textContent = 'Pancakes';
    const plate1 = document.createElement('div')
    plate1.textContent = 'A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.'
    title1.appendChild(plate1);

    const title2 = document.createElement('h3');
    title2.textContent = 'French toast';
    const plate2= document.createElement('div')
    plate2.textContent = 'Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.'
    title2.appendChild(plate2);

    container.append(heading,title1,title2)
    content.append(container)
};

export { breakfastMenu }