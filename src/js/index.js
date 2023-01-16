'use strict';

import Typed from 'typed.js';

const typed = new Typed('.multi-text', {
  strings: ['John Aries', 'a Coder', 'a Developer'],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500,
});

// console.log('Hello World!');

const header = document.querySelector('header');
const menuToggle = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const darkmode = document.querySelector('.darkmode-toggle');

// Scrolling

window.onscroll = () => {
  navbar.classList.remove('active');
};

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

// Navbar
menuToggle.addEventListener('click', function () {
  navbar.classList.toggle('active');
});

// Darkmode
darkmode.onclick = () =>
  darkmode.classList.contains('bx-moon')
    ? darkmode.classList.replace('bx-moon', 'bx-sun') &&
      document.body.classList.add('active')
    : darkmode.classList.replace('bx-sun', 'bx-moon') &&
      document.body.classList.remove('active');
