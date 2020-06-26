"use strict";

let credits = 23580;
const pricePerDroid = 3000;

const promptDroidChoiceLabel = 'Какое количество дроидов вы хотите купить?';

let userDroidChoice = prompt(promptDroidChoiceLabel);

let totalPrice;

if (userDroidChoice === null) {
  console.log('Отменено пользователем!');
} else {

  userDroidChoice = Number(userDroidChoice);
  if(!Number.isNaN(userDroidChoice)) {
    totalPrice = userDroidChoice * pricePerDroid;
    if (totalPrice > credits) {
      console.log('Недостаточно средств на счету!');
    } else {
      credits = credits - totalPrice;
      const successMessage = `Вы купили ${userDroidChoice} дроидов, на счету осталось ${credits} кредитов.`;
      console.log(successMessage);
    }
  } else {
    console.log('Введено неверное число!!');
  }
  
  
}