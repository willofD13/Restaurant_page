const about = () => {
        const content = document.getElementById('content');
        content.classList.add('contact');

        const phone = document.createElement('div');
        phone.textContent = '210 656432';
        content.appendChild(phone)

        const mail = document.createElement('div');
        mail.textContent = 'bestrestaurant@gmail.com';    
        content.appendChild(mail);
};

export { about };