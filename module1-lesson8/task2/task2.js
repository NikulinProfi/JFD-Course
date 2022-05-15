const getSumOfNumbers = function (number, type = 'odd') {
  let sum = 0

  for (let i = 0; i <= number; i++) {
    const isEven = i % 2 === 0
    const isOdd = !isEven
    if (type === 'odd') {
      if (isOdd) {
        sum += i
      }
    } else if (type === 'even') {
      if (isEven) {
        sum += i
      }
    } else if (type === '') {
      sum += i
    }
    // switch (type) {
    //   case 'odd':
    //     sum += isEven ? 0 : i // нечетные
    //     break
    //   case 'even':
    //     sum += isEven ? i : 0 // четные
    //     break
    //   case '':
    //     sum += i
    //     break
    // }
  }
  return sum
}
console.log('odd:', getSumOfNumbers(10, 'odd'))
console.log('even:', getSumOfNumbers(10, 'even'))
console.log(' :', getSumOfNumbers(10, ''))
