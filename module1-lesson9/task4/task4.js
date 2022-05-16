const coffees = ['Latte', 'Cappuccino', 'Americano']
const prices = [1.5, 1, 2]
//Необходимо использовать методы массивов map и forEach

const updatedPrices = prices.map((price) => {
  return (price *= 1.5)
})

updatedPrices.forEach(function (item, index, array) {
  return alert(
    `Кофе ${coffees[index]} сейчас стоит ${updatedPrices[index]} евро`
  )
})
