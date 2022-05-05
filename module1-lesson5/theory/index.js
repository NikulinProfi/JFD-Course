const name1 = 'Dima'
const name2 = 'Dima'
const name3 = `Dima`

console.log(name1)
console.log(name2)
console.log(name3)

const name = 'Dima'
const profession = 'JavaScript-разрабочик'

// const allInfo = name + ' ' + profession
const allInfo = `${name} ${profession}`
console.log(allInfo)

// Длина строки и получение символов из строки

const programmingLanguage = 'JavaScript'
console.log('length', programmingLanguage.length) // .length получение длины строки
console.log('1st', programmingLanguage[0]) // получение символов из строки

/* Нельзя поменять букву таким способом
programmingLanguage[0] = 'H'
console.log('programmingLanguage[0]', programmingLanguage) 
*/
