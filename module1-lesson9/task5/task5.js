const clientsEstimations = []
function askClientToGiveEstimation() {
  for (let i = 0; i < 5; i++) {
    const score = Number(prompt(`Как вы оцениваете нашу кофейню от 1 до 10?`))
    if (score >= 1 && score <= 10) {
      clientsEstimations.push(score)
    }
  }
}

askClientToGiveEstimation()
console.log(clientsEstimations)

const goodEstimations = clientsEstimations.filter((index) => {
  return index > 5
})
const notGoodEstimations = clientsEstimations.filter((index) => {
  return index <= 5
})
console.log('goodEstimations', goodEstimations)
console.log('notGoodEstimations', notGoodEstimations)
alert(
  `Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`
)
