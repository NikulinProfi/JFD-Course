// const getCount = alert(getDivisorsCount(0.1))

// function getDivisorsCount(number = 1) {
//   if (Number.isInteger(number)) {
//     return `${number} должен быть целым числом и больше нуля!`
//     // alert(`${number} должен быть целым числом и больше нуля!`)
//   } else {
//     return number
//     // alert(`${number}`)
//   }
//   // return number
// }

// // const getCount = alert(getDivisorsCount(0.1))
// console.log(getCount)

Number.isInteger =
  Number.isInteger ||
  function (value) {
    return (
      typeof value === 'number' &&
      isFinite(value) &&
      Math.floor(value) === value
    )
  }

console.log(Number.isInteger(0.1))
