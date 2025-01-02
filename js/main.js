// Chat Bot Functions
let isChatOpen = false;

function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    isChatOpen = !isChatOpen;
    chatWindow.style.display = isChatOpen ? 'flex' : 'none';
    
    if (isChatOpen && document.getElementById('chatMessages').children.length === 0) {
        // Send welcome message when chat is first opened
        addBotMessage("👋 Hi! How can I help you today?");
    }
}

function addMessage(message, isBot) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isBot ? 'bot-message' : 'user-message'}`;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addBotMessage(message) {
    addMessage(message, true);
}

function addUserMessage(message) {
    addMessage(message, false);
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    
    if (message) {
        addUserMessage(message);
        input.value = '';
        
        // Simulate bot response
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            addBotMessage(botResponse);
        }, 1000);
    }
}

function getBotResponse(message) {
    message = message.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi')) {
        return "Hello! How can I assist you today?";
    }
    else if (message.includes('price') || message.includes('cost')) {
        return "Our course is currently on special offer at $499. Would you like to know more about what's included?";
    }
    else if (message.includes('course') || message.includes('learn')) {
        return "Our comprehensive web design course includes everything you need to become a professional web designer. Would you like to see the full curriculum?";
    }
    else if (message.includes('thank')) {
        return "You're welcome! Let me know if you need anything else.";
    }
    else if (message.includes('duration') || message.includes('how long')) {
        return "The course is self-paced and typically takes 12 weeks to complete. You'll have lifetime access to all materials, so you can learn at your own speed.";
    }
    else if (message.includes('certificate') || message.includes('certification')) {
        return "Yes! Upon completion, you'll receive an industry-recognized certification that you can add to your portfolio and LinkedIn profile.";
    }
    else if (message.includes('payment') || message.includes('installment')) {
        return "We offer flexible payment options, including monthly installments. Would you like to learn more about our payment plans?";
    }
    else if (message.includes('job') || message.includes('career') || message.includes('employment')) {
        return "Our graduates have found successful careers at top companies, with an average starting salary of $65,000. We also provide career guidance and job placement support.";
    }
    else if (message.includes('prerequisite') || message.includes('experience') || message.includes('beginner')) {
        return "No prior experience is needed! Our course is designed for beginners but also includes advanced topics for experienced designers.";
    }
    else if (message.includes('refund') || message.includes('money back')) {
        return "We offer a 30-day money-back guarantee. If you're not satisfied with the course, we'll provide a full refund - no questions asked.";
    }
    else if (message.includes('start') || message.includes('enroll') || message.includes('join')) {
        return "You can start immediately after enrollment! Would you like me to guide you through the registration process?";
    }
    else if (message.includes('support') || message.includes('help') || message.includes('assistance')) {
        return "We provide 24/7 support through our community forum, weekly live Q&A sessions, and dedicated mentorship program.";
    }
    else if (message.includes('curriculum') || message.includes('syllabus') || message.includes('content')) {
        return "Our curriculum covers UI/UX design, HTML, CSS, JavaScript, responsive design, and modern frameworks. Would you like to see the detailed course outline?";
    }
    else if (message.includes('discount') || message.includes('offer') || message.includes('deal')) {
        return "Our current promotion offers 50% off, but it ends soon! Would you like to lock in this special rate?";
    }
    else if (message.includes('portfolio') || message.includes('projects')) {
        return "Throughout the course, you'll build 5 real-world projects that you can add to your portfolio. These projects are designed to showcase your skills to potential employers.";
    }
    else if (message.includes('compare') || message.includes('other courses') || message.includes('difference')) {
        return "Unlike other courses, we offer hands-on projects, 1-on-1 mentorship, and lifetime access to updated content. Our course also has a proven track record with over 10,000 successful graduates.";
    }
    else if (message.includes('laptop') || message.includes('computer') || message.includes('system requirements')) {
        return "You'll need a computer with at least 8GB RAM and any modern web browser. Both Windows and Mac are fully supported.";
    }
    else if (message.includes('time') || message.includes('hours') || message.includes('per week')) {
        return "We recommend dedicating 10-15 hours per week to get the most out of the course. However, you can adjust this based on your schedule since all content is available 24/7.";
    }
    else if (message.includes('demo') || message.includes('trial') || message.includes('sample')) {
        return "We offer a free mini-course and access to sample lessons. Would you like me to share the link with you?";
    }
    else if (message.includes('difficult') || message.includes('hard') || message.includes('challenging')) {
        return "While web design has its challenges, our step-by-step approach makes it accessible. We break down complex concepts and provide plenty of practice exercises.";
    }
    else if (message.includes('tools') || message.includes('software') || message.includes('programs')) {
        return "We'll teach you industry-standard tools like Figma, VS Code, and Adobe XD. All necessary software is either free or included in your course fee.";
    }
    else if (message.includes('instructor') || message.includes('teacher') || message.includes('mentor')) {
        return "Our instructors are industry professionals with 10+ years of experience. You'll also be assigned a dedicated mentor who provides personalized feedback.";
    }
    else if (message.includes('group') || message.includes('class size') || message.includes('other students')) {
        return "While you can learn at your own pace, you'll be part of a vibrant community of learners. Our live sessions typically have 15-20 students for optimal interaction.";
    }
    else if (message.includes('update') || message.includes('current') || message.includes('latest')) {
        return "Our curriculum is regularly updated to reflect the latest industry trends and technologies. You'll have lifetime access to all updates at no additional cost.";
    }
    else if (message.includes('interview') || message.includes('resume') || message.includes('hire')) {
        return "We provide comprehensive career services including resume reviews, interview preparation, and connections with our hiring partners.";
    }
    else if (message.includes('deadline') || message.includes('last date') || message.includes('next batch')) {
        return "You can enroll anytime! New cohorts start every Monday, but you're welcome to begin the self-paced portions immediately after enrollment.";
    }
    else if (message.includes('material') || message.includes('resources') || message.includes('books')) {
        return "All course materials are included in your enrollment. This includes video lectures, downloadable resources, cheat sheets, and access to premium design assets.";
    }
    else {
        return "I'm here to help! Feel free to ask about our course, pricing, or curriculum.";
    }
}


// ACCORDION

document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.accordion-item.active');
            
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }
            
            item.classList.toggle('active');
        });
    });
});
