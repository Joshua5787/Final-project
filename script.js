const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2
    },
    // Add more questions here
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;

    const answersContainer = document.querySelector('.answers-container');
    answersContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.classList.add('answer-button');
        button.addEventListener('click', () => checkAnswer(index));
        answersContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correct) {
        alert('Correct!');
    } else {
        alert('Incorrect!');
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('question').textContent = 'Quiz completed!';
        document.querySelector('.answers-container').innerHTML = '';
        document.getElementById('next-button').style.display = 'none';
    }
}
document.getElementById('next-button').addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    }
});

loadQuestion();
const quizData = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2 // Index of the correct answer in the answers array
    },
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: 1 // Index of the correct answer in the answers array
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3 // Index of the correct answer in the answers array
    },
    {
        question: "Who has the most ballondors?",
        answers: ["lionel messi", "Neymar jr", "Cristiano Ronaldo", "Pele"],
        correct: 0 // Index of the correct answer in the answers array
    },
    {
        question: "Who was the first president of america",
        answers: ["Thomas jefferson", "George washington", "Donald trump", "Tom cruise"],
        correct: 1 //Index of the correct answer in the answers array
    }
];

