'use strict';

const body = document.querySelector('body');
const guess = document.querySelector('.main__guess');
const number = document.querySelector('.header__number');
const btnAgain = document.querySelector('.btn--again');
const btnCheck = document.querySelector('.btn--check');
const message = document.querySelector('.main__message');
const highscore = document.querySelector('.main__highscore');
const score = document.querySelector('.main__score');

let scoreNum = 20;
let highscoreNum = 0;
let num;

function randomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

function checkGuess() {
  let guessNum = parseInt(guess.value);
  console.log(typeof guessNum);

  if (!guessNum) {
    message.textContent = 'Invalid number!';
  } else if (guessNum === num) {
    number.textContent = num;
    message.textContent = 'Congatulations! You win!';
    body.style.backgroundColor = '#60b347';
    score.textContent = scoreNum;
    getHighscore();
    btnCheck.disabled = true;
  } else if (guessNum !== num) {
    message.textContent = guessNum < num ? 'Too low!' : 'Too high';
    checkScore();
    score.textContent = scoreNum;
  }
}

function checkScore() {
  scoreNum > 0 ? scoreNum-- : (scoreNum = 0);

  if (scoreNum === 0) {
    message.textContent = 'Game over!!!!';
    btnCheck.disabled = true;
  }
}

function getHighscore() {
  if (scoreNum >= highscoreNum) highscoreNum = scoreNum;
  highscore.textContent = highscoreNum;
}

function newGame() {
  num = randomNumber();
  number.textContent = '?';
  body.style.backgroundColor = '#000';
  guess.value = '';
  message.textContent = 'Start guessing...';
  scoreNum = 20;
  score.textContent = scoreNum;
  btnCheck.disabled = false;
}

btnAgain.addEventListener('click', newGame);
btnCheck.addEventListener('click', checkGuess);
guess.addEventListener('keydown', e => {
  if (e.key === 'Enter' && btnCheck.disabled === false) {
    checkGuess();
  }
});

newGame();
