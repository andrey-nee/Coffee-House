const page = document.getElementById('page-body');
const burger = document.getElementById('burger');
const navMain = document.getElementById('main-nav');
const navMenu = document.getElementById('menu-link');

burger.addEventListener("click", burgerMenu);

function burgerMenu () {
  burger.classList.toggle('burger__open');
  navMain.classList.toggle('active');
  navMenu.classList.toggle('active');
  page.classList.toggle('lock');
}