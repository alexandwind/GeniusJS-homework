// Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа
// та прочитати його значення.

// const divData = document.querySelector('[data-widget-name]');
// // const widget = divData.getAttribute('data-widget-name');
// // console.log(widget);
// console.log(divData.dataset.widgetName);

const divData = document
  .querySelectorAll('[data-widget-name]')
  .forEach((div) => alert(div.dataset.widgetName));
