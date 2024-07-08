// script.js

document.addEventListener('DOMContentLoaded', function() {
  const startBtn = document.getElementById('startBtn');
  const interactionArea = document.getElementById('interactionArea');
  const questionInput = document.getElementById('questionInput');
  const responseArea = document.getElementById('responseArea');

  // Hide interaction area initially
  interactionArea.classList.add('hidden');

  // When Start button is clicked
  startBtn.addEventListener('click', function() {
    // Hide the Start button
    startBtn.style.display = 'none';
    // Show the interaction area
    interactionArea.classList.remove('hidden');
  });

  // When question is submitted
  questionInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const question = this.value.trim();
      if (question !== '') {
        // Send question to Virtual Assistant
        askVirtualAssistant(question);
        // Clear input field
        this.value = '';
      }
    }
  });

  // Function to simulate Virtual Assistant response
  function askVirtualAssistant(question) {
    // Simulate response time (optional)
    setTimeout(function() {
      // Simulated response from Virtual Assistant
      const answer = getVirtualAssistantAnswer(question);
      // Display response using SweetAlert2
      Swal.fire({
        icon: 'info',
        title: 'Virtual Assistant Response',
        html: `<p>${answer}</p>`,
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then((result) => {
        // Append question and answer to response area
        appendQuestionAndAnswer(question, answer);
      });
    }, 500); // Adjust timing as needed
  }

  // Function to get Virtual Assistant answer
  function getVirtualAssistantAnswer(question) {
    // Answers based on different types of questions
    if (question.toLowerCase().includes('how are you')) {
      return "I'm just a simulated AI, but I'm doing well, thank you!";
    } else if (question.toLowerCase().includes('what is your name')) {
      return "I'm Virtual Assistant, here to assist you.";
    } else if (question.toLowerCase().includes('weather')) {
      return "Today's weather is sunny with a high of 25°C.";
    } else if (question.toLowerCase().includes('time')) {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
      return `The current time is ${timeString}.`;
    } else {
      // Default answer when Virtual Assistant doesn't have an answer
      return "I'm sorry, I don't have an answer for that right now.";
    }
  }

  // Function to append question and answer to response area
  function appendQuestionAndAnswer(question, answer) {
    const questionHTML = `<div class="my-2"><strong>You:</strong> ${question}</div>`;
    const answerHTML = `<div class="my-2"><strong>Virtual Assistant:</strong> ${answer}</div>`;
    responseArea.innerHTML += questionHTML + answerHTML;
  }
});
