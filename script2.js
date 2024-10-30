const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

const responses = {
    "hi": "Hello! How can I help you?",
    "how are you?": "I'm just a program, but I'm functioning well! How about you?",
    "bye": "Goodbye! Have a great day!"
};

function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
}

sendButton.addEventListener('click', () => {
    const userMessage = userInput.value.trim().toLowerCase();
    if (userMessage) {
        addMessage(userMessage, 'user');
        userInput.value = '';
        
        const botResponse = responses[userMessage] || "I'm sorry, I don't understand.";
        setTimeout(() => {
            addMessage(botResponse, 'bot');
        }, 500);
    }
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});
