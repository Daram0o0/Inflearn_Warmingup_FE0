let quizList = [
  {
    Q: "2 + 2?",
    N: {
      N1: 2,
      N2: 4,
      N3: "답 X"
    },
    A: 4
  },
  {
    Q: "12 * 12?",
    N: {
      N1: 12,
      N2: 196,
      N3: 144,
      N4: 124
    },
    A: 144
  },
  {
    Q: "12943 - 12394?",
    N: {
      N1: 541,
      N2: 531,
      N3: 559,
      N4: 549
    },
    A: 549
  },
];

document.addEventListener('DOMContentLoaded', function () {

  const displayElement = document.querySelector(".display");
  const nextActionBtn = document.querySelector(".action-next");
  const nextBtn = document.querySelector(".next");

  let currentQuestionIndex = 0;

  function nextQuestion() {
    displayElement.style.boxShadow = "inset 2px 10px 40px #FFDDD2";
    currentQuestionIndex++;
    if (currentQuestionIndex >= quizList.length) {
      showRestartButton();
    } else {
      showQuestion();
    }
  }

  function showRestartButton() {
    nextBtn.innerHTML = `<button class="action-reset" id="resetBtn"><p>Restart</p></button>`;
    const resetBtn = document.getElementById("resetBtn");
    resetBtn.addEventListener("click", () => { window.location.reload(); });
  }

  function showQuestion() {
    const currentQuestion = quizList[currentQuestionIndex];
    document.getElementById("questionText").innerText = `Q${currentQuestionIndex + 1}. ${currentQuestion.Q}`;

    const answerButtonsContainer = document.querySelector(".select");
    answerButtonsContainer.innerHTML = "";

    for (const key in currentQuestion.N) {
      const answerButton = document.createElement("button");
      answerButton.className = "action";
      answerButton.innerHTML = `<p>${currentQuestion.N[key]}</p>`;
      answerButton.addEventListener("click", () => checkAnswer(currentQuestion.A, currentQuestion.N[key]));
      answerButtonsContainer.appendChild(answerButton);
    }

    if (currentQuestionIndex === quizList.length - 1) {
      nextBtn.innerHTML = `<button class="action-reset" id="resetBtn"><p>Restart</p></button>`;
      const resetBtn = document.getElementById("resetBtn");
      resetBtn.addEventListener("click", () => { window.location.reload(); });
    }
  }

  function checkAnswer(correctAnswer, selectedAnswer) {
    if (correctAnswer === selectedAnswer) {
      displayElement.style.boxShadow = "inset 2px 10px 40px #96F7D2";
    } else {
      displayElement.style.boxShadow = "inset 2px 10px 40px #FF0000";
    }

    nextActionBtn.addEventListener("click", nextQuestion);
  }

  showQuestion();
});
