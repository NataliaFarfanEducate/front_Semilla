document.addEventListener('DOMContentLoaded', () => {

    // 1. Obtención de los elementos del DOM
    const chatToggleBtn = document.getElementById('chat-toggle-btn');
    const chatContainer = document.getElementById('chat-container');
    const chatWindow = document.getElementById('messages-container');
    const chatInput = document.getElementById('message-input');
    const chatButton = document.getElementById('send-btn');

    // 2. Controlar si se ve o no el chat
    let isChatVisible = false;

    // 3. Funcionalidad para mostrar/ocultar el chat
    chatToggleBtn.addEventListener('click', () => {
        isChatVisible = !isChatVisible;
        if (isChatVisible) {
            chatContainer.style.display = 'flex';
        } else {
            chatContainer.style.display = 'none';
        }
    });

    // 4. Funcionalidad del botón de envío y la tecla "Enter"
    async function sendMessage() {
        const prompt = chatInput.value.trim();
        if (!prompt) {
            return; // No envía mensajes si el campo está vacío
        }

        // Muestra el mensaje del usuario en la ventana del chat
        displayMessage(prompt, 'user');

        // Limpia el campo de entrada
        chatInput.value = '';

        try {
            // Realiza la petición POST a tu backend
            const response = await fetch('http://localhost:8080/api/ai/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain'
                },
                body: prompt
            });

            if (response.ok) {
                // Si la petición fue exitosa, muestra la respuesta de Gemini
                const botResponse = await response.text();
                displayMessage(botResponse, 'bot');
            } else {
                // Maneja los errores del servidor
                const errorText = await response.text();
                displayMessage('Error: ' + errorText, 'bot');
                console.error('Error del servidor:', errorText);
            }
        } catch (error) {
            // Maneja errores de conexión (por ejemplo, si el servidor no está corriendo)
            displayMessage('Error de conexión. Inténtalo de nuevo.', 'bot');
            console.error('Error de red:', error);
        }
    }

    // 5. Función auxiliar para mostrar mensajes en la interfaz
    function displayMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.classList.add(sender);
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight; // Mantiene el scroll al final
    }

    // 6. Asignación de los eventos a los botones y al input
    chatButton.addEventListener('click', sendMessage);

    chatInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});