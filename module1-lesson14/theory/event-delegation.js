// Делегирование событий - это специальная технология в js, которая решает одну из главных проблем для обработчиков событий

// Сначала выберем общего родителя и повесим на него обработчик событий

const allNavigationButtons = document.querySelectorAll(
  '.main-navigation__button-item'
)
const mainNavigation = document.querySelector('.main-navigation')
// теперь повесим обработчик событий
mainNavigation.addEventListener('click', (event) => {
  // console.log('target', event.target)
  console.log('КЛИК НА КОНТЕЙНЕР')
  // сделаем, что если target ссылка, то выполняем действие, если нет, то не выполняем
  // проверяем является ли наша кнопка, кнопкой навигации
  // проверяем target и искать ближайший родительский элемент при помощт closest()
  const isNavButton = event.target.closest('.main-navigation__button-item')
  // console.log(isNavButton)
  // сделаем проверку
  if (isNavButton) {
    // do something
    allNavigationButtons.forEach((navButton) => {
      navButton.classList.remove('main-navigation__button-item_selected')
    })
    event.target.classList.add('main-navigation__button-item_selected')
  }
})

// для наглядности повесим обработчик событий на кнопку "Задачи на сегодня"
// сначала ее получим
const firstNavButton = document.querySelector('.main-navigation__button-item')
firstNavButton.addEventListener('click', (event) => {
  console.log('ПЕРВАЯ КНОПКА', event.target)
})

// повесим обработчик на body

document.body.addEventListener('click', (event) => {
  console.log('КЛИК НА BODY', event.target)
})
