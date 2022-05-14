const currentDevelopers = ['Maxim', 'Oleg']
const newDevelopers = ['Anton', 'Gleb']

// ['Maxim', 'Oleg', 'Anton', 'Gleb']

// 1 concat - объединение массивов

// const allDevelopers = currentDevelopers.concat(newDevelopers, currentDevelopers)
// console.log('allDevelopers', allDevelopers)

// 2 ... спред оператор - убирает массив и выводит элементы через запятую

// ДО ['Maxim', 'Oleg']
// После 'Maxim', 'Oleg'

// const currentDevelopers = ['Maxim', 'Oleg']
// const newDevelopers = ['Anton', 'Gleb']

const allDevelopers = [...currentDevelopers, ...newDevelopers]
console.log('allDevelopers', allDevelopers)
