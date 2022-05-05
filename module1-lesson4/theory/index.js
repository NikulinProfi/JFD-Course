// JavaScript имеет динамическую типизацию

// 1. к строке
const age = 20
console.log('number age:', typeof age)
console.log('string age', typeof String(age)) //янвое преобразование

const updateAge = '1' + 20 // неяввное преобразование
console.log('updateAge', typeof updateAge)

// 2. к числу
const experienceInJavaScript = '5'
console.log('string experienceInJavaScript:', typeof experienceInJavaScript)
console.log(
  'number experienceInJavaScript',
  typeof Number(experienceInJavaScript) //янвое преобразование
)

console.log('experienceInJavaScript', typeof +experienceInJavaScript) // неяввное преобразование

console.log('Hello World', Number('Hello World')) // NaN

// 3. к boolean - всегда true, кроме исключений (null, undefined, NaN, 0, '')

console.log('hello', Boolean('hello'))
console.log('5', Boolean('5'))

//null, undefined, NaN, 0, ''

console.log('null', Boolean(null))
console.log('undefined', Boolean(undefined))

console.log('0', Boolean(0)) //false
console.log('0', Boolean('0')) //true
console.log('', Boolean('')) //false

console.log(Boolean(undefined))
