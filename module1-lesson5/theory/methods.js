// toUpperCase(преобразует все символы строчки в большие символы), toLowerCase(преобразует все символы строчки в маленькие символы)

const animal = 'Lion'
console.log('upper', animal.toUpperCase()) // upper LION
console.log('lower', animal.toLowerCase()) // lower lion

console.log('animal', animal)

// Найти символы в строчке - indexOf, includes(есть или нет, true or false)
const text = 'Мой любимый язык программирования JavaScript'
console.log('indexOf', text.indexOf('о')) // indexOf 1
// если указать несуществующее значние, то получим -1
console.log('includes', text.includes('JavaScript')) // includes true

// Обрезка стоки - slice, substring
// const programmingLanguage = 'JavaScript'
// console.log('slice', programmingLanguage.slice(1, 5)) // строка будет обрезана с 1 индекса и заканчивая 5
// console.log('substring', programmingLanguage.substring(1, 5))

// Замена символов в строке - replace, replaseAll
const programmingLanguage = 'JavaScript'
console.log('replace', programmingLanguage.replace('a', 'A')) // replace Java
console.log('replace', programmingLanguage.replaceAll('a', 'A'))

// repeat - повтор строчки несколько раз
const helloText = 'hello'
console.log(helloText.repeat(3)) // hellohellohello

// trim - убирает лишние пробелы
const nameOfUser = prompt('Как Вас зовут?')
console.log('nameOfUser', nameOfUser.trim())

// let str1 = 'Hello\nWorld'
// console.log(str1)

// const text3 = "'JavaScript' - очень популярный язык программирования."
// console.log(text3)
