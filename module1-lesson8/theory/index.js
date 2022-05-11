// Function Declaration

// function name (...param) {}

/* sayHello()

function sayHello() {
  console.log('Hello, User')
}
 sayHello()
 sayHello()
 sayHello()



function sum(a, b, callback) {
  const result = a + b
  callback(result)
   console.log(a + b) // undefined + undefined
}

function displayer(res) {
  console.log('Результат', res)
}

// sum(5, 10) // 15
// sum() // NaN
// sum(5)

sum(3, 10, displayer)
sum(5, 10, function (res) {
  console.log('Результат', res)
})

sum(3, 10, alert)
sum(3, 10, console.log)

*/
//return

// function sum(a, b) {
//   console.log('Hello World 1')
//   return a + b

//   console.log('Hello World 2') // не будет работать после return
// }

// // const result = sum(10, 20)
// // console.log('result', result)

// console.log(sum(2, 3))

// НИЖЕ НЕ ТЕОРИЯ

function sum(a, b, callback) {
  const result = a + b
  callback(result)
  console.log(a + b) // undefined + undefined
}

function displayer(res) {
  console.log('Результат', res)
}

sum(3, 2, (callback) => {
  console.log(callback)
})

displayer(15)

function asd(a, b) {
  return a + b
}

console.log(asd(2, 3))
