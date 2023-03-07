"use strict";

///////////////////////////////////////

/* 
ЗАДАЧА: 
Создайте игру в угадай число.


Удачи)
/*/



let secretNumber = Math.floor(Math.random() * 20);
console.log(secretNumber);
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    if (guess == '') {
        document.querySelector(".message").textContent = "Вы не ввели число...";
    }else if (guess == secretNumber) {
        document.querySelector(".message").textContent = "Вы угадали !!!"
        document.querySelector("body").style.background = "pink"
        document.querySelector(".number").textContent = guess;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }else if (guess !== secretNumber) {
        if (score > 1) {
            if (guess > secretNumber) {
                document.querySelector(".message").textContent = "Ваше число больше загаданного";
                score--;
                document.querySelector('.score').textContent = score;
            }
            if (guess < secretNumber) {
                document.querySelector(".message").textContent = "Ваше число меньше загаданного";
                score--;
                document.querySelector('.score').textContent = score;
            }
        }
        else {
            document.querySelector('.message').textContent = "Вы проиграли";
            document.querySelector(".score").textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    let secretNumber = Math.floor(Math.random() * 20);
    document.querySelector('.message').textContent = "Начните угадывать";
    document.querySelector('.score').textContent = score;
    document.querySelector("body").style.background = 'black';
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";
    

});
// ----------

// let secretNumber = Math.trunc(Math.random() * 20) +1;
// // const randomNum = Math.floor(Math.random() * 20);
// console.log(secretNumber);
// let score = 20;
// let highScore = 0;
// const displayMessage = function(message) {
//     document.querySelector(".message").textContent = message;
// };

// displayMessage('Начните угадывать...')

// document.querySelector(".check").addEventListener('click', function(){
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess);

//     // Когда не ввели число
//     if (!guess) {
//         // document.querySelector(".message").textContent = "Вы не ввели число...";
//         displayMessage("Вы не ввели число...");
//     }else if (guess === secretNumber) {
//         displayMessage("Вы победили !!!");
//         document.querySelector('body').style.background = "green";
//         document.querySelector(".number").textContent = secretNumber;
//         if (score > highScore) {
//             highScore = score;
//             document.querySelector('.highscore').textContent = highScore;
//         }
//     }else if (guess !== secretNumber) {
//         if (score > 1) {
//             if (guess > secretNumber) {
//                 displayMessage("Ваше число больше, чем загаданное");
//                 score--;
//                 document.querySelector('.score').textContent = score;
//             }
//             if (guess < secretNumber) {
//                 displayMessage("Ваше число меньше, чем загаданное");
//                 score--;
//                 document.querySelector('.score').textContent = score;
//             }
//         }
//         else {
//             displayMessage('Вы проиграли');
//             document.querySelector(".score").textContent = 0;

//         }
//     }
// });

// document.querySelector('.again').addEventListener("click", function() {
//     score = 20
//     let secretNumber = Math.trunc(Math.random() * 20) +1;
//     displayMessage("Начните угадывать...")
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.number').textContent = "?";
//     document.querySelector('.guess').value = "";
//     document.querySelector('body').style.background = "black";

// });
// 


