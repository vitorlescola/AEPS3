const questions = [
    {
        question: "Qual é a capital da França?",
        options: ["Berlim", "Madri", "Paris", "Roma"],
        answer: "Paris"
    },
    {
        question: "Qual linguagem é usada principalmente no desenvolvimento web?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        question: "Quem desenvolveu a teoria da relatividade?",
        options: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Galileu Galilei"],
        answer: "Albert Einstein"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {

    currentQuestionIndex = 0;
    score = 0;

    document.getElementById("quiz").innerHTML = `
        <div class="container quiz-container">
            
            <div class="quiz-header text-center mb-4">
                <h2>Quiz de Conhecimentos</h2>
                <p>Responda as perguntas abaixo:</p>
            </div>

            <div id="quiz-content">
                <div class="quiz-question">
                    <p id="question">Carregando pergunta...</p>
                </div>

                <div id="options" class="list-group mb-3">
                    <!-- opções -->
                </div>

                <button id="next-button" class="btn btn-primary" disabled>
                    Próxima Pergunta
                </button>
            </div>

            <div id="result" class="text-center" style="display:none;">
                <h3>Resultado Final</h3>
                <p>Sua pontuação foi: <span id="score">0</span>/${questions.length}</p>

                <button id="retry-button" class="btn btn-success">
                    Tentar Novamente
                </button>
            </div>

        </div>
    `;

    document
        .getElementById("next-button")
        .addEventListener("click", nextQuestion);

    document
        .getElementById("retry-button")
        .addEventListener("click", startQuiz);

    loadQuestion();
}

function loadQuestion() {

    const question = questions[currentQuestionIndex];

    document.getElementById("question").innerText =
        question.question;

    const optionsContainer =
        document.getElementById("options");

    optionsContainer.innerHTML = "";

    question.options.forEach(option => {

        const optionElement =
            document.createElement("button");

        optionElement.classList.add(
            "list-group-item",
            "list-group-item-action",
            "quiz-option"
        );

        optionElement.innerText = option;

        optionElement.onclick = () =>
            checkAnswer(option);

        optionsContainer.appendChild(optionElement);
    });

    document.getElementById("next-button").disabled = true;
}

function checkAnswer(selectedOption) {

    const correctAnswer =
        questions[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
        score++;
    }

    document.querySelectorAll(".quiz-option")
        .forEach(option => {

            option.disabled = true;

            if (option.innerText === correctAnswer) {

                option.style.backgroundColor = "#28a745";
                option.style.color = "#fff";

            } else if (
                option.innerText === selectedOption
            ) {

                option.style.backgroundColor = "#dc3545";
                option.style.color = "#fff";
            }
        });

    const nextButton =
        document.getElementById("next-button");

    nextButton.disabled = false;

    if (
        currentQuestionIndex ===
        questions.length - 1
    ) {
        nextButton.innerText = "Ver Resultado";
    }
}

function nextQuestion() {

    currentQuestionIndex++;

    if (
        currentQuestionIndex <
        questions.length
    ) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {

    document.getElementById("quiz-content")
        .style.display = "none";

    document.getElementById("result")
        .style.display = "block";

    document.getElementById("score")
        .innerText = score;
}