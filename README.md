# Project: Simple WebAppUI
1. Modal Window 
2. Login modal window
3. Folding List
4. Glide button for switching the theme

## Description
This project includes:
1. A simple modal window test using HTML, CSS, and JavaScript.
2. A simple folding list.
3. A glide button for switching the theme

## Project Structure
- `index.html`: The main HTML file.
- `styles.css`: The CSS file for styling.
- `about.js`: The JavaScript file for showing an about modal window.
- `login.js`: The JavaScript file for showing a login modal window.
- `folding.js`: The JavaScript file for folding list functionality.
- `switch_theme.js`: The JavaScript file for glide button for switching the theme functionality.
- `popup.js`: The JavaScript file for displaing of a pop-up window for images .


## Usage Instructions
1. Open `index.html` in your browser.
2. Click the button to open the modal window.
3. Use the folding list to view more information.

## Code Examples
```html
<!-- HTML Code Example -->
<div class="modal">
  <div class="modal-content">
    <span class="close-button">&times;</span>
    <p>This is an example of a modal window.</p>
  </div>
</div>

## Pop-up window for images
```html
    <!-- Container for images -->
    <div class="image-gallery">
        <img src="images/rama_foto_1.png" alt="Sibiu 1" style="width: 100%; max-width: 300px; float: center; margin-left: 20px; cursor:pointer;"  onclick="openPopup(this.src)">
        <img src="images/rama_foto_2.png" alt="Sibiu 2" style="width: 100%; max-width: 300px; float: center; margin-left: 20px; cursor:pointer;"  onclick="openPopup(this.src)">
        <!-- Add more images as needed -->
    </div>
<!-- Popup-ul ascuns -->
<div id="popup" class="popup-overlay-img" onclick="closePopup()">
    <div class="popup-content-img" onclick="event.stopPropagation();">
        <span class="close-btn" onclick="closePopup()">×</span>
        <img id="popup-image" src="" alt="Imagine mare">
    </div>
</div>
<script src="javascript/popup.js"></script>
