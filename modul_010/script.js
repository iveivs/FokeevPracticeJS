"use strict";

const ul  = document.querySelector("ul");
const qeAll = document.querySelectorAll("li");
const getElemAll = document.getElementsByTagName("li");

const newLi = document.createElement('li');
newLi.innerText = "New Elem Menu li";
ul.append(newLi);


for(let i = 0; i < getElemAll.length; i++) {
    getElemAll[i].style.color = "green";
}

for(let i = 0; i < qeAll.length; i++) {
    qeAll[i].style.color = "red";
}