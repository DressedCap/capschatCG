const messagesDiv = document.getElementById('messages');
const userInput = document.getElementById('userInput');

function addMessage(content, sender) {
    const messageElement = document.createElement('div');
    messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageElement.innerText = content;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
}

function getBotResponse(input) {
    const responses = {
        "hello": "Hi there! How can I help you?",
        "how are you?": "I'm just a computer program, but I'm doing well! How about you?",
        "what is capsgams?": "CapsGams is a game company known for its interesting games.",
        "bye": "Goodbye! Have a great day!"
    };

    const normalizedInput = input.toLowerCase();
    return responses[normalizedInput] || "I'm sorry, I don't understand.";
}

userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const inputText = userInput.value;
        addMessage(inputText, 'user');
        userInput.value = '';

        const botResponse = getBotResponse(inputText);
        addMessage(botResponse, 'bot');
    }
});
