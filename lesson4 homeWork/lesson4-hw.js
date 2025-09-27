//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

const fruits = [
  { id: 0, name: 'Apple' },
  { id: 1, name: 'Tomat' },
  { id: 2, name: 'Cherry' },
  { id: 3, name: 'Orange' },
];

const fruitsOnly = fruits.map((fruit) => fruit.name);
console.log(fruitsOnly);

const namesFruits = fruits.map(({ name }) => ({ name }));
console.log(namesFruits);

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

for (let i = 2; i < 11; i += 2) {
  console.log(i);
}

//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//     console.lpg( `цифра ${i}!` );
//   }

let i = 0;
while (i < 5) {
  console.log(`цифра ${i}!`);
  i++;
}

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// let userInput;
// do {
//   userInput = prompt(
//     'Enter the number more than 100 (or face the consequences!): ""'
//   );
//   if (userInput === null || userInput.trim() === '') break;
//   else if (Number(userInput) > 100) break;
// } while (true);
// {
//   if (Number(userInput) <= 100);
// }

//  -- 5 --
// Вирахуйте середній вік

const girls = [
  { age: 23, name: 'Оля' },
  { age: 29, name: 'Аня' },
  { age: 10, name: 'Юля' },
  { age: 20, name: 'Катя' },
];

// const averAge = girls.reduce((sum, { age }) => sum + age, 0) / girls.length;
const averAge =
  girls.reduce((sum, girlAge) => sum + girlAge.age, 0) / girls.length;
console.log(averAge);
