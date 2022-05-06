const userString = prompt('Введите текст для обрезки')
const startSliceIndex = Number(
  prompt('Введите индекс, с которого нужно начать обрезку строки')
)
const endSliceIndex = Number(
  prompt('Введите индекс, которым нужно закончить обрезку строки')
)
const string = userString.trim().slice(startSliceIndex, endSliceIndex)
alert('Результат: ' + string)
