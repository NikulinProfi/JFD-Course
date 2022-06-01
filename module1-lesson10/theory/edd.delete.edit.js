const student = {
  id: 1,
  programmingLanguage: 'JavaScript',
  hasExperienceInReact: false,
}

// Добавление
student.experience = 6

student.name = 'Dima'
console.log('student', student)

// Удаление
// delete

delete student.hasExperienceInReact
console.log('student', student)

// Изменение значения

student.experience = 12
student.id = 2

console.log('student', student)
