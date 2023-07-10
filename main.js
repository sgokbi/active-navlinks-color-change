"use strict";

const navLinks = document.querySelectorAll(".nav-links li a");
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".active")?.classList.remove("active");
    // link.classList.toggle("active");
    link.classList.add("active");
  });
});
