const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which language runs in a browser?",
    options: ["Java", "C", "JavaScript"],
    answer: "JavaScript"
  }
];

let currentIndex = 0;

function loadQuestion() {
  const current = quizData[currentIndex];
  document.getElementById("question").textContent = current.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = ""; // Clear previous options

  current.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = quizData[currentIndex].answer;
  alert(selected === correct ? "Correct!" : "Wrong!");
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < quizData.length) {
    loadQuestion();
  } else {
    alert("Quiz completed!");
  }
}

loadQuestion();
