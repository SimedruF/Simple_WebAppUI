# Simple WebAppUI
1. Modal Window 
2. Login modal window
3. Folding List
4. Glide button for switching the theme
5. Pop-up window for displaing images
6. Dropdown menu

## Description
- This project includes:
- A simple modal window test using HTML, CSS, and JavaScript.
- A simple folding list.
- A glide button for switching the theme
- Pop-up window for displaing images
- Dropdown Menu Example


## Project Structure
- `index.html`: The main HTML file.
- `styles.css`: The CSS file for styling.
- `about.js`: The JavaScript file for showing an about modal window.
- `login.js`: The JavaScript file for showing a login modal window.
- `folding.js`: The JavaScript file for folding list functionality.
- `switch_theme.js`: The JavaScript file for glide button for switching the theme functionality.
- `popup.js`: The JavaScript file for displaing of a pop-up window for images .
- `dropdown.js`: JavaScript code to handle the dropdown functionality.


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
<!-- hidden Popup -->
<div id="popup" class="popup-overlay-img" onclick="closePopup()">
    <div class="popup-content-img" onclick="event.stopPropagation();">
        <span class="close-btn" onclick="closePopup()">×</span>
        <img id="popup-image" src="" alt="Imagine mare">
    </div>
</div>
<script src="javascript/popup.js"></script>

## Dropdown Menu Example

### HTML Code Example
```html
<!-- Dropdown Menu -->
<ul class="menu">
    <li class="dropdown">
        <a href="#" class="dropdown-menu-button">Menu</a>
        <div class="dropdown-content">
            <a href="#option1" class="dropdown-link">Option 1</a>
            <a href="#option2" class="dropdown-link">Option 2</a>
            <a href="#option3" class="dropdown-link">Option 3</a>
        </div>
    </li>
</ul>
```

### CSS Code Example
```css
/* Dropdown Menu Styling */
.menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-menu-button {
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    cursor: pointer;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
    display: block;
}
```

### JavaScript Code Example
```javascript
// Dropdown Menu Functionality
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
    const dropdownButton = dropdown.querySelector('.dropdown-menu-button');
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    dropdownButton.addEventListener('click', (event) => {
        event.stopPropagation();
        dropdownContent.classList.toggle('active');
    });

    window.addEventListener('click', () => {
        dropdownContent.classList.remove('active');
    });
});
```

### Usage Instructions
1. Add the HTML code for the dropdown menu to your webpage.
2. Include the CSS styles in your stylesheet.
3. Add the JavaScript code to handle the dropdown functionality.
4. Hover over the menu or click the button to see the dropdown options.
