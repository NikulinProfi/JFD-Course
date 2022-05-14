// Замыкания - это функция внутри функции

const createMultiplayer = function (n) {
  return function () {
    return n * 10
  }
}

// const multiply = createMultiplayer(10) // число n, в данном случае 10, замыкается внутри функции выше и когда вызываем функцию multiply, то получаем результат
// const result = multiply()
// console.log(result)

const createCounter = (initialValue = 0) => {
  let counter = initialValue

  return (valueToAdd) => {
    counter += valueToAdd
    return counter
  }
}

// const addFive = createCounter(5)
// const addTen = createCounter(10)
// const result = addFive(10)
// console.log(result)
// console.log(addTen(50))

const addTwo = createCounter(2)
let result = addTwo(10) // 12
result = addTwo(5) // 17
result = addTwo(3) // 20
console.log(result)
