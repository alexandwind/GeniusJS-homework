// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять

// const student = {
//   name: 'Taras',
//   speciality: 'it-developer',
//   averageScore: 3,
//   numMissLesson: 20,
// };

// 2) написати метод який буде виводити цю інформацію

const student = {
  name: 'Taras Shevchenko',
  speciality: 'it-developer',
  averageScore: 8,
  numMissLesson: 3,
  studentInfo: function (city, age) {
    console.group(`${this.name} information: `);
    console.log('Name: ' + this.name);
    console.log('Speciality: ' + this.speciality);
    console.log('Average score: ' + this.averageScore);
    console.log('Number of missed lessons: ' + this.numMissLesson);
    console.log('City: ' + city);
    console.log('Age: ' + age);
    console.groupEnd();
  },
};

student.studentInfo('Kiev', '21');

// 3) написати три варіанти студентів

const Pavel = {
  name: 'Pavel Zubrov',
  speciality: 'carpenter',
  averageScore: 7,
  numMissLesson: 4,
};

const Nataly = {
  name: 'Nataly Samborska',
  speciality: 'accountant',
  averageScore: 9,
  numMissLesson: 1,
};

const Vano = {
  name: 'Vano Kikabidze',
  speciality: 'manager',
  averageScore: 5,
  numMissLesson: 10,
};

// 4) прикріпити знначення за допомогою call apply bind

student.studentInfo.call(Pavel, 'Zhytomyr', '23');
student.studentInfo.apply(Nataly, ['London', '21']);
student.studentInfo.bind(Vano)('Lviv', '19');

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// --2.11--

// document.getElementById('htmlBtn').addEventListener('click', function () {
//   alert(
//     'HTML: HyperText Markup Language - structurising content for web pages '
//   );
// });

// document.getElementById('cssBtn').addEventListener('click', function () {
//   this.innerHTML =
//     '<p>CSS: Cascading Style Sheets - a style sheet language in web development</p>';
// });

// --2.12--

// const output = document.getElementById('output');

// document.getElementById('htmlBtn').addEventListener('click', function () {
//   output.textContent =
//     'HTML: HyperText Markup Language - structurising content for web pages ';
// });

// document.getElementById('cssBtn').addEventListener('click', function () {
//   this.textContent =
//     'CSS: Cascading Style Sheets - a style sheet language in web development';
// });

// --2.2--

// --2.21--
// const btnDefenition = {
//   HTML: 'HTML: HyperText Markup Language - structurising content for web pages',
//   CSS: 'CSS: Cascading Style Sheets - a style sheet language in web development',
// };
// document.querySelectorAll('button').forEach(function (btn) {
//   btn.addEventListener('click', function () {
//     alert(btnDefenition[this.textContent]);
//   });
// });

// --2.22--
const output = document.getElementById('output');

const btnDefenition = {
  HTML: 'HTML: HyperText Markup Language - structurising content for web pages',
  CSS: 'CSS: Cascading Style Sheets - a style sheet language in web development',
};
document.querySelectorAll('button').forEach((btn) => {
  btn.addEventListener('click', () => {
    output.textContent = btnDefenition[btn.textContent];
  });
});

// --2.3--

// const output = document.getElementById('output');

// const button = document.querySelectorAll('button');

// button.forEach((btn) =>
//   btn.addEventListener('click', () => {
//     if (btn.dataset.type === 'html') {
//       output.textContent =
//         'HTML: HyperText Markup Language - structurising content for web pages';
//     } else if (btn.dataset.type === 'css') {
//       output.textContent =
//         'CSS: Cascading Style Sheets - a style sheet language in web development';
//     }
//   })
// );

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

const shop = (name, costKg, quantity) => {
  const totalCost = (costKg * quantity).toFixed(2);
  return { product: name, cost: totalCost };
};

console.log(shop('banana', 30, 4.5));
console.log(shop('cherry', 58, 1.3));
console.log(shop('orange', 89, 3.4));
