const about = () => {
        const content = document.getElementById('content')
        const homeContainer = document.createElement('div');
        homeContainer.classList.add('home');
        content.appendChild(homeContainer);
    

        const phone = document.createElement('div');
        phone.textContent = 'Phone: 210 656432';
        homeContainer.appendChild(phone)

        const mail = document.createElement('div');
        mail.textContent = 'E-mail: bestrestaurant@gmail.com';    
        homeContainer.appendChild(mail);
};

export { about };