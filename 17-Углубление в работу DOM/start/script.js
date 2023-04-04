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

const nav = document.querySelector(".nav");
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

document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();
  // console.log(e.target);
  if(e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute('href') 
    document.querySelector(id).scrollIntoView({behavior: "smooth"})
  }
});

// Работа табов

const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', function(e) {
  e.preventDefault();
  const clicked = e.target.closest(".operations__tab")
  console.log(clicked);
  if(!clicked) return
  // // или
  // if (clicked) {
  //   clicked.classList.add('operations__tab--active');
  // };
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  tabContent.forEach(content => content.classList.remove('operations__content--active'))

  // console.log(clicked.dataset.tab);
  document
  .querySelector(`.operations__content--${clicked.dataset.tab}`)
  .classList.add('operations__content--active');
});


//Прозрачность навигационного меню
function hover(e, opacity) {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('.nav__logo');

    siblings.forEach(el => {
      if(el != link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  };
}

// nav.addEventListener('mouseover', function(e) {
//   hover(e, 0.5);
// });

// nav.addEventListener('mouseout',function(e) {
//   hover(e, 1);
// });

// Вариант более короткий:

nav.addEventListener('mouseover', hover.bind(0.5));
nav.addEventListener('mouseout', hover.bind(1));

// - - - - - - - - - - -

const navContainer = document.querySelector('.nav')
// Появление меню после прокрутки


// Старый способ:


// const coord = section1.getBoundingClientRect();
// // console.log(coord);

// window.addEventListener('scroll', function () {
//   // console.log(window.scrollY);
//   if(window.scrollY > coord.top) {
//     navContainer.classList.add("sticky");
//   } else {
//     navContainer.classList.remove("sticky");
//   }
// })

// Новый способ:

function callBack(entries) {
  if(!entries[0].isIntersecting) {
    navContainer.classList.add("sticky");
  } else {
    navContainer.classList.remove("sticky");
  }
  
}
const options = {
  threshold: 0,
  rootMargin: "-90px",
};

const observer = new IntersectionObserver(callBack, options);
observer.observe(document.querySelector(".header"));

// Всплытие секций

const allSections = document.querySelectorAll('.section');
function revealSection(entries, observe) {
  if(entries[0].isIntersecting){
    entries[0].target.classList.remove('section--hidden')
    observe.unobserve(entries[0].target)
  }
};

const sectionObserver = new IntersectionObserver(revealSection, {threshold: 0.15});

allSections.forEach(function(section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden')
});

// Слайдер

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');

let currentSlide = 0;
const maxSlides = slides.length;

// slider.style.scale = 0.5;
// slider.style.overflow = "visible";

// slides.forEach(function (slide, i) {
//   slide.style.transform = `translateX(${100 * i}%)`
// });

function goToSlide(slide) {
  slides.forEach(function (sld, i) {
    sld.style.transform = `translateX(${100 * (i-slide)}%)`
  });
}

goToSlide(0)

function nextSlide() {
  if(currentSlide === maxSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++
  }
  goToSlide(currentSlide);
}

function prevSlide() {
  if(currentSlide === 0) {
    currentSlide = maxSlides - 1
  } else {
    currentSlide--;
  }
  
  goToSlide(currentSlide);
}

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);