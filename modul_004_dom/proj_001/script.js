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


// 4.7 ПОЛУЧЕНИЕ И ИЗМЕНЕНИЕ СОДЕРЖИМОГО ТЕГОВ


// let elem1 = document.querySelector("h1");

// console.log(elem1.innerHTML);

// elem1.innerHTML = "<p>Привет, я НОВЫЙ ТЕКСТ</p>";

// -----    -----    -----

// let elem1 = document.querySelector("h1");

// let oldData = elem1.innerHTML;

// elem1.innerHTML = `<p>${oldData}</p> <p>Привет, я НОВЫЙ ТЕКСТ 1 </p>`

// -----    -----    -----

// свойства для получения и изменения тегов:

// elem.textContent (только текст внутри тегов)


// elem.outerHTML (меняет сам тег)
// elem1.outerHTML = ` <p>Привет, я НОВЫЙ ТЕКСТ 1 </p>`


// elem.data (доступ к узлам)

// console.log(elem1.firstChild);

// elem1.firstChild.data = "Я новый комментарий"

// -----    -----    -----

// let header = document.querySelector('h1')

// let secondHeader = document.createElement("h2");

// secondHeader.innerHTML = "Новый заголовок h2"

// header.before(secondHeader);
// header.after(secondHeader);
// header.prepend(secondHeader)

// header.append(secondHeader, "some txt")
// header.append("some txt") // можно просто добавлять только текст куда-то

// ----- 

// insertAdjacentHTML - параметры: beforebegin, afterbegin, beforeend, afterend

// header.insertAdjacentHTML("afterbegin" ,"<p>SoMe TeXt</p>");

// console.log(secondHeader);

// ----- 


// КЛОНИРОВАНИЕ / ПЕРЕМЕЩЕНИЕ / УДАЛЕНИЕ элементов

// let header = document.querySelector('h1');

// let ul = document.querySelector("ul");

// // ul.prepend(header);

// let ulClone = ul.cloneNode(true);

// header.prepend(ulClone);   

// header.remove(); // удаление тега

// ----- 


// ИЗМЕНЕНИЕ CSS стилей

// let header = document.querySelector('h1');
// header.classList.add('newClass');

//  .add - добавить класс, 
//  .remove - удалить класс ,
//  .toggle - добавить класс если его нет, а если есть то удалить, 
//  .contains - проверка наличия класса - возвращает true/folse

// console.log(header.className);
// header.className = "newClass";

// let styleOffHeader = getComputedStyle(header);

// console.log(parseInt(styleOffHeader.marginBottom));

// let li = document.querySelector("li");
// let styleOffHeader1 = getComputedStyle(li, "::before");
// console.log(styleOffHeader1);

// - - - 

// let liAll = document.querySelectorAll("li");

// for (let value of liAll) {
//     value.classList.add("newClass");
// }


//  ПОЛУЧЕНИЕ И ИЗМЕНЕНИЕ АТРИБУТОВ DOM элементов

// let img = document.querySelector("img");
// img.src = "ft2.jpeg"
