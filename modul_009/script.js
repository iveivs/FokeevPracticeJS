'use strict';

// // Конвертация строки в число:
// console.log(Number.parseInt("12.4141"));
// console.log(Number.parseFloat("12.4141"));
// console.log(+("12.4141"));

// - - - 

// // Встроенные методы Math:
// console.log(Math.max(3242, 24, 2235));
// console.log(Math.min(3242, 24, 2235));

// - - - 

// // функция выдающая рандомное число в заданном диапазоне:
// function calcRandom(min, max) {
//     return Math.trunc(Math.random() * (max - min) + 1 ) + min;
// };
// console.log(calcRandom(2, 10));

// - - - 

// Округление чисел:

// // Math.round - округление до ближайшего целого числа
// console.log(Math.round(2.49));

// // Math.ceil округление до ближайшего большего числа
// console.log(Math.ceil(2.49));

// // Math.floor округление до ближайшего меньшего числа
// console.log(Math.floor(2.49));

// // метод toFixed возвращает СТРОКУ с указанным количеством цифр после запятой
// console.log(3.231312.toFixed(4));
// console.log(+(3.231312.toFixed(4)));

// - - - 

// BIGINT

// console.log(2 ** 53 - 1);
// console.log(typeof 9007199254740991n);

// - - - 

// ОБЪЕКТ "ДАТА"

const date = new Date();
const date2 = new Date(0);
console.log(date);
console.log(date2);

const date3 = new Date("Dec 31 2030 13:45");
console.log(date3);
const date4 = new Date(2030, 11, 31, 13, 45);
console.log(date4);

