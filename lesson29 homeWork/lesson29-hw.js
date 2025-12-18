// Домашнє завдання
// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

// const textElem = document.querySelector('#text');

// const btn = document.querySelector('button');

// const classToggle = () => textElem.classList.toggle('hidden');

// btn.addEventListener(
//   'click',
//   classToggle
// );

// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

// const btn = document.querySelector('button');

// btn.addEventListener('click', () =>
//   //   btn.style.display = 'none';
//   btn.classList.add('hidden')
// );

// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

document.addEventListener('DOMContentLoaded', () => {
  // Select all toggle spans
  document.querySelectorAll('.toggle').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const parentLi = toggle.parentElement;
      const childUl = parentLi.querySelector('ul');

      if (childUl) {
        childUl.classList.toggle('hidden');
        // Change arrow direction
        toggle.textContent = childUl.classList.contains('hidden') ? '▶' : '▼';
      }
    });
  });
});
