'use strict';
var navMain = document.querySelector('.main-nav__list');
var navBtnToggle = document.querySelector('.main-nav__btn-toggle');
var overlay = document.querySelector('.overlay');

navMain.classList.remove('main-nav__list--opened');

navBtnToggle.addEventListener('click', function() {
  event.preventDefault();
  navMain.classList.toggle('main-nav__list--opened');
  overlay.classList.toggle("overlay--on");
});
overlay.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove('overlay--on');
  navMain.classList.remove('main-nav__list--opened');
});