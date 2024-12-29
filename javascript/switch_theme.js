// Flag to track the current theme
let isLightThemeLoc = true;
const glideButton_red = document.querySelector('.glide-button-red') ;
const glideButton_blue =  document.querySelector('.glide-button-blue');
const glideButton_green =  document.querySelector('.glide-button-green');

const statusText = document.getElementById('status');
// function to set the theme
function setTheme(isLightTheme) {
    if (isLightTheme) {
        document.documentElement.style.setProperty('--background-color', '#2D2D2D');
        document.documentElement.style.setProperty('--text-color', '#FFFFFF');
        document.documentElement.style.setProperty('--button-bg', '#BB86FC');
        document.documentElement.style.setProperty('--button-text', '#121212');
        document.documentElement.style.setProperty('--shadow-text', '#121212');
        document.documentElement.style.setProperty('--section-color', '#818181');
        document.documentElement.style.setProperty('--footer-bgr-color', '#484848');
        document.documentElement.style.setProperty('--footer-text-color', '#f4f4f4');

        glideButton_red.classList.remove('active'); // Remove class for dark theme
        localStorage.setItem('theme', 'light'); // Save theme in localStorage
    } else {
        document.documentElement.style.setProperty('--background-color', '#FFFFFF');
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--button-bg', '#1A73E8');
        document.documentElement.style.setProperty('--button-text', '#FFFFFF');
        document.documentElement.style.setProperty('--shadow-text', '#818181');
        document.documentElement.style.setProperty('--section-color', '#34a853');
        document.documentElement.style.setProperty('--footer-bgr-color', '#484848');
        document.documentElement.style.setProperty('--footer-text-color', '#f4f4f4');

        glideButton_red.classList.add('active'); // Add class for dark theme
        localStorage.setItem('theme', 'dark'); // Save theme in localStorage
        
    }
    isLightThemeLoc = !isLightThemeLoc; // Toggle the flag
}

// Add click event listener
glideButton_red.addEventListener('click', () => {
    glideButton_red.classList.toggle('active'); // Toggle active state

    // Update status text
    if (glideButton_red.classList.contains('active') && isLightThemeLoc) {

        localStorage.setItem('theme', 'light'); // Save theme in localStorage
        console.log("Status: On"); // Display status in console
        //statusText.textContent = 'Status: On';
        setTheme(isLightThemeLoc); // Switch theme
    } else {

        //statusText.textContent = 'Status: Off';
        console.log("Status: Off"); // Display status in console
        localStorage.setItem('theme', 'dark'); // Save theme in localStorage
        setTheme(isLightThemeLoc); 
    }
    isLightThemeLoc = !isLightThemeLoc; // Toggle the flag
});
// Event for clicking the glide button
glideButton_red.addEventListener('click', () => {
    const isLightTheme = glideButton_red.classList.contains('active'); // Check the current state
    setTheme(isLightTheme); // Switch theme
});


// Add click event listener
glideButton_blue.addEventListener('click', () => {
    glideButton_blue.classList.toggle('active'); // Toggle active state

    // Update status text
    if (glideButton_blue.classList.contains('active') && isLightThemeLoc) {

        localStorage.setItem('theme', 'light'); // Save theme in localStorage
        console.log("Status: On"); // Display status in console
        //statusText.textContent = 'Status: On';
        setTheme(isLightThemeLoc); // Switch theme
    } else {

        //statusText.textContent = 'Status: Off';
        console.log("Status: Off"); // Display status in console
        localStorage.setItem('theme', 'dark'); // Save theme in localStorage
        setTheme(isLightThemeLoc);
    }
    isLightThemeLoc = !isLightThemeLoc; // Toggle the flag
});
// Event for clicking the glide button
glideButton_blue.addEventListener('click', () => {
    const isLightTheme = glideButton_blue.classList.contains('active'); // Check the current state
    setTheme(isLightTheme); // Switch theme
});


// Add click event listener
glideButton_green.addEventListener('click', () => {
    glideButton_green.classList.toggle('active'); // Toggle active state

    // Update status text
    if (glideButton_green.classList.contains('active') && isLightThemeLoc) {

        localStorage.setItem('theme', 'light'); // Save theme in localStorage
        console.log("Status: On"); // Display status in console
        //statusText.textContent = 'Status: On';
        setTheme(isLightThemeLoc); // Switch theme
    } else {

        //statusText.textContent = 'Status: Off';
        console.log("Status: Off"); // Display status in console
        localStorage.setItem('theme', 'dark'); // Save theme in localStorage
        setTheme(isLightThemeLoc);
    }
    isLightThemeLoc = !isLightThemeLoc; // Toggle the flag
});
// Event for clicking the glide button
glideButton_green.addEventListener('click', () => {
    const isLightTheme = glideButton_green.classList.contains('active'); // Check the current state
    setTheme(isLightTheme); // Switch theme
});

// Retrieve the saved theme from localStorage when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme !== 'dark'); // If the saved theme is "dark", switch to dark theme
});

