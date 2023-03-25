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
