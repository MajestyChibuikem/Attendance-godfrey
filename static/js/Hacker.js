const outputElement = document.getElementById('output');

//faux messages
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

let messageIndex = 0;
let charIndex = 0;

function typeMessage() {
    const currentMessage = messages[messageIndex];
    if (charIndex < currentMessage.length) {
        outputElement.innerHTML += currentMessage.charAt(charIndex);
        charIndex++;
        setTimeout(typeMessage, 10); 
    } else {
        
        setTimeout(() => {
            messageIndex++;
            if (messageIndex < messages.length) {
                outputElement.innerHTML += "\n"; 
                charIndex = 0;
                typeMessage();
            }
        }, -5);
    }
}

//start
window.onload = () => {
    document.getElementById('hacker-terminal').style.display = 'block';
    typeMessage();
};
