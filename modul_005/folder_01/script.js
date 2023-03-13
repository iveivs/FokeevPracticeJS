'use strict';

// ДЕСТРУКТУРИЗАЦИЯ МАССИВОВ

// const arr = [
//     "apple",
//     "orange",
//     "lemon",
//     "tee"
// ];

// let [fruitOne, fruitTwo , fruitThree] = arr;

// console.log(fruitOne);
// console.log(fruitThree);

// [fruitOne, fruitThree] = [fruitThree, fruitOne];


// console.log(fruitOne);
// console.log(fruitThree);

// - - - - - - - - - - -


// ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ


// const obj = {
//     fruits: {
//         apple: "apple",
//         orange: "orange",
//         lemon: "lemon"
//     },
//     drinks: {
//         juice: "juice",
//         tea: "tea",
//         coctail: "coctail"
//     },
// };

// const {lemon, apple} = obj.fruits;

// вариант записи:
// const {
//     fruits: {lemon, apple}} = obj;

// ещё вариант записи:

// const {
//     fruits: {lemon: fruitOne, apple: fruitTwo}} = obj;

// console.log(fruitOne,);
// console.log(fruitTwo);

// function coctailMixer({fruits: {apple, orange}, drinks: {juice}}) {
//     console.log(`Вы приготовили ${apple} ${juice} и ${orange} ${juice}`);
// }

// coctailMixer(obj)

// - - - - - - - - - - -

// ОПЕРАТОР spread

// const str = "Hello";
// // console.log(...str);


// const obj = {
//     fruits: ["apple", "orange", "lemon" ],
//     drinks: ["juice", "tea", "coctail"],
//     };
// // console.log(...obj.fruits);

// const newFruit = [...obj.fruits];
// // console.log(newFruit);

// const bigArr = [...obj.drinks, ...str, "world", ...obj.fruits]
// // console.log(bigArr);

// function coctailMixer2(drink, arg1, arg2) {
//     console.log(`Your choise is ${drink} from ${arg1} and ${arg2}`);
// }
// coctailMixer2("tea", ...obj.fruits)

// - - - - - - - - - - -

// ОПЕРАТОР rest 

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(b);
// console.log(others);
// console.log(a, b, others);

// // - - - 

// const obj = {
//     fruits: ["apple", "orange", "lemon" ],
//     drinks: ["juice", "tea", "coctail"],
//     food: {
//         soup: "borsh",
//         pasta: "spagetti",
//     },
// };

// const {fruits, ...others2} = obj;
// console.log(fruits);
// console.log(others2);

// // - - - 

// function calc(...number) {
//     let sum = 0;
//     for(let value of number) {
//         sum +=value
//     }
//     console.log(sum);
// }

// calc(4,3,5,6,8);


// --------------------------

// структура данных SET

// const names = [
//     "Dmitr",
//     "Kolya",
//     "Vasya",
//     "Dmitr"
// ]

// const uniqNames = new Set(names);
// console.log(uniqNames);


// --------------------------

// СТРУКТУРА ДАННЫХ MAP

// const hotel = new Map();
// hotel.set('categories', ['std', 'eco', 'suit', "lux"]);
// hotel.set(true, "Мы Открыты");
// hotel.set(false, "Мы закрыты");
// // console.log(hotel);
// const arr = [2, 3];
// hotel.set(arr, "Это массив")
// // console.log(hotel.get(true));
// console.log(hotel.get(arr));
// console.log(hotel.has(arr));

// --------------------------

// КОНВЕРТАЦИЯ РАЗЛИЧНЫХ СТРУКТУР ДАННЫХ

// const hotel1 = new Map([
//     ['categories', ['std', 'eco', 'suit', "lux"]],
//     [true, "Мы Открыты"],
//     [false, "Мы закрыты"],
// ]);
// console.log(hotel1);

// const obj = {
//     name: 'John',
//     lastName: 'Travolta',
//     age: 30,
// };

// const arrFromObj = Object.entries(obj);
// console.log(arrFromObj);

// const objFromArr = Object.fromEntries(arrFromObj);
// console.log(objFromArr);

// const mapFromArr = new Map(Object.entries(obj));
// console.log(mapFromArr);

// const setFromMap = new Set(hotel1);
// console.log(setFromMap);

// const arrayFromMap = Array.from(hotel1);
// console.log(arrayFromMap);

// for(let [key, value] of hotel1) {
//     console.log(`ключ ${key}, значение ${value}`);
// }

// --------------------------

// Работа со СТРОКАМИ

// const airplane = new String("  TAP Air Tramontana");

// console.log(airplane.indexOf("a"));
// console.log(airplane.lastIndexOf("a"));
// console.log(airplane.indexOf("q"));

// console.log(airplane.slice(4));
// console.log(airplane.slice(4,7));
// console.log(airplane.slice(0, airplane.indexOf(" ")));
// console.log(airplane.slice(airplane.lastIndexOf(" ") + 1));

// const plane = "D430";

// const checkSeat = function(seat) {
//     // const s = seat[0];
//     const s = seat.slice(0, 1);
//     if(s == "A") console.log('Вам повезло, ваше место у окна');
//     else console.log("Вам не повезло, ваше место не у окна");
// };

// checkSeat("A667")

// - - - 

// console.log(airplane.toLocaleLowerCase());
// console.log(airplane.toLocaleUpperCase());

// console.log(airplane.trim());

// - - - - - - - - - 

// const priceRub = "2990р";
// const priceUS = priceRub.slice(0, priceRub.length - 1) / 72 + priceRub.replace('р', '$');
// console.log(priceUS);

// const str = "Привет свет свет свет";
// const correctStr = str.replaceAll('свет', 'Мир');
// console.log(correctStr);

// const flight = 'j7392au';
// console.log(flight.includes('j7'));
// console.log(flight.startsWith('j7'));
// console.log(flight.endsWith('2au'));

// - - - - - - - - - 

// const newNames = 'vasya anna ivan petr maria';

// // const arrFromStr = newNames.split(" ");
// // console.log(arrFromStr);

// // const strFromArray = arrFromStr.join(" ");
// // console.log(strFromArray);

// function capitalNameLetter(strNames) {
//     const arrNames = strNames.split(" ");
//     const newUpperNames = [];
//     for(let n of arrNames) {
//         newUpperNames.push(n[0].toUpperCase() + n.slice(1));
//     }
//     console.log(newUpperNames.join(" "));
// }

// capitalNameLetter(newNames);

// - - - - - - - - - 

// const cardNumber = "6453";
// const cardNumber = String(6453);

const cardNumber = 6453 + "";
console.log(cardNumber.padStart(16, "*"));
console.log(cardNumber.padEnd(16, "*"));
