const coffees = ['Latte', 'Cappuccino', 'Americano']
const coffeeName = prompt('Поиск кофе по названию:').toLowerCase().trim()

let indexOfCoffe = coffees.findIndex((coffee) => {
  return coffee.toLowerCase() === coffeeName
})

// console.log(indexOfCoffe)
// console.log(coffeeName)

if (indexOfCoffe > -1) {
  alert(
    `Держите ваш любимый кофе ${coffeeName}. Он ${
      indexOfCoffe + 1
    }-й по популярности в нашей кофейне`
  )
} else {
  alert(`К сожалению, такого вида кофе нет в наличии`)
}
