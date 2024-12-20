// Select the elements
const loginButton = document.getElementById('loginButton');
const modal = document.getElementById('loginModal');
const closeButton=document.getElementById('closeButton');

// Show modal window when button is clicked
loginButton.addEventListener('click', ()=> {
        modal.style.display='flex';
    });

// Close modal window when close button is clicked
closeButton.addEventListener('click', ()=> {
        modal.style.display='none';
    });

// Close modal window when click outside the content
window.addEventListener('click', (event)=> {
        if (event.target===modal) {
            modal.style.display='none';
        }
    });