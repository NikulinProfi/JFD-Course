const answer1 = 4
const answer2 = 4
const answer3 = 1
const answer4 = 12
const answer5 = 6

let correctAnswers = 0
let incorrectAnswers = 0

const question1 = Number(prompt('Сколько будет 2 + 2?').trim())
if (question1 === answer1) {
  correctAnswers++
  alert('Ответ Верный')
} else {
  incorrectAnswers++
  alert('Ответ Неверный')
}
const question2 = Number(prompt('Сколько будет 2 * 2?').trim())
if (question2 === answer2) {
  correctAnswers++
  alert('Ответ Верный')
} else {
  incorrectAnswers++
  alert('Ответ Неверный')
}
const question3 = Number(
  prompt(
    'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'
  ).trim()
)
if (question3 === answer3) {
  correctAnswers++
  alert('Ответ Верный')
} else {
  incorrectAnswers++
  alert('Ответ Неверный')
}
const question4 = Number(
  prompt(
    'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?'
  ).trim()
)
if (question4 === answer4) {
  correctAnswers++
  alert('Ответ Верный')
} else {
  incorrectAnswers++
  alert('Ответ Неверный')
}
const question5 = Number(prompt('Сколько будет 2 + 2 * 2?').trim())
if (question5 === answer5) {
  correctAnswers++
  alert('Ответ Верный')
} else {
  incorrectAnswers++
  alert('Ответ Неверный')
}

alert(
  `Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`
)
