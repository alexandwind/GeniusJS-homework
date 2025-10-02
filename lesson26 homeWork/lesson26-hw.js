// Домашнє завдання
// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні
// Створити телефонну книгу

// --1.1--

// class Abonent {
//   constructor(info) {
//     this.info = info.info;
//   }
//   _name = '';
//   _phone = '';

//   set info(newAbonent) {
//  --1.11--
//     // const infoDivide = newAbonent.split(' ');
//     // this.name = infoDivide[0];
//     // this.phone = infoDivide[1];
//  --1.12--
//     [this._name, this._phone] = newAbonent.split(' ');
//   }

//   get info() {
//     return `Name: ${this._name}, Phone number: ${this._phone}`;
//   }
// }

// const oleksandr = new Abonent({
//   info: 'Oleksandr 0951234567',
// });
// const nataly = new Abonent({
//   info: 'Nataly 0951323475',
// });
// const vano = new Abonent({
//   info: 'Vano 0953332574',
// });

// --1.2--

class Abonent {
  constructor(_name, _phone) {
    this.name = _name;
    this.phone = _phone;
  }

  set info({ _name, _phone }) {
    this.name = _name;
    this.phone = _phone;
  }

  get info() {
    return `Abonent name: ${this.name}, phone number: ${this.phone}`;
  }
}

const oleksandr = new Abonent('Oleksandr', '0951234567');
const nataly = new Abonent('Nataly', '0951323475');
const vano = new Abonent('Vano', '0953332574');

console.log(oleksandr);
console.log(nataly);
console.log(vano);

const phoneBook = [oleksandr, nataly, vano];
phoneBook.forEach((abonent) => console.log(abonent.info));
