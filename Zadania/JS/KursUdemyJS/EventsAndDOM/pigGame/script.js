"use strict";

const playerXScore = (number) => document.querySelector(`#score--${number}`);
const playerSection = (number) =>
  document.querySelector(`section.player--${number}`);
const currentScore = (number) => document.querySelector(`#current--${number}`);
const diceImg = document.querySelector(".dice");
const roolDiceButton = document.querySelector(".btn--roll");
const holdButton = document.querySelector(".btn--hold");

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
  playerXScore(playerNumberRound).textContent =
    score[`player${playerNumberRound}`];
}

function roolDice(playerNumberRound) {
  let random = Math.trunc(Math.random() * 6 + 1);
  diceImg.src = `./src/dice-${random}.png`;
  score[`player${playerNumberRound}`] += random;
  return random;
}

function roundLogic() {
  pointsAtCurrentRound += roolDice(playerNumberRound());
  setScore(playerNumberRound());
  currentScore(playerNumberRound()).textContent = pointsAtCurrentRound;
}

function holdLogic() {
  isPlayerOneRound = !isPlayerOneRound;
  let notPlayerNumberRound = isPlayerOneRound ? 2 : 1;
  playerSection(playerNumberRound()).classList.add("player--active");
  playerSection(notPlayerNumberRound).classList.remove("player--active");
  pointsAtCurrentRound = 0;
}

roolDiceButton.addEventListener("click", roundLogic);
holdButton.addEventListener("click", holdLogic);
