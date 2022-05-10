// Цикл while

// let i = 0
// while (i < 3) {
//   let newStudent = prompt('Введите имя нового студента!')
//   newStudent = newStudent.trim()
//   console.log(newStudent)
//   i++
//   alert(`Добро пожаловать, ${newStudent}!`)
// }

// Цикл do - while

let i = 0
do {
  let newStudent = prompt('Введите имя нового студента!')
  newStudent = newStudent.trim()
  console.log(newStudent)
  i++
  alert(`Добро пожаловать, ${newStudent}!`)
} while (i < 3)
