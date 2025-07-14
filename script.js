
        // Theme toggle
       const themeToggle = document.getElementById('themeToggle');
        const sunIcon = document.getElementById('sunIcon');
        const moonIcon = document.getElementById('moonIcon');
        const body = document.body;
        
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            sunIcon.classList.toggle('hidden');
            moonIcon.classList.toggle('hidden');
            
            if (body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
        });
        
        // Check for saved theme preference
        if (localStorage.getItem('theme') === 'light') {
            body.classList.add('light-mode');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
        
        // Drone animation on scroll
        const drone = document.querySelector('.drone');
        
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            drone.style.transform = `translateY(${scrollPosition * 0.2}px) rotate(${scrollPosition * 0.1}deg)`;
        });
        
        // Chatbot toggle
        const chatToggle = document.getElementById('chatToggle');
        const closeChat = document.getElementById('closeChat');
        const chatbot = document.getElementById('chatbot');
        
        chatToggle.addEventListener('click', () => {
            chatbot.classList.toggle('hidden');
        });
        
        closeChat.addEventListener('click', () => {
            chatbot.classList.add('hidden');
        });
        
        // Simple chatbot interaction
        const chatInput = document.getElementById('chatInput');
        const chatMessages = document.getElementById('chatMessages');
        const sendChat = document.getElementById('sendChat');
        
        sendChat.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
        
        function sendMessage() {
            const message = chatInput.value.trim();
            if (message) {
                // Add user message
                const userMsg = document.createElement('div');
                userMsg.className = 'text-right mb-2';
                userMsg.innerHTML = `<div class="bg-green-500 text-white p-2 rounded-lg inline-block">${message}</div>`;
                chatMessages.appendChild(userMsg);
                chatInput.value = '';

                // Simulate bot response
                setTimeout(() => {
                    const botMsg = document.createElement('div');
                    botMsg.className = 'text-left mb-2';
                    botMsg.innerHTML = `<div class="bg-gray-700 text-white p-2 rounded-lg inline-block">I'm here to help! What do you need assistance with?</div>`;
                    chatMessages.appendChild(botMsg);
                    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
                }, 1000);
            }
        }
