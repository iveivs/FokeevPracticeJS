'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log(window); 

const btnScroll = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector('#section--1');

btnScroll.addEventListener('click', function() {
  // window.scrollTo({
  //   left: section1.getBoundingClientRect().left + window.pageXOffset,
  //   top: section1.getBoundingClientRect().top + window.pageYOffset,
  //   behavior: "smooth",
  // });
  section1.scrollIntoView({behavior: "smooth"});
});
console.log(btnScroll.getBoundingClientRect());



// Остановка события
// const h1 = document.querySelector('h1');

// function alertH1() {
//   alert("Hello");
// };
// h1.addEventListener("mouseenter", alertH1);

// setTimeout(function() {
//   h1.removeEventListener("mouseenter", alertH1);
// }, 4000);


// ОТМЕНА И ВСПЛЫТИЕ СОБЫТИЙ

// function randomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// };

// function randomColor() {
//   return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`
// };
// console.log(randomColor());

// const nav = document.querySelector(".nav");
// const navLinks = document.querySelector(".nav__links");
// const link = document.querySelector(".nav__link");

// nav.addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log(e.target);
//   console.log(e.currentTarget === this);
// });

// navLinks.addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
// });

// link.addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   // e.stopPropagation();
// });

// - - - - - - - -

// Плавный скрол для каждого елемента:
// document.querySelectorAll(".nav__link").forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior: "smooth"})
//   });
// });
