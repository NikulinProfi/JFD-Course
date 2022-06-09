// Как получать значение класса
const tasksWrapper = document.querySelector('.tasks__wrapper')
console.log(tasksWrapper.className) // tasks__wrapper

// Обновление класса tasks__wrapper

// tasksWrapper.className = 'tasks__wrapper_1'
console.log(tasksWrapper.className) // tasks__wrapper_1

// получение значения id
const tasksBlock = document.querySelector('#tasks') // # - когда id
console.log(tasksBlock.id) // tasks

// изменение значения id
// tasksBlock.id = 'new_tasks'

// Получим и изменим кнопку button
const submitButton = document.querySelector('.create-task-block__button')
console.log(submitButton.innerText) // Создать
console.log(submitButton.textContent) //  Создать

submitButton.textContent = 'Создать новую задачу' // textContent не обраюатывает теги, например жирный <b></b>, а innerHTML обрабатывает
submitButton.innerHTML = '<b>Создать новую задачу</b>'

// innerHTML - получить весь HTML

console.log(tasksBlock.innerHTML)
// Убираем все HTML элементы внутри tasksBlock
// tasksBlock.innerHTML = '<b>tasksBlock</b>'

// children - свойство. Доступно ТОЛЬКО для ЧТЕНИЯ

const createTaskForm = document.querySelector('.create-task-block') // свойство, не забываем ставить точку
console.log(createTaskForm.children)
createTaskForm.children = null // ничего не произойдет

// data - атрибуты, например data-button-id="1" , эти атрибуты мы можем получать и изменять

// получим первую кнопку навигации по class name main-navigation__button-item

const firstNavButton = document.querySelector('.main-navigation__button-item')
console.log(firstNavButton.dataset) // DOMStringMap {buttonId: '1'}

console.log(firstNavButton.dataset.buttonId) // 1

// изменим data - атрибуты
firstNavButton.dataset.buttonId = '10' // в html поменялся id с 1 на 10

// style - можем получать и изменять конкретные стили

console.log(firstNavButton.style) // CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}

// сделаем текст жирным
firstNavButton.style.fontWeight = 'bold'

//добавим выделение к кнопке
firstNavButton.style.boxShadow = 'inset 0 0 0 3px #fff'
