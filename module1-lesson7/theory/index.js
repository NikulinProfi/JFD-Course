// Дебаг с помощью console.log

// let sum = 0
// console.log('initial sum,', sum)
// const numberOfElements = 10
// for (let i = 1; i < numberOfElements; i += 1) {
//   console.log('i / sum', i, sum)
//   sum += i
// }
// const theHallOfSum = sum / 2
// console.log('theHallOfSum', theHallOfSum)

// Debugger
let sum = 0
const numberOfElements = 10
for (let i = 1; i < numberOfElements; i += 1) {
  sum += i
}
const theHalfOfSum = sum / 2
console.log('theHalfOfSum', theHalfOfSum)
