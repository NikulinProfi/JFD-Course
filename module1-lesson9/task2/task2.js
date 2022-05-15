function getSumOfSequence(number) {
  let array = []
  for (let i = 1; i <= number; i++) {
    array.push(i) // добавит в конец
  }
  // console.log(array[array.length - 1])
  // console.log(array)

  return array[0] + array[array.length - 1]
}
console.log(getSumOfSequence(5))

// array[array.length - 1] // выводит последний элемент массива
