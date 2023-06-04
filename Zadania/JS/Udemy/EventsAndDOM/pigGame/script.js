"use strict";

const playerScore = (number) => document.querySelector(`#score--${number}`);
const playerSection = (number) =>
  document.querySelector(`section.player--${number}`);
const currentScore = (number) => document.querySelector(`#current--${number}`);
const diceImg = document.querySelector(".dice");
const roolDiceButton = document.querySelector(".btn--roll");
const holdButton = document.querySelector(".btn--hold");
const newGameButton = document.querySelector(".btn--new");

const score = {
  player1: 0,
  player2: 0,
};

let isPlayerOneRound = true;
let pointsAtCurrentRound = 0;
const WINNING_SCORE = 100;

function getCurrentPlayerNumber() {
  return isPlayerOneRound ? 1 : 2;
}
function getOpponentPlayerNumber() {
  return isPlayerOneRound ? 2 : 1;
}

function setScore(playerNumberRound) {
  let playerName = `player${playerNumberRound}`;
  score[playerName] += pointsAtCurrentRound;
  playerScore(playerNumberRound).textContent = score[playerName];
}

function switchRound() {
  isPlayerOneRound = !isPlayerOneRound;
  playerSection(getCurrentPlayerNumber()).classList.add("player--active");
  playerSection(getOpponentPlayerNumber()).classList.remove("player--active");
}

function roolDice() {
  let random = Math.trunc(Math.random() * 6 + 1);
  diceImg.src = `./src/dice-${random}.png`;
  if (random == 1) {
    currentScore(getCurrentPlayerNumber()).textContent = 0;
    pointsAtCurrentRound = 0;
    switchRound();
  } else {
    pointsAtCurrentRound += random;
  }
}

function roundLogic() {
  roolDice();
  currentScore(getCurrentPlayerNumber()).textContent = pointsAtCurrentRound;
}

function holdLogic() {
  setScore(getCurrentPlayerNumber());
  switchRound();
  checkWin();
  resetCurrentScore();
}

function resetCurrentScore() {
  currentScore(1).textContent = 0;
  currentScore(2).textContent = 0;
  pointsAtCurrentRound = 0;
}

function resetScore() {
  for (let i = 1; i < 3; i++) {
    playerScore(i).textContent = 0;
    score[`player${i}`] = 0;
    playerSection(i).classList.remove("player--winner");
  }
  playerSection(1).classList.add("player--active");
  playerSection(2).classList.remove("player--active");
}

function checkWin() {
  if (score[`player1`] >= WINNING_SCORE) {
    winLogic(1);
  } else if (score[`player2`] >= WINNING_SCORE) {
    winLogic(2);
  }
}

function winLogic(winnerNumber) {
  roolDiceButton.remove();
  holdButton.remove();
  playerSection(winnerNumber).classList.add("player--winner");
}

function newGameLogic() {
  isPlayerOneRound = true;
  pointsAtCurrentRound = 0;
  resetScore();
  document.body.appendChild(roolDiceButton);
  document.body.appendChild(holdButton);
}

roolDiceButton.addEventListener("click", roundLogic);
holdButton.addEventListener("click", holdLogic);
newGameButton.addEventListener("click", newGameLogic);
