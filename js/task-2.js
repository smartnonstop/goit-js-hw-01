'use strict';

const total = 100;
const ordered = 50;

const successMessage = 'Заказ оформлен, с вами свяжется менеджер';
const failMessage = 'На складе недостаточно твоаров!';

if (ordered > total) {
  console.log(failMessage);
} else {
  console.log(successMessage);
}

