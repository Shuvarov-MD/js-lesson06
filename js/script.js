'use strict';

//Функция проверки на число
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

//Функция создания случайного числа от 1 до 100
function createNumber() {
  return Math.floor((Math.random() * 100) + 1);
}

//Функция запуска игры
function runGame() {
  let number = createNumber();

  function checkAnswer() {
    let userAnswer = prompt('Угадай число от 1 до 100:', '');

    if (userAnswer === null) {
      return alert('Игра окончена');
    } else if(!isNumber(userAnswer)) {
      alert('Введи число!');
      checkAnswer();
    } else if (+userAnswer < 1 || +userAnswer > 100) {
      alert('Введи число от 1 до 100');
      checkAnswer();
    } else if (+userAnswer > number) {
      alert('Загаданное число меньше');
      checkAnswer();
    } else if (+userAnswer < number) {
      alert('Загаданное число больше');
      checkAnswer();
    } else if(+userAnswer === number) {
      return alert('Вы победили!');
    }
  }

  return checkAnswer;
}

let gameBot = runGame();
gameBot();