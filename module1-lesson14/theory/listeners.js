// Работа с навигацией
// const firstNavButton = document.querySelector('.main-navigation__button-item')
// firstNavButton.addEventListener('click', (event) => {
//   console.log('click') // после нажатия на "Задачи на сегодня", выводит click
//   console.log(event.target) // выводит таргет, на который кликаем
//   //Чтобы изменить стиль кнопки, добавим новый класс
//   // const target = event.target
//   const { target } = event // эквивалентно const target = event.target
//   // но лучше использовать const { target } = event
//   target.classList.add('main-navigation__button-item_selected')
// })

const allNavButtons = document.querySelectorAll('.main-navigation__button-item')
// через ForEach нужно пробежаться по каждой кнопке и добавить addEventListener
// на каждую кнопку нужно повесить обработчик события click
allNavButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // Сначала удаляем классы, а потом добавляем

    // когда кликаем по кнопке, нужно пробежаться по каждой кнопке и удалить у нее класс main-navigation__button-item_selected
    allNavButtons.forEach((button) => {
      button.classList.remove('main-navigation__button-item_selected')
    })

    // обработчик и функция
    const { target } = event // через event получаем target элемент
    target.classList.add('main-navigation__button-item_selected') // добавим новый класс, который будет добавлять белую тень
  })
})

// submit
// сначала получим форму

const crateTaskForm = document.querySelector('.create-task-block')
// повесим обработчик событий
crateTaskForm.addEventListener('submit', (event) => {
  console.log(event)
  event.preventDefault() // чтобы не перезагружалась форма

  // сейчас сделаем, что при отправке формы, будем выводить, что отправили в input
  const { target } = event // извлекаем таргет из евент
  // получим taskNameInput
  const taskNameInput = target.taskName
  // получим его значение
  const inputValue = taskNameInput.value
  console.log('inputValue', inputValue)
  // проверка не ввод данных в форму
  if (inputValue) {
    alert(`Вы создали задачу ${inputValue}`)
  } else {
    alert('Введите правильные данные!')
  }

  console.log('taskNameInput', taskNameInput)
})

// keydown(когда нажимаем на клавишу), keyup(когда отпускаем на клавишу)

// keydown
document.addEventListener('keydown', (event) => {
  // console.log(event)
  // извелкем свойство key
  const { key } = event
  // console.log('keydown', key)
  // при нажатии на цифру 1 удаляем 1 задачу
  // снчала получим задачу, которую нужно удалить
  // const taskItemToDelete = document.querySelector(`[data-task-id = "${key}"]`)
  // if (taskItemToDelete) {
  //   const deleteConfirmed = confirm(
  //     'Вы действительно хотите удалить данную задачу?'
  //   )
  //   // если пользователь нажмет да, то удаляем
  //   if (deleteConfirmed) {
  //     taskItemToDelete.remove()
  //   }
  // }
})

// keyup

document.addEventListener('keyup', (event) => {
  const { key } = event
  // console.log('keyup', key)

  // сделаем, что при отмпускании 1, будет удаляться задача
  const taskItemToDelete = document.querySelector(`[data-task-id = "${key}"]`)
  if (taskItemToDelete) {
    taskItemToDelete.remove()
  }
})

// mouseover - мышка находится над каким-то элементом

const createTooltip = (text) => {
  const tooltip = document.createElement('span') // создали тултип
  tooltip.textContent = text // присвоим текст
  tooltip.className = 'tooltip' // укажем класс

  return tooltip // возвращаем конечный html элемент
}

document.addEventListener('mouseover', (event) => {
  // console.log(event)
  const { target } = event
  // console.log(target)
  // проверим, находится ли мышка над кнопкой удалить
  const isOverDeleteButton = target.className.includes(
    'task-item__delete-button'
  ) // если className включает какой-то класс, то кнопка находится над кнопкой удалить
  if (isOverDeleteButton) {
    console.log('success')
  }
  // нужно получить задачу, сам элемент задачи task-item и извлекать значения из него в data-task-id
  // используем .closest() - ищем ближайшего родителя
  const taskItemHTML = target.closest('.task-item')
  // извлекаем значение из data-task-id
  const taskId = taskItemHTML?.dataset.taskId // используем опциональную цепочку, т.к. taskItemHTML может быть null
  if (taskId) {
    const tooltipHTML = createTooltip(`Удалить задачу по номером ${taskId}?`)
    target.append(tooltipHTML)
  }
})

// mouseout

document.addEventListener('mouseout', (event) => {
  // target это тот элемент, с которого увели мышку
  const { target } = event
  // теперь нам надо отслеживать, увели мы мышку с нашей кнопки удалить
  const isOutFromDeleteButton = target.className.includes(
    'task-item__delete-button'
  )
  if (isOutFromDeleteButton) {
    const tooltip = document.querySelector('.tooltip')
    if (tooltip) {
      tooltip.remove()
    }
  }
})

// mousemove

// document.addEventListener('mousemove', (event) => {
//   console.log(event)
// })

// contextmenu

document.addEventListener('contextmenu', (event) => {
  console.log(event)
  event.preventDefault() // отменили открытие контекстного меню по умолчанию
})

// change (срабатывает, когда убираем фокус с input), input (когжа вводим данные)

// повесим обработчик события change на наш input
// сначала получим input

// создадим функцию для проверки input на валидацию

const checkTaskNameInputOnValidation = (value) => {
  if (!value || value.includes('@')) {
    return false // если value не существует или содержит значек собаки
  }
  return true
}

const createTaskBlock = document.querySelector('.create-task-block')
const taskNameInput = createTaskBlock.querySelector('.create-task-block__input')

// вешаем обработчик события
taskNameInput.addEventListener('input', (event) => {
  // console.log(event)
  const { target } = event
  const { value } = target
  console.log(value)
  // проверим наше значение на валидность
  const isValid = checkTaskNameInputOnValidation(value)
  const messageBlockFromDOM = document.querySelector('.error-message-block')

  if (!isValid) {
    // создадим элемент, где класс ошибка
    const newMessageBlock = document.createElement('span')
    // для newMessageBlock присвоим класс
    newMessageBlock.className = 'error-message-block'
    // передадим текст ошибки
    newMessageBlock.textContent =
      'Ошибка! Текст для задачи не должен быть пустым и не должен содержать символ "@"'

    // нужно поместить ошибку свнуть нашей формы, чтобы стоялп после button
    createTaskBlock.append(newMessageBlock)
  } else if (isValid && messageBlockFromDOM) {
    messageBlockFromDOM.remove()
  }

  // console.log(value)
})
