// Date

const date = new Date()
console.log('date', date)

// new Date(year, month, date, hours, minutes, seconds, ms)

// месяцы от 0(январь) до 11(декабрь)
const newDate = new Date(2000, 1, 10, 11, 55, 5, 5000)
console.log('newDate', newDate)

console.log('year', newDate.getFullYear())
console.log('month', newDate.getMonth())
console.log('date', newDate.getDate())

// день недели от 0(вс) до 6(сб)
console.log('day', newDate.getDay())
if (newDate.getDay() === 4) {
  console.log('Сегодня у нас Четверг')
}

newDate.setFullYear(2001)
newDate.setMonth(2)
newDate.setDate(20)
newDate.setMinutes(33)
console.log('newDate', newDate)
