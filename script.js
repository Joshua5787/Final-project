const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: 2,
        hint: "It's also known as the City of Light."
    },
    {
        question: "What is the name of the first man to reach the moon",
        options: ["Neven Armstrong", "Neil Armstrong", "Neile Amstrong", "Bola Ahmed Tinubu"],
        answer: 1,
        hint: "You are on your own for this one."
    },
    {
        question: "Who is the player with the most ballondior",
        options: ["Lionel Messi", "Cristiano Ronaldo", "David Beckham", "Wayne Rooney"],
        answer: 0,
        hint: "It's has L as the first letter."
    },
    {
        question: "What is usain bolts first olympic record",
        options: ["9.63", "9.59", "10.4", "10.4"],
        answer: 0,
        hint: "It's has the largest number after the decimal."
    },
    {
        question: "Who is the president of Ukraine",
        options: ["Volodymyr zielenski", "Piotr Zielenski", "Putin", "Trump"],
        answer: 0,
        hint: "It is not the footballer."
    },
    
];

let currentQuestion = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();

    document.querySelectorAll('.option').forEach((button, index) => {
        button.addEventListener('click', () => checkAnswer(index));
    });

    document.getElementById('hint-button').addEventListener('click', showHint);
    document.getElementById('lifeline-button').addEventListener('click', useLifeline);
});

function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question').textContent = question.question;
    document.querySelectorAll('.option').forEach((button, index) => {
        button.textContent = question.options[index];
    });
    document.getElementById('hint').style.display = 'none';
}

function checkAnswer(selected) {
    const question = questions[currentQuestion];
    if (selected === question.answer) {
        alert('Correct!');
        score++;
    } else {
        alert('Wrong!');
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showLeaderboard();
    }
}

function showHint() {
    const question = questions[currentQuestion];
    document.getElementById('hint').textContent = question.hint;
    document.getElementById('hint').style.display = 'block';
}

function useLifeline() {
    const question = questions[currentQuestion];
    const options = document.querySelectorAll('.option');
    let count = 0;
    options.forEach((button, index) => {
        if (index !== question.answer && count < 2) {
            button.style.display = 'none';
            count++;
        }
    });
}

function showLeaderboard() {
    document.getElementById('question-container').style.display = 'none';
    const leaderboard = document.getElementById('leaderboard-list');
    leaderboard.innerHTML = `<li>Your score: ${score}</li>`;
    document.getElementById('leaderboard').style.display = 'block';
}
