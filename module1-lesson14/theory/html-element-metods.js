// Сейчас научимся
// 1. Создавать элементы
// 2. Добавлять их в DOM
// 3. Удалять элементы
// 4. Добавим динамики

// 1. Создавать элементы
// CreateElement - метод создает HTML элементы
/* {<a
        class="main-navigation__button-item"
        href="#tasks_later"
        data-button-id="3"
      >
        Задачи на Потом
      </a>} */ // ШАБЛОН

const newNavButton = document.createElement('a')
// теперь добавим ему класс и атрбуты
newNavButton.className = 'main-navigation__button-item'
newNavButton.href = '#tasks_expired'
newNavButton.dataset.buttonId = '4'
newNavButton.textContent = 'Просроченные задачи'
console.log(newNavButton) // путой тег <a></a>

// 2.  Добавлять их в DOM
// append(в конец), prepend(в начало)

// сначала получим элемент main-navigation
const mainNavigation = document.querySelector('.main-navigation')
mainNavigation.append(newNavButton)
// console.log(mainNavigation)

mainNavigation.insertAdjacentElement('afterbegin', newNavButton)
// console.log(mainNavigation)

// Удаление элементов из дома
// remove

// mainNavigation.remove() // просто написать элемент для удаления и вызвать метод remove

// closest - похож на querySelector?
// ищет ближайший родительский элемент, либо тот элемент, который стоит перед точкой
// task-item__text

const taskItemText = document.querySelector('.task-item__text')
console.log('taskItemText', taskItemText)

// ищем task_item - ближайший родительский элемент
const taskItem = taskItemText.closest('.task-item__text')
console.log('taskItem', taskItem) // получили span

// свойство classList иметте методы; add, remove, toogle(объединяет add и remove)
// получим первую кнопку навигации

const firstNavigationButton = document.querySelector(
  '.main-navigation__button-item'
)
firstNavigationButton.classList.add('main-navigation__button-item_selected')

// удалим
firstNavigationButton.classList.remove('main-navigation__button-item_selected')

firstNavigationButton.classList.toggle('main-navigation__button-item_selected') // добавил класс
firstNavigationButton.classList.toggle('main-navigation__button-item_selected') // увидел, что класс уже есть, поэтому удалил
firstNavigationButton.classList.toggle('main-navigation__button-item_selected')

// Работа с атрибутами (hasAttribute, getAttribute, removeAttribute, setAttribute)
// Выберем какой-то элемент в html, например у нас есть imput в form, выберем его по классу create-task-block__input

const createTaskImput = document.querySelector('.create-task-block__input')
createTaskImput.hasAttribute('type') // проверяет, существует атрибут или нет
console.log(createTaskImput.hasAttribute('type')) // true
console.log(createTaskImput.hasAttribute('type_1')) // false
console.log(createTaskImput.getAttribute('value')) // Посмотреть урок по JavaScript
// getAttribute - получение значения атрибута

createTaskImput.removeAttribute('placeholder') // удаляет
createTaskImput.setAttribute('placeholder', 'Создайте новую задачу')
