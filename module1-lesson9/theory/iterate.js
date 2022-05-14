// const developerNames = ['Maxim', 'Igor', 'Nastya', 'Irina']

// 1 for

// for (начальное значение; условаие; шаг) {

// }

// Получение элементов массива
// console.log(developerNames[2])

// for (let i = 0; i < developerNames.length; i += 1) {
//   console.log('i', i)
//   console.log('item', developerNames[i])
// }

// 2 for of

// for (const name of developerNames) {
//   console.log('name', name)
// }

// 3 forEach

// developerNames.forEach((name, index, array) => {
//   console.log('name', name)
//   // console.log('index', index)
//   // console.log('array', array)
// })
// developerNames.forEach(function () {})

// 4 map - чтобы применить какое-то дейстиве для массива(возвращает новый массив, в котором сожержатся элементы измененые с помощью нашей функции callback)

const salariesOfDevelopers = [400, 2000, 500, 600, 350]

// умножить каждый элемент массива на 2
const apdatedSalaries = salariesOfDevelopers.map((salary, index, array) => {
  return salary * 2
})
console.log('apdatedSalaries', apdatedSalaries)

// в (текущий элемент для перебора, текущий индекс для перебора, массив)

// 5 filter - фильтр по условию

const filteredSelaries = salariesOfDevelopers.filter((salary, index, array) => {
  // больше 500 зп
  // return salary > 500
  // проверка на четность
  return index % 2 === 0
})
console.log('filteredSelaries', filteredSelaries)

// 6 find - ищет элемент в массиве по условию
// если не использовать index, array,то можно не писать
const searchSalary = salariesOfDevelopers.find((salary) => {
  return salary > 400
})
console.log('searchSalary', searchSalary) // если нет такого элемента, который искали, то выведет undefined

// 7 findIndex - возвращает индекс по условию

const searchIndex = salariesOfDevelopers.findIndex((salary) => {
  return salary === 600
})

console.log('searchIndex', searchIndex) // если элемент не найден, то пишет -1

// 8 some (если хотя бы 1 значение удовлетворяет условию, то true, если все не удовлетворяют, то false)
// 9 every (возвращает true, если все элементы в массиве удовлетворяют условию)

const elementExists = salariesOfDevelopers.some((salary) => {
  //если хоть 1 зп будет больше 1000, то true
  return salary > 1000
})

console.log('elementExists', elementExists) // true

const allelementsExists = salariesOfDevelopers.every((salary) => {
  //если хоть 1 зп будет больше 1000, то true
  return salary > 1000
})

console.log('allelementsExists', allelementsExists)

// 10 reduce - имеет 2 параметра: callback(4 параметра: аккумулятор, текущий элемент, индекс, массив) и начальное значение
// главная задача reduse - с помощью элементов массива получать какое-то одно значение

// Подсчет суммы массива

// const salariesOfDevelopers = [400, 2000, 500, 600, 350] // для просмотра массива
const sum = salariesOfDevelopers.reduce((acc, salary, index, array) => {
  console.log('acc/salary', acc, salary)
  return acc + salary
}, 0) // если не указать начально начение, то будет выводить 0 значение массива
console.log('sum', sum)

// 11 sort - сортирует массив в порядке возрастания/убывания
// всегда элементы a, b

// < 0
// > 0
// 0

//   salariesOfDevelopers.sort((a, b) => {
//     return a - b // сортирует по возрастанию
//     return b - a // сортирует по убыванию
//   })
// console.log('salariesOfDevelopers', salariesOfDevelopers)

const developerNames = ['Maxim', 'Igor', 'Nastya', 'Irina']
// developerNames.sort()
// console.log('developerNames', developerNames) // сортирует строчки по возрастанию, если не передать callback в метод sort
// для сортировки по убыванию обязательно нужно использовать callback

// сортировка по возрастанию сначала >, потом <
// сортировка по убыванию сначала <, потом >
developerNames.sort((a, b) => {
  if (a < b) {
    return 1
  }
  if (a > b) {
    return -1
  }
  return 0
})
console.log('developerNames', developerNames)

// salariesOfDevelopers.sort()
// console.log('salariesOfDevelopers', salariesOfDevelopers)

// Чтобы отсортировать массив по числам обязательно необходимо переавать callback, который принимает в себя 2 параметра (a, b), нужно возвращать выражение, например a - b

// Чтобы отсортировать массив строк, можно не передавать в метод сорт никаких параметров

// МЕТОД sort изменяет текущий массив !!!
