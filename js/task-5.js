"use strict";

const userCountryChoice = prompt('Введите страну для доставки!').toLowerCase();

const userCountry = userCountryChoice.charAt(0).toUpperCase() + userCountryChoice.slice(1);

let deliveryPrice = 0;

switch (userCountry) {
  case 'Китай':
    deliveryPrice = 100;
    break;
  case 'Чили':
    deliveryPrice = 250;
    break;
  case 'Австралия':
    deliveryPrice = 170;
    break;
  case 'Индия':
      deliveryPrice = 80;
      break;
  case 'Ямайка':
    deliveryPrice = 120;
    break;
}


let message = '';

if (deliveryPrice > 0) {
  message = `Доставка в ${userCountry} будет стоить ${deliveryPrice} кредитов`;
} else {
  message = `В ${userCountry} - доставка не предусмотрена!`;
}

console.log(message);








// let input;
// let total = 0;

// const promptLabel = 'Введите число!';

// do {
//   input = prompt(promptLabel);

//   if (input !== null && Number.isNaN(Number(input))) {
//     alert('Было введено не число, попробуйте еще раз');
//   } else {
//     total += Number(input);
//   }
// } while (input !== null);

// const alertMessage = `Общая сумма чисел равна ${total}`;

// alert(alertMessage);