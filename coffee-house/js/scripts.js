const page = document.getElementById('page-body');
const burger = document.getElementById('burger');
const navMain = document.getElementById('main-nav');
const navMenu = document.getElementById('menu-link');
let navLinks = document.getElementsByClassName('text-burger-link');

// Открыть/Закрыть меню-бургер
burger.addEventListener("click", function() {
  // Закрыть если открыто
  if (burger.classList.contains('burger__open')) {
    burgerMenuClose();
  }
  // Открыть
  else {
    burgerMenuOpen();
  }
});

// Закрыть меню-бургер при переходе по ссылкам
for (let navLink of navLinks) {
  navLink.addEventListener("click", burgerMenuClose);
}

function burgerMenuOpen () {
  burger.classList.add('burger__open');
  navMain.classList.add('active');
  navMenu.classList.add('active');
  page.classList.add('lock');
}

function burgerMenuClose () {
  burger.classList.remove('burger__open');
  navMain.classList.remove('active');
  navMenu.classList.remove('active');
  page.classList.remove('lock');
}