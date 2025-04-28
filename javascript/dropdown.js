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
        dropdown.classList.toggle('active');
        dropdownContent.style.display = dropdown.classList.contains('active') ? 'block' : 'none';
    });

    // Închidem dropdown-ul dacă se face click în afara lui
    window.addEventListener('click', () => {
        dropdown.classList.remove('active');
        dropdownContent.style.display = 'none';
    });

    // Adăugăm evenimente pentru a adăuga un delay la închiderea meniului dropdown
    dropdown.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
            dropdownContent.style.display = 'none';
            dropdown.classList.remove('active');
        }, 50); // Delay de 50ms înainte de a închide meniul
    });

    dropdown.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        dropdownContent.style.display = 'block';
    });
});

// Funcție pentru a închide toate dropdown-urile
function closeAllDropdowns() {
    dropdowns.forEach((dropdown) => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        dropdown.classList.remove('active');
        dropdownContent.style.display = 'none';
    });
}