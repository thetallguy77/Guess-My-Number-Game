'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent;

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secertNumber = Math.trunc(Math.random() * 20) + 1;
let score = 0;
let highScore = 0;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'ʕಠ_ಠʔ No Number';
    displayMessage('ʕಠ_ಠʔ No Number');
  }
  //when player wins
  else if (guess === secertNumber) {
    displayMessage(' ʕ•◡•ʔっ Correct!!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayNumber(`-${secertNumber}-`);

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //when guess is wrong
  else if (guess !== secertNumber) {
    if (score < 21) {
      displayMessage(
        guess > secertNumber ? ' ʕ•́ᴥ•̀ʔっToo high.' : ' ʕ•́ᴥ•̀ʔっToo low.'
      );
      score++;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(' You lose.');
      document.querySelector('.score').textContent = 0;
    }
  }
  /*
  //when guess is too high
  else if (guess > secertNumber) {
    if (score < 21) {
      document.querySelector('.message').textContent = ' ʕ•́ᴥ•̀ʔっToo high.';
      score++;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' You lose.';
      document.querySelector('.score').textContent = 0;
    }
  }
  //when player guess too low
  else if (guess < secertNumber) {
    if (score < 21) {
      document.querySelector('.message').textContent = ' ʕ•́ᴥ•̀ʔっToo low.';
      score++;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' You lose.';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});

document.querySelector('.again').addEventListener('click', function () {
  score = 0;
  secertNumber = Math.trunc(Math.random() * 20) + 1;

  displayNumber(`?`);
  displayMessage('◠‿◠ Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
