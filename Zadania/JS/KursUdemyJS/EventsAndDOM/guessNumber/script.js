"use strict";

const messageElement = document.querySelector(".message");
const numberElement = document.querySelector(".number");
const inputNumberElement = document.querySelector(".guess");
const scoreNumber = document.querySelector(".score");
const highscoreNumber = document.querySelector(".highscore");
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const guessNumberSection = document.querySelector("#guessNumber");

let numberToGuess;
let pointsAtCurrentGame = 20;
let highscore = 0;

function getRandomNumber() {
  numberToGuess = Math.trunc(Math.random() * 20) + 1;
}

function getUserNumber() {
  return Number(inputNumberElement.value);
}

function changeMessage(message) {
  messageElement.textContent = message;
}

function highscoreLogic() {
  if (pointsAtCurrentGame > highscore) {
    highscore = pointsAtCurrentGame;
    highscoreNumber.textContent = highscore;
  }
}

function incorrectNumberLogic(message) {
  changeMessage(message);
  pointsAtCurrentGame--;
  scoreNumber.textContent = pointsAtCurrentGame;
  if (pointsAtCurrentGame === 0) {
    changeMessage("You lose");
    checkButton.remove();
  }
}

function correctNumberLogic() {
  changeMessage("You guess!");
  document.body.style.backgroundColor = "#60b347";
  checkButton.remove();
  highscoreLogic();
}

function again() {
  if (
    messageElement.textContent === "You guess!" ||
    messageElement.textContent === "You lose"
  ) {
    guessNumberSection.appendChild(checkButton);
    document.body.style.backgroundColor = "#222";
  }
  getRandomNumber();
  pointsAtCurrentGame = 20;
  scoreNumber.textContent = pointsAtCurrentGame;
  changeMessage("Start guessing agian...");
  inputNumberElement.value = "";
  inputNumberElement.focus();
}

function theGame() {
  // No number
  if (!getUserNumber()) {
    incorrectNumberLogic("No number");
  }
  // Correct number
  else if (getUserNumber() === numberToGuess) {
    correctNumberLogic();
  }
  // Too high number
  else if (getUserNumber() > numberToGuess) {
    incorrectNumberLogic("Too high number");
  }
  // To low number
  else if (getUserNumber() < numberToGuess) {
    incorrectNumberLogic("Too low number");
  }
  inputNumberElement.value = "";
}

getRandomNumber();
inputNumberElement.focus();
checkButton.addEventListener("click", theGame);
againButton.addEventListener("click", again);
inputNumberElement.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    theGame();
  } else if (event.keyCode === 82) {
    again();
  }
});
