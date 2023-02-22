/*
ОПИСАНИЕ ЗАДАНИЯ:

Вам нужно вычислить победителя среди двух команд.
Представим 2 комманды по плаванию - "crazyKats" и "funnyDucks"

Каждая из комманд показала 3 итоговых результата, в трех заплывах. Например crazyKats показали три резултата (30, 60, 43).

Одна из комманд побеждает только в том случае, если среднее количесто очков по итогам трех результатов, минимум в 2 раза больше чем у соперника. Иначе ничья

ЗАДАЧА:

    1. Создайте стрелочную функцию которая будет считать среднее значение, 3-х результатов комманды. Расчитывается по формуле:
    "(res1 + res2 + res3) / 3"

    2. Используйте созданную функцию чтобы получить средний результат 2-х комманд.
    
    3. Создайте функцию с двумя параметрами - которые будут принимать аргументы из результата среднего значения очков комманд. В этой функции создайте вариацию условий, которые помогут определить победителя с помощью if/ else if и вывести сообщение с результатом в консоль.

ДАННЫЕ ДЛЯ ЗАДАЧИ:

    Первый вариант: "crazyKats"- 44, 23, 71  "funnyDucks" 65, 54, 49
    Второй вариант: "crazyKats"- 85, 54, 41  "funnyDucks" 23, 34, 27


*/
let averageRes = (res1, res2, res3) => {
    return (res1 + res2 + res3) / 3
}
const crazyKats = averageRes(44, 23, 71)
const funnyDucks = averageRes(65, 54, 49)
console.log(crazyKats);
console.log(funnyDucks);

const crazyKats2 = averageRes(85, 54, 41)
const funnyDucks2 = averageRes(23, 34, 27)
console.log(crazyKats2);
console.log(funnyDucks2);

let showWiner = (team1, team2) => {
    if ((team1 - team2) > team2) {
        console.log(`Huray ! win team 1, result is ${team1}`);
    }else if ((team2 - team1) > team1) {
        console.log(`Huray ! win team 2, result is ${team2}`);
    }else {
        console.log('No winner');
    }
}

showWiner(crazyKats, funnyDucks)
showWiner(crazyKats2, funnyDucks2)