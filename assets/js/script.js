'use strict';

/**
 * add event on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

/* MOBILE NAVBAR */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

navToggler.addEventListener("click", toggleNav);

const navClose = () => {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElements(navLinks, "click", navClose);

document.addEventListener("click", function(event) {
  if (!navbar.contains(event.target) && !navToggler.contains(event.target)) {
    navClose();
  }
});

/**
 * HEADER
 * header will be active after scrolled down to 100px of screen
 */

const header = document.querySelector("[data-header]");

const activeEl = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", activeEl);

/* Button hover ripple effect */

const buttons = document.querySelectorAll("[data-btn]");

const buttonHoverRipple = function (event) {
  this.style.setProperty("--top", `${event.offsetY}px`);
  this.style.setProperty("--left", `${event.offsetX}px`);
}

addEventOnElements(buttons, "mousemove", buttonHoverRipple);

/* Scroll reveal */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    const isElementInsideWindow = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1;

    if (isElementInsideWindow) {
      revealElements[i].classList.add("revealed");
    }
  }
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);

/* Custom cursor */

const cursor = document.querySelector("[data-cursor]");
const hoverElements = [...document.querySelectorAll("a"), ...document.querySelectorAll("button")];

const cursorMove = function (event) {
  cursor.style.top = `${event.clientY}px`;
  cursor.style.left = `${event.clientX}px`;
}

window.addEventListener("mousemove", cursorMove);

addEventOnElements(hoverElements, "mouseover", function () {
  cursor.classList.add("hovered");
});

addEventOnElements(hoverElements, "mouseout", function () {
  cursor.classList.remove("hovered");
});

/**
 * Role Descriptions
 */

window.addEventListener("DOMContentLoaded", function () {
  toggleAnswers();
});

function toggleAnswers() {
  const buttons = document.querySelectorAll(".desc-link");
  const answers = document.querySelectorAll(".role-desc");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.parentNode.nextElementSibling;
      answer.classList.toggle("show-text");
      button.classList.toggle("show-text");

      // hide all other answers
      answers.forEach(otherAnswer => {
        if (otherAnswer !== answer) {
          otherAnswer.classList.remove("show-text");
          otherAnswer.previousElementSibling.querySelector(".desc-link").classList.remove("show-text");
        }
      });
    });
  });
}