const temperatureInCelsius = Number(
  prompt('Введите температуру в градусах Цельсия')
)
// temperatureInCelsius string - не верно, нужно привести к Number
console.log('temperatureInCelsius', typeof temperatureInCelsius)
if (temperatureInCelsius === 0) {
  alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (temperatureInCelsius > 0) {
  alert(
    'Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже'
  )
}
// temperatureInCelsius: "0"
// temperatureInFahrenheit: undefined
const temperatureInFahrenheit = (temperatureInCelsius * 9) / 5 + 32
// не верно названа переменная temperatureInCelsius
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по 
Фаренгейту.`)
// %{temperatureInCelsius} не верная конструкция, нужно указать ${temperatureInCelsius}
