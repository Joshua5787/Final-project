const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Lisbon", correct: false }
        ]
    },
    {
        question: "Who is on the 1000 naira note?",
        answers: [
            { text: "Alhaji Aliyu mai borno", correct: true },
            { text: "Mark samson", correct: false },
            { text: "Frank lampard", correct: false },
            { text: "Lionel Messi", correct: false }
        ]
    },
    {
        question: "Who is the president of Ukraine",
        answers: [
            { text: "Volodymyr Zielenski", correct: true },
            { text: "Piotr Zelienski", correct: false },
            { text: "Asta", correct: false },
            { text: "Milly Bobby Brown", correct: false }
        ]
    },
    {
        question: "Who is the player with the most ballondior?",
        answers: [
            { text: "Cristiano Ronaldo", correct: false },
            { text: "Lionel Messi", correct: true },
            { text: "Ronaldinho Gaucho", correct: false },
            { text: "Neymar jr", correct: false }
        ]
    },
    {
        question: "What is Usain Bolts First Olympic record?",
        answers: [
            { text: "9.63", correct: true },
            { text: "9.59", correct: false },
            { text: "9.7", correct: false },
            { text: "10.5", correct: false }
        ]
    },
];
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const resultsElement = document.getElementById('results');
const scoreElement = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hide');
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(questions[currentQuestionIndex]);
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    resultsElement.innerHTML = questions.map((q, index) => {
        const correctAnswer = q.answers.find(a => a.correct).text;
        return `<p>Q${index + 1}: ${q.question} <br> Correct Answer: ${correctAnswer}</p>`;
    }).join('');
    scoreElement.innerText = `Your score: ${score} / ${questions.length}`;
}

nextButton.addEventListener('click', startQuiz);

startQuiz();
