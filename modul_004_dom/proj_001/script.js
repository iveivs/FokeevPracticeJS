'use strict';

// доступ к HTML узлам

// let header = document.querySelector(".header")

// console.dir(header.firstChild);

// let navList = document.querySelector('.nav__list')

// console.log(navList.lastChild); // доступ к последнему узлу
// console.log(navList.firstChild); // доступ к первому узлу
// console.log(navList.parentNode); // доступ к родителю
// console.log(navList.childNodes); // доступ к списку всех "детей" включая текстовые узлы и комментарии
// console.log(navList.previousSibling); // доступ к предыдущему соседу

// ПСЕВДОМАССИВЫ (у них нет таких методов как у массивов(есть только length))

// let navItems = document.querySelectorAll('li');
// console.log(navItems[1]);

// ----------------------

// цикл FOR

// let a = 0;

// let arr = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

// }

// while (a < 3) {
//     console.log(a);
//     a++;
// }

// ----------------------

// Циклы FOR OF и FOR IN

// цикл FOR OF  он работает только со значением(не работает с ключом) нужен для перебора массивов и псевдомассивов, 

// let arr = [1, 2, 3, 4, 5, 6];

// for (let valueNaprimer of arr) {
//     console.log(value);
// }

// ----

// цикл FOR IN используется для перебора объектов

// let user1 = {
//     name: 'John',
//     age: 30,
//     lastName: 'Travolta'
// };

// for (let keyNaprimer in user1) {
//     console.log(keyNaprimer);
// };

// for (let znachenie in user1) {
//     console.log(user1[znachenie]);
// };

// ----------------------


