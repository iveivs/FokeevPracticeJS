'use strict'
// *** ТРИНАРНЫЙ ОПЕРАТОР ***

// const age = 23

// // age >= 18 ? console.log("I am 18 year old") : console.log("I am not 18 year old ")

// const drink = age >= 18 ? "wine" : "juice"
// console.log(drink);

// let drink2

// if (age >= 18) {
//     drink2 = "wine"
// }else {
//     drink2 = "juice"
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine" : "juice"}`);



// *** ФУНКЦИИ ***

// Function declaration(вид функции) данный способ позволяет делать вызов функции из любого места кода

// function multiConsole () {
//     console.log('Hello world');
//     console.log('Hello world');
//     console.log('Hello world');
// }

// const a = multiConsole();
// console.log(a);

// function calc(a, b, c) {
//     return a + b - c
// }

// const result = calc(10, 4, 7);
// console.log(result);

// Function expression  (вызывать функцию можно только ниже самой функции)

// let result2 = function(a, b) {
//     return a + b;
// };

// console.log(result2(2, 8));



//  ***  ОБЛАСТЬ ВИДИМОСТИ  ***

// function myFunc() {
//     const a = 12;
// }
// myFunc();
// console.log(a);

// -------------------

// let a = 8

// function myFunc() {
//     a = 12;
// }
// myFunc();
// console.log(a);

// -------------------

// const a = 3

// function myFunc(){
//     function myFunc2() {
//         console.log(a);
//     } 
//     myFunc2();
// }
// myFunc();

// -------------------

// let a
// let b

// function myFn() {
//     let b
//     a = true
//     b = 5
//     console.log(b)
// }

// myFn();

// console.log(a);
// console.log(b);

// Ответ:
// 5
// true
// undefined

// -------------------



// callBack ФУНКЦИИ:

// confirm('How old are you?')
// function ask(question, yes, no) {
//     if (confirm(question)) {
//         yes() // обязательно указывать круглые скобки для вызова функции
//     }else no() // обязательно указывать круглые скобки для вызова функции
// }

// function showOk(){
//     alert("Спасибо за согласие")
// }

// function showCancel(){
//     alert("Вы отменили выполнение")
// }

// ask("Вы согласны ?", showOk, showCancel) // здесь НЕ НАДО указывать круглые скобки для вызова функции



//  ***  Укороченный вариант:

// ask("Вы согласны ?", function(){alert("Спасибо за согласие")}, function(){
//     alert("Вы отменили выполнение")
// }) 


//  *** Укороченный вариант с использованием стрелочных функций:

// ask("Вы согласны ?", () => alert("Спасибо за согласие"), () =>
//     alert("Вы отменили выполнение")
// )
// -------------------

// Стрелочная функция
// let sum = (a, b) => a + b
// console.log(sum(5, 3)); 


// -------------------


//    " О Б Ъ Е К Т Ы "


// const user = {
//     name: 'John',
//     age: 23
// }

// user.sex = "male"
// console.log(user);

// delete user.sex
// console.log(user);

// const propertyName = "newProperty"

// -----

//      *** Запись через Квадратные скобки: ***

// user[propertyName] = "propertyValue"
// console.log(user);


// const answer = prompt("Напишите слово name или age")
// alert(user[answer])


//   ***  Вложенные свойства объектов ***

// const user = {
//     name: 'John',
//     age: 23,
//     placeOfBirth: {
//         country: "Russia",
//         city: "Novgorod"
//     }
// }

// user.placeOfBirth.country = "USA"
// user.placeOfBirth["adress"] = "street street"
// delete user["placeOfBirth"].city
// console.log(user);


//  *** Сокращённая запись свойств объектов


// Было:
// const firstName = "John"
// const lastName = "Travolta"

// const user = {
//     firstName: firstName,
//     lastName: lastName,
//     country: "USA"
// }
// console.log(user);

// Стало:

// const firstName2 = "John"
// const lastName2 = "Travolta"

// const user2 = {
//     firstName2,
//     lastName2,
//     country2: "USA"
// }
// console.log(user2);


// ***  Создание функций в объекте


// const firstName = "John"
// const lastName = "Travolta"

// function calcAgeNew() {
//     return 2023 - user.birthYear
// }

// const user = {
//     firstName,
//     lastName,
//     birthYear: 1991,
//     calcAge: function() {
//         return 2023 - user.birthYear
//     },
//     calcAgeNew: calcAgeNew
// }
// console.log(user.calcAge());
// console.log(user.calcAgeNew());

// Сокращенный вариант:

// const firstName = "John"
// const lastName = "Travolta"

// function calcAgeNew() {
//     return 2023 - user.birthYear
// }

// const user = {
//     firstName,
//     lastName,
//     birthYear: 1991,
//     calcAge() {
//         return 2023 - user.birthYear
//     },
//     calcAgeNew
// }
// console.log(user.calcAge());
// console.log(user.calcAgeNew());


// *** метод объекта - this

// const firstName = "John"
// const lastName = "Travolta"

// function calcAgeNew() {
//     return 2023 - this.birthYear
// }

// const userFirst = {
//     firstName,
//     lastName,
//     birthYear: 1991,
//     calcAge() {
//         console.log(this)
//         return 2023 - this.birthYear
//     },
//     calcAgeNew
// }


// const firstName2 = "John"
// const lastName2 = "Travolta"

// const userSecond = {
//     firstName2,
//     lastName2,
//     birthYear: 2000,
//     calcAge() {
//         console.log(this)
//         return 2023 - this.birthYear
//     },
//     calcAgeNew
// }

// console.log(userFirst.calcAge())
// console.log(userFirst.calcAgeNew())

// console.log(userSecond.calcAge())
// console.log(userSecond.calcAgeNew())


// МАССИВЫ

// const userArr = ["jay", 30, "Hello"]
// console.log(userArr)
// userArr[3] = "Saturn"
// console.log(userArr)
// console.log(userArr[userArr.length - 2])
// console.log(userArr.at(-1))

// // добавление элемента в конец массива - push(возвращает длину массива)
// userArr.push('Add me in the end')
// console.log(userArr);

// // добавление элемента в начало массива - unshift(возвращает длину массива )
// userArr.unshift('Add to start')
// console.log(userArr);

// // удаление элемента в конце массива - pop(возвращает удалённый элемент)
// userArr.pop()
// console.log(userArr);

// // удаление элемента в начале массива - shift(возвращает удалённый элемент)
// userArr.shift()
// console.log(userArr);

