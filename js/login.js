// JavaScript for dynamic border effect on mouse hover
const loginContainer = document.querySelector('.login-container');

loginContainer.addEventListener('mousemove', (event) => {
    const { offsetX, offsetY } = event;  // Get mouse position inside the form

    // Calculate the percentage of mouse position relative to the form dimensions
    const width = loginContainer.offsetWidth;
    const height = loginContainer.offsetHeight;

    const borderThickness = 6;  // Thickness of the border effect
    const xPercent = offsetX / width; // Horizontal percentage
    const yPercent = offsetY / height; // Vertical percentage

    // Set the border's color dynamically based on the mouse position
    const r = Math.floor(xPercent * 255);  // Red component based on X position
    const g = Math.floor(yPercent * 255);  // Green component based on Y position
    const b = 150;  // Constant Blue component for a purple-ish hue

    loginContainer.style.borderColor = `rgb(${r}, ${g}, ${b})`;

    // Optionally, you can add a hover effect by changing other properties like border thickness or shadow
    loginContainer.style.boxShadow = `0 0 ${borderThickness * 2}px rgba(${r}, ${g}, ${b}, 0.5)`;
});

loginContainer.addEventListener('mouseleave', () => {
    // Reset the border and shadow when the mouse leaves the form
    loginContainer.style.borderColor = '#003366';
    loginContainer.style.boxShadow = '0 6px 20px rgba(0, 0, 255, 0.1)';
});
