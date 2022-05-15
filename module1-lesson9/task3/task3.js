const coffees = ['Latte', 'Cappuccino', 'Americano']
let coffeeName = prompt('Поиск кофе по названию:')

// const answerClient = (i => ())

// const number = coffees.findIndex((item) => item.length) // coffeeName
// console.log('number', number) // если переданного элемента не существует в массиве, то будет передано -1

// for (coffeeName of coffees) {
let isHaveCoffee = false

coffees.forEach((coffee) => {
  // coffee = coffee.toLowerCase
  if (coffee.toLowerCase() === coffeeName.toLowerCase()) {
    isHaveCoffee = true
  }
})(coffees.forEach(coffee) === true)
  ? arert(
      `Держите ваш любимый кофе ${coffees}. Он ${number}-й по популярности в нашей кофейне.`
    )
  : alert(`К сожалению, такого вида кофе нет в наличии`)

// if else ?

// if (coffeeName === coffees.findIndex(() => {})) {
//   arert(
//     `Держите ваш любимый кофе ${coffees}. Он ${number}-й по популярности в нашей кофейне.`
//   )
// } else {
//   alert(`К сожалению, такого вида кофе нет в наличии`)
// }
// }

//
