// Function to handle sending messages and updating the chatbox
const sendMessage = async () => {
  const userMessage = document.getElementById('userMessage').value;

  if (userMessage.trim()) {
    // Display user message in chatbox
    const chatbox = document.getElementById('chatbox');
    chatbox.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    
    // Get response from the API
    const botResponse = await getChatbotResponse(userMessage);
    
    // Display bot response in chatbox
    chatbox.innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;
    
    // Clear the input field
    document.getElementById('userMessage').value = '';
  }
};