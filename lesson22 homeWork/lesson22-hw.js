// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

let number;
number = 1;
console.log(Boolean(number));

number = 0;
console.log(Boolean(number));

number = -3;
console.log(Boolean(number));

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

let string = 'test';
string === 'test' ? console.log(true) : console.log(false);

string = 'qwerty';
string === 'test' ? console.log(true) : console.log(false);

string = true;
string === 'test' ? console.log(true) : console.log(false);

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

let operation;
let value = 1;

if (value > 10) {
  operation = value - 5;
} else {
  operation = value + 5;
}
console.log(operation);

value = 10;

if (value > 10) {
  operation = value - 5;
} else {
  operation = value + 5;
}
console.log(operation);

value = 13;

if (value > 10) {
  operation = value - 5;
} else {
  operation = value + 5;
}
console.log(operation);

let numValue = 1;
numValue > 10 ? console.log(numValue - 5) : console.log(numValue + 5);

numValue = 10;
numValue > 10 ? console.log(numValue - 5) : console.log(numValue + 5);

numValue = 13;
numValue > 10 ? console.log(numValue - 5) : console.log(numValue + 5);

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

let userInput = prompt('Give me month number from 1 to 12');
let monthNumber = Number(userInput);

switch (monthNumber) {
  case 1:
    alert(`${monthNumber} is January`);
    break;

  case 2:
    alert;
    alert(`${monthNumber} is Fabruary`);
    break;

  case 3:
    alert(`${monthNumber} is March`);
    break;

  case 4:
    alert(`${monthNumber} is April`);
    break;

  case 5:
    alert(`${monthNumber} is May`);
    break;

  case 6:
    alert(`${monthNumber} is June`);
    break;

  case 7:
    alert(`${monthNumber} is July`);
    break;

  case 8:
    alert(`${monthNumber} is August`);
    break;

  case 9:
    alert(`${monthNumber} is September`);
    break;

  case 10:
    alert(`${monthNumber} is October`);
    break;

  case 11:
    alert(`${monthNumber} is November`);
    break;

  case 12:
    alert(`${monthNumber} is December`);
    break;

  default:
    alert(`Number ${monthNumber} can not be used as month!`);
    break;
}

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

let userDigits = prompt('Give me any 3-digit number:  ""');
let sum = Number(userDigits[0]) + Number(userDigits[1]) + Number(userDigits[2]);
alert(`The sum of yours 3 digits will be: ${sum}`);
