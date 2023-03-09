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

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a);
console.log(b);
console.log(others);
console.log(a, b, others);

// - - - 

const obj = {
    fruits: ["apple", "orange", "lemon" ],
    drinks: ["juice", "tea", "coctail"],
    food: {
        soup: "borsh",
        pasta: "spagetti",
    },
};

const {fruits, ...others2} = obj;
console.log(fruits);
console.log(others2);

// - - - 

function calc(...number) {
    let sum = 0;
    for(let value of number) {
        sum +=value
    }
    console.log(sum);
}

calc(4,3,5,6,8);
