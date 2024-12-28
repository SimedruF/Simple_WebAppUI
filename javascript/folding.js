document.addEventListener('DOMContentLoaded', () => {
    const foldHeaders = document.querySelectorAll('.fold-header');

    foldHeaders.forEach(header => {
        const foldIcon = header.querySelector('.fold-icon');
        const foldContent = header.nextElementSibling; // Selectează următorul .fold-content

        header.addEventListener('click', () => {
            if (foldContent.style.maxHeight) {
                foldContent.style.maxHeight = null;
                foldIcon.textContent = '+';
            } else {
                foldContent.style.maxHeight = foldContent.scrollHeight + 'px';
                foldIcon.textContent = '-';
            }
        });
    });
});