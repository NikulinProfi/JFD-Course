// getTime

const date1 = new Date(2005, 4, 20)
const date2 = new Date(2006, 4, 10)

// количество ms с Jan 1, 1970
console.log('date1', date1.getTime())
console.log('date1', date2.getTime())

// считаем разницу между датами
const difference = date2.getTime() - date1.getTime()
console.log('difference', difference / 1000 / 60) // минуты

const startTime = Date.now() // аналог - new Date().getTime()

for (let i = 0; i < 10000000; i += 1) {
  // do something
}

const endTime = Date.now()

console.log('startTime', startTime)

console.log('endTime', endTime)

const difference1 = endTime - startTime

console.log('difference1', difference1) // в ms
