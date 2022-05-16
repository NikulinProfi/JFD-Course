// 1 splice - чтобы удалить какие-то элементы из массива и на их место поставить другие элементы

const cars = ['BMW', 'Mersedes', 'Lada']

// cars.splice(индекс, с которого начинаем удаление, количество удаляемых элементов)
const removedElements = cars.splice(0, 2, 'Audi', 'Bugatti')

console.log('removedElements', removedElements)
console.log('cars', cars)

// 2 slice - отличие от splice, что не изменяет текущий массив
// не можем передавать элементы, которыми можем изменить массив

const agesOfDevelopers = [25, 18, 45, 30]
// agesOfDevelopers.slice(индекс, с которого начинаем обрезку, индекс, которым закончим обрезку массива)
// console.log(agesOfDevelopers.slice(0, 2))
const sliceAgesOfDevelopers = agesOfDevelopers.slice(0, 2)
console.log('sliceAgesOfDevelopers', sliceAgesOfDevelopers)
console.log('agesOfDevelopers', agesOfDevelopers)

// 3 indexOf - ищет элемент и возвращает индекс, если нет, то вернет -1

const favoriteFood = ['Мороженое', 'Торт', 'Кофе']

const indexOfFood = favoriteFood.indexOf('Кофе')
console.log('indexOfFood', indexOfFood) // если переданного элемента не существует в массиве, то будет передано -1

// 4 includes - возвращает true или false, проверяет сущетвует ли какой-то элемент в массиве

const technologies = ['JavaScript', 'HTML', 'CSS']
const isTechnologyExists = technologies.includes('CSS')
console.log('isTechnologyExists', isTechnologyExists) //true, т.к. такой элемент существует в массиве

// 5 split (разделяет строчку с помощью разделителя и превращает в массив)+ join (превращает массив в строчку и вставляет между каждым элементов переданный разделитель)

const listOfOrders = 'Майка, шорты, кросовки, рюкзак'
const listOfOrdersArray = listOfOrders.split(', ')
console.log('listOfOrdersArray', listOfOrdersArray)

const ordersString = listOfOrdersArray.join(', ')
console.log('ordersString', ordersString)

// 6 reverse - переворачивает массив, не принимает параметров
// изменяет текщий массив !!!

technologies.reverse()
console.log('technologies', technologies)
