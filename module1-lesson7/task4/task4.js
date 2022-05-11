let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
  // console.log('numbers', numbers)
  sum += numbers[i] ** 3
  // console.log('numbers', numbers)
  // console.log('sum', sum)
}
console.log(sum) // 1158411

// console.log('numbers', numbers)
// После завершения первого цикла через for, значения в numbers обновились до [1000, 64, 1000000, -125, 157464, 8]

// Через цикл for of
sum = 0
for (let num of numbers) {
  // console.log('numbers', numbers)
  num = num ** 3
  // console.log('numbers', numbers)
  sum += num
  // console.log('sum', sum)
}
console.log(sum) // 1003904306910622800
