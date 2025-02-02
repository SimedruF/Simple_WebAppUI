function openPopup(imageSrc) {
    document.getElementById('popup-image').src = imageSrc;
    document.getElementById('popup').classList.add('show');
}

function closePopup() {
    document.getElementById('popup').classList.remove('show');
}