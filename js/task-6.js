'use strict';

let input;
let total = 0;

do {
  input = prompt('Введите число!');

  if (input === null) {
    break;
  }

  const numberInput = Number(input);

  if (!Number.isNaN(numberInput)) {
    total += numberInput;
  } else {
    alert('Было введено не число, попробуйте еще раз');
  }

} while (true)

const message = `Общая сумма чисел равна ${total}`;

alert (message);