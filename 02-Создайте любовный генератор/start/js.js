const firstName = prompt("Введите первое имя:"),
    secondName = prompt("Введите второе имя:");

const randomNum = Math.floor(Math.random() * 100);
// alert(`Результат совместимости: ${firstName} и ${secondName} = ${randomNum}`);

if (randomNum < 33 && firstName !== null && secondName !== null && firstName !== '' && secondName !== '') {
    alert(`Результат совместимости имён: ${firstName} и ${secondName}, слишком низкий`);
}else if (randomNum >= 33 && randomNum <= 66 && firstName !== null && secondName !== null && firstName !== '' && secondName !== '') {
    alert(`Результат совместимости имён: ${firstName} и ${secondName}, хорошоий`);
}else if (randomNum >= 66 && randomNum <= 100 && firstName !== null && secondName !== null && firstName !== '' && secondName !== '') {
    alert(`Результат совместимости имён: ${firstName} и ${secondName}, отличный`)
}else {
    alert(`TOTAL ERROR ^d00010IOJJ введите корректные данные`)
}