// как получать элементы
// <div id="tasks"> получим по id  с помощью getElementById

const tasksBlock = document.getElementById('tasks')
console.log(tasksBlock)

// Получим все кнопки навигации main-navigation__button-item с помощью getElementsByClassName
const allNavButtons = document.getElementsByClassName(
  'main-navigation__button-item'
)
console.log(allNavButtons)

// Получим все кнопки button с помощью getElementsByTagName

const allButtons = document.getElementsByTagName('button')
console.log(allButtons)

// querySelector - соверменный метод

const taskBlock2 = document.querySelector('#tasks')
console.log(taskBlock2)

// получим основной блок навигации main-navigation (ставим точку, чтобы показать класс)
const mainNavigation = document.querySelector('.main-navigation')
console.log(mainNavigation)

// получение элемента с помощью тега
// querySelector ищет только самое первое совпадение
const firstButton = document.querySelector('button')
console.log('firstButton', firstButton)

// получение элемента с помощью атрибута с помощью [], если нет такой кнопки, то выдаст null
// получим кнопку data-button-id="3"

const thirdNavigationButton = document.querySelector('[data-button-id="3"]')
console.log('thirdNavigationButton', thirdNavigationButton)

// querySelectorAll - выбирает все элементы по данному селектору

const allNavigationButtons = document.querySelectorAll(
  '.main-navigation__button-item'
) // ставим точку, т.к. класс
console.log('allNavigationButtons', allNavigationButtons)
// можем перебирать с помощью forEach()
allNavigationButtons.forEach((button, index) => {
  console.log(index, button)
})

// получим элемент у которого класс create-task-block
const createTaskBlock = document.querySelector('.create-task-block')
const submitButton = createTaskBlock.querySelector('[type="submit"]') // для выбора по атрибуту []
console.log('submitButton', submitButton)
