const questions = [
    { question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris"], answer: "Paris" },
    { question: "What is the largest planet?", options: ["Earth", "Jupiter", "Mars"], answer: "Jupiter" },
    { question: "Who is the best footballer ever?", options: ["Lionel Messi", "Cristiano Ronaldo", "Neymar jr"], answer:"Lionel Messi" },
    { question: "who is more annoying?", options: ["Tosan","tehila","Olaoluwa"], answer:"Olaoluwa"}  
    ]


let currentQuestionIndex = 0;
let userAnswers = [];

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');

function showQuestion(index) {
    const question = questions[index];
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';

    question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.textContent = option;
        optionElement.className = 'option';
        optionElement.onclick = () => selectOption(option);
        optionsContainer.appendChild(optionElement);
    });

    nextButton.disabled = true;
}

function selectOption(selectedOption) {
    userAnswers[currentQuestionIndex] = selectedOption;
    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        showResults();
    }
}

function showResults() {
    questionText.textContent = 'Quiz completed!';
    optionsContainer.innerHTML = '';
    nextButton.style.display = 'none';
    console.log('User answers:', userAnswers);
    // You can add more logic here to display results or process user answers
}

nextButton.addEventListener('click', nextQuestion);

// Initialize the quiz
showQuestion(currentQuestionIndex);



