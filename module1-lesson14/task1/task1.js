// через innerHTML

// document.body.innerHTML =
//   '<form class=".create-user-form"> <label>Имя <input type="text" name="userName" placeholder="Введите ваше имя"> </label><label>Пароль <input type="password" name="password" placeholder="Придумайте Пароль"></label><button type="submit">Подтвердить</button></form>'

// console.log(form)

// через document.createElement()

const newForm = document.createElement('form')
const newLabel = document.createElement('label')
const newInput = document.createElement('input')
const newLabel2 = document.createElement('label')
const newInput2 = document.createElement('input')
const newButton = document.createElement('button')

function isNewLabel(type, name, addToDom) {
  type.textContent = name
  addToDom.append(type)
}

function isNewInput(newInput, type, name, placeholder, addToDom) {
  newInput.type = type
  newInput.name = name
  newInput.placeholder = placeholder
  addToDom.append(newInput)
}
function isNewButton(button, type, textContent, addToDom) {
  button.type = type
  button.textContent = textContent
  addToDom.append(button)
}
newForm.className = 'create-user-form'

document.body.append(newForm)

isNewLabel(newLabel, 'Имя', newForm)
isNewInput(newInput, 'text', 'userName', 'Введите ваше имя', newLabel)
isNewLabel(newLabel2, 'Пароль', newForm)
isNewInput(newInput2, 'text', 'userName', 'Придумайте Пароль', newLabel2)
isNewButton(newButton, 'submit', 'Подтвердить', newForm)
