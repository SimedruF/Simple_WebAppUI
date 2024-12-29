// Select the elements
const menuButton=document.getElementById('menuButton');
const modal=document.getElementById('modalabout');
const closeButtonAbout=document.getElementById('closeButtonAbout');

// Show modal window click pe buton
menuButton.addEventListener('click', ()=> {
        modal.style.display='flex';
    });

// Close modal window when close button is clicked  
closeButtonAbout.addEventListener('click', ()=> {
        modal.style.display='none';
    });

// Close modal window when click outside the content
window.addEventListener('click', (event)=> {
        if (event.target===modal) {
            modal.style.display='none';
        }
    });