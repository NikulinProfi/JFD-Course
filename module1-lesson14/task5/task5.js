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
  // console.log(tasksList)

  const taskItem1 = document.createElement('div')
  taskItem1.className = 'task-item'
  taskItem1.dataset.taskId = obj.id // для data- атрибута
  // console.log(taskItem1)

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
  // console.log(input)

  const label = document.createElement('label')
  label.htmlFor = 'task-' + obj.id
  // console.log(label)

  const span = document.createElement('span')
  span.className = 'task-item__text'
  span.textContent = obj.text
  // console.log(span)

  const button = document.createElement('button')
  button.className = 'task-item__delete-button default-button delete-button'
  button.textContent = 'Удалить'
  button.dataset.deleteTaskId = obj.id
  // console.log(button)

  const modalOverlay = document.createElement('div')
  modalOverlay.className = 'modal-overlay modal-overlay_hidden'
  // console.log(modalOverlay)

  const deleteModal = document.createElement('div')
  deleteModal.className = 'delete-modal'
  // console.log(deleteModal)

  const deleteModalQuestion = document.createElement('h3')
  deleteModalQuestion.className = 'delete-modal__question'
  deleteModalQuestion.textContent =
    'Вы действительно хотите удалить эту задачу?'
  // console.log(deleteModalQuestion)

  const deleteModalButtons = document.createElement('div')
  deleteModalButtons.className = 'delete-modal__buttons'
  // console.log(deleteModalButtons)

  const deleteModalButton1 = document.createElement('button')
  deleteModalButton1.className =
    'delete-modal__button delete-modal__cancel-button'
  deleteModalButton1.textContent = 'Отмена'
  // console.log(deleteModalButton1)

  const deleteModalButton2 = document.createElement('button')
  deleteModalButton2.className =
    'delete-modal__button delete-modal__confirm-button'
  deleteModalButton2.textContent = 'Удалить'
  // console.log(deleteModalButton2)

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
    // console.log(value)
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

const allTasks = document.querySelectorAll('.task-item')
const firstTask = document.querySelector('.task-item')
// console.log(firstTask)
// теперь повесим обработчик событий
firstTask.addEventListener('click', (event) => {
  // console.log('target', event.target)
  // console.log('КЛИК НА КОНТЕЙНЕР')
  const { target } = event
  // const { свойство для получения } = объект
  target.classList.add('.modal-overlay_hidden_selected')
  console.log(target)
  // сделаем, что если target ссылка, то выполняем действие, если нет, то не выполняем
  // проверяем является ли наша кнопка, кнопкой навигации
  // проверяем target и искать ближайший родительский элемент при помощт closest()

  const modalOverlay = event.target.closest('.modal-overlay_hidden')
  // console.log(modalOverlay)
  // // console.log(isNavButton)
  // // сделаем проверку
  // if (modalOverlay) {
  //   // do something
  //   allTasks.forEach((firstTask) => {
  //     firstTask.classList.remove('modal-overlay_hidden')
  //   })
  //   event.target.classList.add('modal-overlay_hidden')
  // }
  // if (modalOverlay) {
  // }
})
