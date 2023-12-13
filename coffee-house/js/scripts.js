const page = document.getElementById('page-body');

const burger = document.getElementById('burger');
const navMain = document.getElementById('main-nav');
const navMenu = document.getElementById('menu-link');
let navLinks = document.getElementsByClassName('text-burger-link');

const menu = document.querySelector('.menu__container');

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

// Считываем JSON
import products from './products.json' assert {type: "json"};
// console.log(products);

const productsCoffee = products.filter(item => item.category === "coffee");

// Добавляем карточки в разметку из JSON
productsCoffee.forEach(element => {
  const card = `
  <article class="menu__item menu-item menu-item__coffee">
    <div class="menu-item__image">
      <img src="./img/menu/${element.image}" alt="" width="310" height="310">
    </div>
    <div class="menu-item__info">
      <h3 class="menu-item__title text-h3">${element.name}</h3>
      <p class="menu-item__description text-medium">${element.description}</p>
      <p class="menu-item__price text-h3">$${element.price}</p>
    </div>
  </article>
  `;
  menu.innerHTML += card;
});

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