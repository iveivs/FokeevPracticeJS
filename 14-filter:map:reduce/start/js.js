"use strict";
/*
ЗАДАЧИ:

Создайте функцию calcAverageHumanAge которая будет принимать в себя массив с годами собак и будет делать с этими данными следующее:

1. Пересчитайте собачий возраст, в возраст человека по формуле: 
если возраст собаки меньше или равен 2 годам, то человеческий возраст = 2 * возраст собаки. Если собаке больше 2-х лет то человеческий возраст = 16 + собачий возраст * 4

2.Вычислите всех собак которым меньше 18 человеческих лет.

3. Вычислите среднее значение возраста всех взрослых собак в пересчете на человеческие года.

4.Запустите функцию для двух массивов данных:

dogs1 = [5, 2, 4, 1, 15, 8, 3]
dogs2 = [16, 6, 10, 5, 6, 1, 4]


*/
const dogs1 = [5, 2, 4, 1, 15, 8, 3]
const dogs2 = [16, 6, 10, 5, 6, 1, 4]

function calcAverageHumanAge(dogsAgeArr) {
    const dogAgeToHuman = dogsAgeArr.map(function(age){
        return age <= 2 ? 2 * age : 16 + age * 4;
    });
    console.log(dogAgeToHuman);
    const filtredDogAge = dogAgeToHuman.filter(function(val){
        return val >= 18;
    });
    console.log(filtredDogAge);
    const averageDogAge = filtredDogAge.reduce(function(acc, age){
        // return accum += val;
        return acc + age;
    }) / filtredDogAge.length;
    console.log(averageDogAge);
}
calcAverageHumanAge([...dogs1, ...dogs2]);