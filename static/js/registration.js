const loginContainer = document.querySelector('.login-container');

loginContainer.addEventListener('mousemove', (event) => {
    const { offsetX, offsetY } = event;  

    
    const width = loginContainer.offsetWidth;
    const height = loginContainer.offsetHeight;

    const borderThickness = 6;  
    const xPercent = offsetX / width; 
    const yPercent = offsetY / height;

    
    const r = Math.floor(xPercent * 255);  
    const g = Math.floor(yPercent * 255);  
    const b = 150;  

    loginContainer.style.borderColor = `rgb(${r}, ${g}, ${b})`;

    
    loginContainer.style.boxShadow = `0 0 ${borderThickness * 2}px rgba(${r}, ${g}, ${b}, 0.5)`;
});

loginContainer.addEventListener('mouseleave', () => {
    
    loginContainer.style.borderColor = '#003366';
    loginContainer.style.boxShadow = '0 6px 20px rgba(0, 0, 255, 0.1)';
});
