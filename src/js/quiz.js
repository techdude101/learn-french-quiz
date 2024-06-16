import numbers_fr from "./numbers_translations";

export default class Quiz {

  QUESTION_TEXT = "What is the number x in French?";

  /**
   * Create a new numbers quiz
   * 
   * Generate questions with a random number
   * between {startNumber} and {endNumber}
   * 
   * @param {Number} startNumber - minimum number
   * @param {Number} endNumber - maximum number
   * @param {Number} numberOfQuestions - 
   */
  constructor(startNumber = 1, endNumber = 10, numberOfQuestions = 10) {
    this.newQuiz(numberOfQuestions)
    this.startNumber = startNumber;
    this.endNumber = endNumber;
    this.randomNumber = -1;
  }

  newQuiz(numberOfQuestions) {
    this.score = 0;
    this.questionIndex = 1;
    this.numberOfQuestions = numberOfQuestions;
  }

  generateQuestion() {
    const randomNumber = this.generateRandomInteger(this.startNumber, this.endNumber);
    const text = this.QUESTION_TEXT.replace("x", randomNumber);
    this.randomNumber = randomNumber;
    
    return `${this.questionIndex}. ${text}`;
  }

  checkAnswer(randomNumber, answer) {
    const result = numbers_fr[randomNumber] === answer;
    
    return result;
  }

  getCorrectAnswer(randomNumber) {
    return numbers_fr[randomNumber];
  }

  generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
}