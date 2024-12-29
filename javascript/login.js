// Select the elements
const loginButton = document.getElementById('loginButton');
const modalLogin = document.getElementById('loginModal');
const closeButtonLogin=document.getElementById('closeButtonLogin');

// Show modal window when button is clicked
loginButton.addEventListener('click', ()=> {
    modalLogin.style.display='flex';
    });

// Close modal window when close button is clicked
closeButtonLogin.addEventListener('click', ()=> {
    modalLogin.style.display='none';
    });

// Close modal window when click outside the content
window.addEventListener('click', (event)=> {
    if (event.target === modalLogin) {
            modalLogin.style.display='none';
        }
    });