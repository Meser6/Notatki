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

function playerNumberRound() {
  return isPlayerOneRound ? 1 : 2;
}

function setScore(playerNumberRound) {
  score[`player${playerNumberRound}`] += pointsAtCurrentRound;
  playerScore(playerNumberRound).textContent =
    score[`player${playerNumberRound}`];
}

function roolDice() {
  let random = Math.trunc(Math.random() * 6 + 1);
  diceImg.src = `./src/dice-${random}.png`;
  if (random == 1) {
    currentScore(playerNumberRound()).textContent = 0;
    pointsAtCurrentRound = 0;
    isPlayerOneRound = !isPlayerOneRound;
    let notPlayerNumberRound = isPlayerOneRound ? 2 : 1;
    playerSection(playerNumberRound()).classList.add("player--active");
    playerSection(notPlayerNumberRound).classList.remove("player--active");
  } else {
    pointsAtCurrentRound += random;
  }
}

function roundLogic() {
  roolDice();
  currentScore(playerNumberRound()).textContent = pointsAtCurrentRound;
}

function holdLogic() {
  setScore(playerNumberRound());
  isPlayerOneRound = !isPlayerOneRound;
  let notPlayerNumberRound = isPlayerOneRound ? 2 : 1;
  playerSection(playerNumberRound()).classList.add("player--active");
  playerSection(notPlayerNumberRound).classList.remove("player--active");
  checkWin();
  resetCurrentScore();
}

function resetCurrentScore() {
  currentScore(1).textContent = 0;
  currentScore(2).textContent = 0;
  pointsAtCurrentRound = 0;
}

function resetScore() {
  playerScore(1).textContent = 0;
  playerScore(2).textContent = 0;
  playerSection(1).classList.add("player--active");
  playerSection(2).classList.remove("player--active");
  (score.player1 = 0), (score.player2 = 0);
}

function checkWin() {
  if (score[`player1`] >= 10) {
    roolDiceButton.remove();
    holdButton.remove();
    playerSection(1).classList.add("player--winner");
  } else if (score[`player2`] >= 10) {
    roolDiceButton.remove();
    holdButton.remove();
    playerSection(2).classList.add("player--winner");
  }
}

function newGameLogic() {
  isPlayerOneRound = true;
  pointsAtCurrentRound = 0;
  resetScore();
  document.body.appendChild(roolDiceButton);
  document.body.appendChild(holdButton);
  playerSection(1).classList.remove("player--winner");
  playerSection(2).classList.remove("player--winner");
}

roolDiceButton.addEventListener("click", roundLogic);
holdButton.addEventListener("click", holdLogic);
newGameButton.addEventListener("click", newGameLogic);
