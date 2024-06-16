import Quiz from "./quiz";

const numberOfQuestions = 10;
const numberRange = [1, 100];
const quiz = new Quiz(numberRange[0], numberRange[1], numberOfQuestions);
let scoreUpdated = false;

// Elements
const questionFormElement = document.querySelector("#question-form");
const questionLabelElement = document.querySelector("#question-label");
const answerInputElement = document.querySelector("#answer-input");
const submitButtonElement = document.querySelector("#submit-button");
const nextButtonElement = document.querySelector("#next-button");

const infoScreen = document.querySelector("#info-screen");
const infoScreenCorrectAnswer = document.querySelector("#info-correct-answer");

const resultsScreen = document.querySelector("#results-screen");
const resultsScoreElement = document.querySelector("#results-score");

// Event listeners
questionFormElement.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const answer = answerInputElement.value;
  const result = quiz.checkAnswer(quiz.randomNumber, answer);
  
  if (result) {
    quiz.score += 1;
    scoreUpdated = true;
    infoScreen.style.visibility = "visible";
    infoScreenCorrectAnswer.textContent = `Correct! :)`;
  } else {
    const correctAnswer = quiz.getCorrectAnswer(quiz.randomNumber);
    resultsScreen.style.visibility = "hidden";
    infoScreen.style.visibility = "visible";
    infoScreenCorrectAnswer.textContent = `Correct answer: ${correctAnswer}`;
  }
  
  if (quiz.questionIndex >= numberOfQuestions) {

    submitButtonElement.setAttribute("disabled", "disabled");
    nextButtonElement.setAttribute("disabled", "disabled");
    resultsScoreElement.textContent = `Total score: ${quiz.score} / ${numberOfQuestions}`;
    resultsScreen.style.visibility = "visible";
  }
});

nextButtonElement.addEventListener("click", (e) => {

  resultsScreen.style.visibility = "hidden";
  infoScreen.style.visibility = "hidden";

  const answer = answerInputElement.value;
  const result = quiz.checkAnswer(quiz.randomNumber, answer);
  
  if (result && scoreUpdated == false) {
    quiz.score += 1;
  }

  scoreUpdated = false;

  if (quiz.questionIndex < numberOfQuestions) {
    quiz.questionIndex += 1;

    const question = quiz.generateQuestion();

    questionLabelElement.textContent = question;
    answerInputElement.value = "";
  } else {
    nextButtonElement.setAttribute("disabled", "disabled");
    submitButtonElement.setAttribute("disabled", "disabled");
    resultsScoreElement.textContent = `Total score: ${quiz.score} / ${numberOfQuestions}`;
    resultsScreen.style.visibility = "visible";
  }
});

resultsScreen.style.visibility = "hidden";
infoScreen.style.visibility = "hidden";

const question = quiz.generateQuestion();

questionLabelElement.textContent = question;