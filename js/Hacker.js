// Simulated hacker terminal output
const outputElement = document.getElementById('output');

// Array of random commands or fake data for the effect
const messages = [
    "Initializing System...",
    "Connecting to Server...",
    "Bypassing Security...",
    "Accessing Databases...",
    "Decrypting Files...",
    "ERROR: Unauthorized Access Detected!",
    "Attempting to Gain Root Access...",
    "Firewall Breached...",
    "Data Download Complete...",
    "Initializing System...",
    "Connecting to Server...",
    "Bypassing Security...",
    "Accessing Databases...",
    "Decrypting Files...",
    "ERROR: Unauthorized Access Detected!",
    "Attempting to Gain Root Access...",
    "Firewall Breached...",
    "Data Download Complete...",
    "Initializing System...",
    "Connecting to Server...",
    "Bypassing Security...",
    "Accessing Databases...",
    "Decrypting Files...",
    "ERROR: Unauthorized Access Detected!",
    "Attempting to Gain Root Access...",
    "Firewall Breached...",
    "Data Download Complete...",
    "Initializing System...",
    "Connecting to Server...",
    "Bypassing Security...",
    "Accessing Databases...",
    "Decrypting Files...",
    "ERROR: Unauthorized Access Detected!",
    "Attempting to Gain Root Access...",
    "Firewall Breached...",
    "Data Download Complete...",
    "Initializing System...",
    "Connecting to Server...",
    "Bypassing Security...",
    "Accessing Databases...",
    "Decrypting Files...",
    "ERROR: Unauthorized Access Detected!",
    "Attempting to Gain Root Access...",
    "Firewall Breached...",
    "Data Download Complete...",
    "Initializing System...",
    "Connecting to Server...",
    "Bypassing Security...",
    "Accessing Databases...",
    "Decrypting Files...",
    "ERROR: Unauthorized Access Detected!",
    "Attempting to Gain Root Access...",
    "Firewall Breached...",
    "Data Download Complete...",
    "Initializing System...",
    "Connecting to Server...",
    "Bypassing Security...",
    "Accessing Databases...",
    "Decrypting Files...",
    "ERROR: Unauthorized Access Detected!",
    "Attempting to Gain Root Access...",
    "Firewall Breached...",
    "Data Download Complete...",
    "System Rebooting..."
];

// Function to simulate typing effect
let messageIndex = 0;
let charIndex = 0;

function typeMessage() {
    const currentMessage = messages[messageIndex];
    if (charIndex < currentMessage.length) {
        outputElement.innerHTML += currentMessage.charAt(charIndex);
        charIndex++;
        setTimeout(typeMessage, 10); // Adjust speed here (milliseconds)
    } else {
        // Move to next message after a slight delay
        setTimeout(() => {
            messageIndex++;
            if (messageIndex < messages.length) {
                outputElement.innerHTML += "\n"; // Add line break between messages
                charIndex = 0;
                typeMessage();
            }
        }, -5);
    }
}

// Start the terminal typing effect after the page loads
window.onload = () => {
    // Make the terminal visible and start typing effect
    document.getElementById('hacker-terminal').style.display = 'block';
    typeMessage();
};
