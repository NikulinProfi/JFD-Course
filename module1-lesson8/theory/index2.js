// Function Expression, отличие от Function Declaration, что не можем вызвать до определения функции
// let, var, const

// sum(5, 10) // error

// const sum = function (a, b) {
//   console.log(a + b)
// }

// sum(5, 10)

// arrow Function Expression

// const name = () => {

// }

// const sum = (a, b) => {
//   return a + b
// } // полная запись

// const sum = (a, b) => a + b // короткая запись, если функция состоит из 1 строчки

// const sum = (a, b) => {
//   console.log(a, b)
//   return a + b
// }

// const result = sum(10, 11)
// console.log('result', result)

// const addFive = (a) => a + 5 // если 1 параметр, то можно не указывать скобки
// // const addFive = a => a + 5 // ПРИМЕР

// const result = addFive(10)
// console.log(result)

function multiply(a, b, callback) {
  const result = a * b
  callback(result)
}

multiply(5, 2, (multiplyResult) => {
  console.log('multiplyResult', multiplyResult)
})
