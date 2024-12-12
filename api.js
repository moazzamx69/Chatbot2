const OPENAI_API_KEY = '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';  // Replace this with your actual OpenAI API key

// Function to get the chatbot response from OpenAI API
const getChatbotResponse = async (userMessage) => {
  try {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003', // Replace with any model you prefer
        prompt: userMessage,
        max_tokens: 150,
      }),
    });

    const data = await response.json();
    return data.choices[0].text.trim(); // Return the response text
  } catch (error) {
    console.error('Error fetching response:', error);
  }
};