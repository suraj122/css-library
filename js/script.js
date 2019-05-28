"use strict";
const navSlide = () => {
  const toggle = document.querySelector(".toggle");
  const navMenu = document.querySelector(".nav__menu");
  const navLink = document.querySelectorAll(".nav__link");

  toggle.addEventListener("click", () => {
    // Toogle Navigation Menu
    navMenu.classList.toggle("nav__menu-active");

    // Animate Navigation links
    navLink.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 +
          0.7}s`;
      }
    });
    toggle.classList.toggle("toggle-cross");
  });
};
navSlide();
