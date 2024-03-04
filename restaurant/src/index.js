import { myAssets } from './firstAssets';
import './style.css';
import { about } from './contact';
import { breakfastMenu, sidesMenu } from './menu';

const aboutButton = document.getElementById('about');
const content = document.getElementById('content');
aboutButton.addEventListener('click', () => {
    content.innerHTML = '';
    about();
})

const homeButton = document.getElementById('home');
homeButton.addEventListener('click', () => {
    content.innerHTML = '';
    myAssets();
})

const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', () => {
    content.innerHTML = '';
    breakfastMenu();
    sidesMenu();
})
console.log('Starting the project!!!')