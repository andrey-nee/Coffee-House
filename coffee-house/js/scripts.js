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
// Показываем карточки при загрузке страницы
document.addEventListener('DOMContentLoaded', function(event) {
  // Проверяем, есть ли на странице блок Menu
  if (menu) {
    // Карточки кофе по умолчанию
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
  }
});

// Кнопка Load More
const buttonLoad = document.querySelector('.menu-page__refresh');
if (buttonLoad) {
  buttonLoad.addEventListener('click', function(event) {
    // Показываем карточки
    showCardsMobile();
    // Прячем кнопку после использования
    buttonLoad.style.display = 'none';
  });
}

// Модальное окно товара
let modalWrapper = document.querySelector('.modal');
let modal = document.querySelector('.modal__container');
// Проверяем, есть ли на странице блок Menu
if (menu) {
  menu.addEventListener('click', function(event) {
    let target = event.target.closest('.menu-item');
    let itemName = target.querySelector('h3').textContent
    showModal(itemName);
    modalOpen();
  });
  
  // Закрываем модалку при клике вне модалки
  modalWrapper.addEventListener('click', function(event) {
    if (event.target === modalWrapper) {
      modalClose();
    }
  });
}


// Генерируем модальное окно товара из JSON
function showModal(itemName) {
  modal.innerHTML = '';
  let product = products.find(item => item.name === itemName);
  const modalContent = `
  <h2 class="modal__title visually-hidden">Modal menu item</h2>
  <article class="modal__item modal-item">
    <div class="modal-item__image">
      <img src="./img/menu/${product.image}" alt="" width="310" height="310">
    </div>
    <form class="modal-item__info">
      <h3 class="modal-item__title text-h3">${product.name}</h3>
      <p class="modal-item__description text-medium">${product.description}</p>
      <div class="modal-item__size">
        <p class="modal-item__subtitle">Size</p>
        <div class="modal-item__labels text-button">
          <label class="modal-item__radio button button__type__option" for="size-s">
            <input class="visually-hidden button__input" type="radio" id="size-s" value="size-s" name="size" checked>
            <span class="button__span">S</span>
            <p class="button__text">${product.sizes.s.size}</p>
            <div class="button__bg"></div>
          </label>
          <label class="modal-item__radio button button__type__option" for="size-m">
            <input class="visually-hidden button__input" type="radio" id="size-m" value="size-m" name="size">
            <span class="button__span">M</span>
            <p class="button__text">${product.sizes.m.size}</p>
            <div class="button__bg"></div>
          </label>
          <label class="modal-item__radio button button__type__option" for="size-l">
            <input class="visually-hidden button__input" type="radio" id="size-l" value="size-l" name="size">
            <span class="button__span">L</span>
            <p class="button__text">${product.sizes.l.size}</p>
            <div class="button__bg"></div>
          </label>
        </div>
      </div>
      <div class="modal-item__additives">
        <p class="modal-item__subtitle">Additives</p>
        <div class="modal-item__labels text-button">
          <label class="modal-item__radio button button__type__option" for="additives-1">
            <input class="visually-hidden button__input" type="checkbox" id="additives-1" value="additives-1" name="additives">
            <span class="button__span">1</span>
            <p class="button__text">${product.additives[0].name}</p>
            <div class="button__bg"></div>
          </label>
          <label class="modal-item__radio button button__type__option" for="additives-2">
            <input class="visually-hidden button__input" type="checkbox" id="additives-2" value="additives-2" name="additives">
            <span class="button__span">2</span>
            <p class="button__text">${product.additives[1].name}</p>
            <div class="button__bg"></div>
          </label>
          <label class="modal-item__radio button button__type__option" for="additives-3">
            <input class="visually-hidden button__input" type="checkbox" id="additives-3" value="additives-3" name="additives">
            <span class="button__span">3</span>
            <p class="button__text">${product.additives[2].name}</p>
            <div class="button__bg"></div>
          </label>
        </div>
      </div>
      <div class="modal-item__total-price text-h3">
        <p class="modal-item__total">Total:</p>
        <p class="modal-item__price">$${product.price}</p>
      </div>
      <p class="modal-item__notice text-caption">The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
      <div class="modal-item__button" id="modal-close">Close</div>
    </form>
  </article>
  `;
  modal.innerHTML = modalContent;
};

function modalOpen() {
  modalWrapper.classList.remove('modal__hidden');
  page.classList.add('lock');

  let modalCloseButton = document.getElementById('modal-close');
  modalCloseButton.addEventListener('click', function() {
    modalClose();
  });
}

function modalClose() {
  modalWrapper.classList.add('modal__hidden');
  page.classList.remove('lock');
}

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
  // Прячем карточки если их больше 4
  hideCardsMobile();
};

function hideCardsMobile() {
  let menuItems = document.querySelectorAll('.menu-item');
  if (menuItems.length > 4) {
    for (let i = 4; i < menuItems.length; i++) {
      menuItems[i].classList.add('menu-item__hidden');
    }
    // Снова показываем кнопку Load More
    buttonLoad.style.display = '';
  }
}

function showCardsMobile() {
  let menuItems = document.querySelectorAll('.menu-item');
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove('menu-item__hidden');
  }
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