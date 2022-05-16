const salariesOfDevelopers = [400, 500, 600, 2000, 350]

// Добавление элементов
const newSeniorDeveloperSalary = 5000
salariesOfDevelopers.push(newSeniorDeveloperSalary, 5001, 5002) // push добавление в конец массива
// console.log('salariesOfDevelopers', salariesOfDevelopers)

salariesOfDevelopers.unshift(100, 101, 102, 103, 210) // unshift добавление в начало массива
// console.log('salariesOfDevelopers', salariesOfDevelopers)

// Удаление элементов
const firstRemovedElement = salariesOfDevelopers.shift() // shift удаляет с начала массива

const lastRemovedElements = salariesOfDevelopers.pop() // pop удаляет с конца массива

// console.log('firstRemovedElement', firstRemovedElement)
// console.log('salariesOfDevelopers', salariesOfDevelopers)
// console.log('lastRemovedElements', lastRemovedElements)

// Изменение элементов массива
salariesOfDevelopers[4] = 6000
console.log('salariesOfDevelopers', salariesOfDevelopers)
