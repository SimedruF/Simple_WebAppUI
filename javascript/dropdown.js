// Selectăm toate dropdown-urile și butoanele
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
    const dropdownButton = dropdown.querySelector('.dropdown-menu-button');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    let timeout;

    // Verificăm dacă dropdownButton și dropdownContent există
    if (!dropdownButton || !dropdownContent) {
        console.warn('Dropdown-ul nu are un buton sau conținut valid:', dropdown);
        return; // Ieșim din funcție pentru acest dropdown
    }

    // Adăugăm eveniment de click pentru a activa/dezactiva dropdown-ul
    dropdownButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Previne propagarea evenimentului către window
        closeAllDropdowns(); // Închide toate celelalte dropdown-uri
        dropdownContent.classList.toggle('active');
    });

    // Închidem dropdown-ul dacă se face click în afara lui
    window.addEventListener('click', () => {
        dropdownContent.classList.remove('active');
    });

    // Adăugăm evenimente pentru a adăuga un delay la închiderea meniului dropdown
    dropdown.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
            dropdownContent.classList.remove('active');
        }, 50); // Delay de 50ms înainte de a închide meniul
    });

    dropdown.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        dropdownContent.classList.add('active');
    });
});

// Funcție pentru a închide toate dropdown-urile
function closeAllDropdowns() {
    dropdowns.forEach((dropdown) => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        dropdownContent.classList.remove('active');
    });
}