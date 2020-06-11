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
  let number = createNumber(),
    attempt = 10;

  function checkAnswer() {
    if (attempt === 0) {
      let result = confirm('Попытки закончились, хотите сыграть еще?');
      if (result) {
        runGame()();
      }
      return;
    }

    let userAnswer = prompt('Угадай число от 1 до 100:', '');

    if (userAnswer === null) {
      return alert('Игра окончена');
    } else if (!isNumber(userAnswer)) {
      alert('Введи число!');
      checkAnswer();
    } else if (+userAnswer < 1 || +userAnswer > 100) {
      alert('Введи число от 1 до 100');
      checkAnswer();
    } else if (+userAnswer > number) {
      attempt--;
      alert('Загаданное число меньше, осталось попыток ' + attempt);
      checkAnswer();
    } else if (+userAnswer < number) {
      attempt--;
      alert('Загаданное число больше, осталось попыток ' + attempt);
      checkAnswer();
    } else if (+userAnswer === number) {
      let result = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
      if (result) {
        runGame()();
      }
      return;
    }
  }

  return checkAnswer;
}

let gameBot = runGame();
gameBot();