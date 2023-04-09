"use strict";
/* Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the messageElement, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK � */

const messageElement = document.querySelector(".message");
const numberElement = document.querySelector(".number");
const inputNumberElement = document.querySelector(".guess");
const scoreNumber = document.querySelector(".score");
const highscoreNumber = document.querySelector(".highscore");
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const guessNumberSection = document.querySelector("#guessNumber");

const numberToGuess = getRandomNumber();
let pointsAtCurrentGame = 20;

let highscore = 0;

function getRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
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

//TODO remove it
//numberElement.textContent = numberToGuess;

function again() {
  if (messageElement.textContent === "You guess!") {
    guessNumberSection.appendChild(checkButton);
    document.body.style.backgroundColor = "#222";
  }
  numberToGuess = getRandomNumber();
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
}

checkButton.addEventListener("click", theGame);
againButton.addEventListener("click", again);
