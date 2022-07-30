const tasks = [
  {
    id: '1138465078061',
    completed: false,
    text: 'Посмотреть новый урок по JavaScript',
  },
  {
    id: '1138465078062',
    completed: false,
    text: 'Выполнить тест после урока',
  },
  {
    id: '1138465078063',
    completed: false,
    text: 'Выполнить ДЗ после урока',
  },
]
// z = {
//   id: '1138465078061',
//   completed: false,
//   text: 'Посмотреть новый урок по JavaScript',
// }
// console.log(z.id)
// console.log(z.text)
// console.log(z.completed)

function getTasks(obj) {
  const tasksList = document.querySelector('.tasks-list')

  const taskItem1 = document.createElement('div')
  taskItem1.className = 'task-item'
  taskItem1.dataset.taskId = obj.id // для data- атрибута

  const taskItem2 = document.createElement('div')
  taskItem2.className = 'task-item__main-container'

  const taskItem3 = document.createElement('div')
  taskItem3.className = 'task-item__main-content'

  const form = document.createElement('form')
  form.className = 'checkbox-form'

  const input = document.createElement('input')
  input.className = 'checkbox-form__checkbox'
  input.type = 'checkbox'
  input.id = 'task-' + obj.id

  const label = document.createElement('label')
  label.htmlFor = 'task-' + obj.id

  const span = document.createElement('span')
  span.className = 'task-item__text'
  span.textContent = obj.text

  const button = document.createElement('button')
  button.className = 'task-item__delete-button default-button delete-button'
  button.textContent = 'Удалить'
  button.dataset.deleteTaskId = obj.id

  form.append(label, input)
  taskItem3.append(form, span)
  taskItem2.append(taskItem3, button)
  taskItem1.append(taskItem2)
  tasksList.append(taskItem1)
}

tasks.forEach((el) => {
  getTasks(el)
})

const button = document.createElement('button')
// console.log(button)

// submit
// сначала получим форму

const createTaskForm = document.querySelector('.create-task-block')

// повесим обработчик событий

createTaskForm.addEventListener('submit', (event) => {
  const messageBlockFromDOM = document.querySelector('.error-message-block')
  if (messageBlockFromDOM) messageBlockFromDOM.remove()
  event.preventDefault() // чтобы не перезагружалась форма
  const { target } = event // извлекаем таргет из евент
  const { value } = target
  // получим taskNameInput
  const taskNameInput = target.taskName
  // получим его значение
  const inputValue = taskNameInput.value.toLowerCase().trim()

  // создадим функцию для проверки input на валидацию
  const createTaskBlock = document.querySelector('.create-task-block')
  let errorText

  const checkTaskNameInputOnValidation = (value) => {
    const isDoubleElementsInTasks = tasks.some(
      (task) => task.text.toLowerCase() === inputValue
    )
    if (!value) {
      errorText = 'Название задачи не должно быть пустым'
      return false // если value не существует или передает пустую строку
    } else if (isDoubleElementsInTasks) {
      errorText = 'Задача с таким названием уже существует.'
      return false
    }
    return true
  }
  // проверим наше значение на валидность
  const isValid = checkTaskNameInputOnValidation(inputValue)

  if (!isValid) {
    // создадим элемент, где класс ошибка
    const newMessageBlock = document.createElement('span')
    // для newMessageBlock присвоим класс
    newMessageBlock.className = 'error-message-block'
    // передадим текст ошибки
    newMessageBlock.textContent = errorText

    // нужно поместить ошибку свнуть нашей формы, чтобы стоялп после button
    createTaskBlock.append(newMessageBlock)
  }
  if (isValid) {
    const newTask = {
      id: String(Date.now()),
      completed: false,
      text: inputValue,
    }
    tasks.push(newTask)
    getTasks(newTask)
  }
})
// console.log(value)
