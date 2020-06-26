'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const promptLabel = "Введите пожалуйста Ваш пароль!";

const userInput = prompt(promptLabel);

if (userInput === null) {
  message = 'Отменено пользователем!';
} else if (userInput === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);