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

  const div1 = document.createElement('div')
  div1.className = 'task-item'
  div1.dataset.taskId = obj.id

  const div2 = document.createElement('div')
  div2.className = 'task-item__main-container'

  const div3 = document.createElement('div')
  div3.className = 'task-item__main-content'

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

  form.append(label, input)
  div3.append(form, span)
  div2.append(div3, button)
  div1.append(div2)
  tasksList.append(div1)
}

tasks.forEach((el) => {
  getTasks(el)
})
