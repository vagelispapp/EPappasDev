const navToggle = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");

navToggle.addEventListener("click", function () {
  navToggle.classList.toggle("bars-to-x");
  navMenu.classList.toggle("nav_pop");
});
