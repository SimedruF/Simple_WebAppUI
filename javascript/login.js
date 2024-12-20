// Selectăm elementele
const loginButton = document.getElementById('loginButton');
const modal = document.getElementById('loginModal');
const closeButton=document.getElementById('closeButton');

// Afișăm modalul când se face click pe buton
loginButton.addEventListener('click', ()=> {
        modal.style.display='flex';
    });

// Închidem modalul când se apasă pe butonul de închidere
closeButton.addEventListener('click', ()=> {
        modal.style.display='none';
    });

// Închidem modalul când se face click în afara conținutului
window.addEventListener('click', (event)=> {
        if (event.target===modal) {
            modal.style.display='none';
        }
    });