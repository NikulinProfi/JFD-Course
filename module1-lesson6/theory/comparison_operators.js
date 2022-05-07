// Операторы сравнения > < >= <= == ===

/*
console.log(5 > 10) // false
console.log(5 < 10) // true
console.log(5 <= 5) // true
console.log(5 >= 6) // false

console.log('==', 100 == 100) // true

// Сравнение строк

console.log('JavaScript' == 'Javascript') // false
console.log('JavaScript' > 'Javascript') // false
console.log('JavaScript' < 'Javascript') // true
console.log('S', 'S'.charCodeAt()) // S 83
console.log('s', 's'.charCodeAt()) // s 115

console.log('javaScript' > 'JavaScript') // true
console.log('J', 'J'.charCodeAt()) // J 74
console.log('j', 'j'.charCodeAt()) // j 106

console.log('Z', 'Z'.charCodeAt()) // Z 90
console.log('z', 'z'.charCodeAt()) // z 122


// == vs ===

// == Сравнивает значение
// === Сравнивает типы

console.log('1' == 1) // true
console.log('1' >= 1) // true
console.log('20' == '20') // true сравнение посимвольно, а не числом
console.log('200' > '21') // false код от символа 1, больше, чем код от символа 0
console.log(true == 1) // true   Number(true) = 1
console.log(false == 0) // false  Number(false) = 0
*/

// ===
console.log('1' === 1) // false 2 разных типа
console.log(1 === 1) // true одинаковый тип данных
console.log(true === 1) // false разные типы данных
