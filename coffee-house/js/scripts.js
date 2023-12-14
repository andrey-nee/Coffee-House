const page = document.getElementById('page-body');
const menu = document.querySelector('.menu__container');


// Открыть/Закрыть меню-бургер
const burger = document.getElementById('burger');
const navMain = document.getElementById('main-nav');
const navMenu = document.getElementById('menu-link');
const navLinks = document.getElementsByClassName('text-burger-link');
burger.addEventListener('click', function() {
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
  navLink.addEventListener('click', burgerMenuClose);
}

// Считываем JSON
import products from './products.json' assert {type: "json"};

// Фильтр карточек по тегам
const productsCoffee = products.filter(item => item.category === "coffee");
const productsTea = products.filter(item => item.category === "tea");
const productsDessert = products.filter(item => item.category === "dessert");
document.addEventListener('DOMContentLoaded', function(event) {
  // Показываем карточки кофе при загрузке страницы
  showProducts(productsCoffee);
  
  let menuFilter = document.querySelector('.menu-page__filter');
  let filterTag = menuFilter.querySelectorAll('.tag');
  
  // Фильтруем по тегам (coffee/tea/dessert)
  menuFilter.addEventListener('click', function(event) {
    let target = event.target.closest('.tag');
    if (target.classList.contains('tag') && !target.classList.contains('tag__current')) {
      for (let i = 0; i < filterTag.length; i++) {
        filterTag[i].classList.remove('tag__current');
        filterTag[i].querySelector('.tag__icon').classList.remove('tag__icon__current');
        filterTag[i].querySelector('.tag__text').classList.remove('tag__text__current');
      }
      target.classList.add('tag__current')
      target.querySelector('.tag__icon').classList.add('tag__icon__current')
      target.querySelector('.tag__text').classList.add('tag__text__current')

      // Добавляем карточки по фильтру
      if (target.classList.contains('menu-page__tag__coffee')) {
        showProducts(productsCoffee);
      } else if (target.classList.contains('menu-page__tag__tea')) {
        showProducts(productsTea);
      } else if (target.classList.contains('menu-page__tag__dessert')) {
        showProducts(productsDessert);
      }
    }
  })
});


// Добавление карточек в разметку из JSON
function showProducts(filter) {
  menu.innerHTML = '';
  filter.forEach(element => {
    const card = `
    <article class="menu__item menu-item">
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
};

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