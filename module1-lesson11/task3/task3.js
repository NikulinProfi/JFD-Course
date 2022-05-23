const newDay = new Date(2000, 4, 1)

function addDays(date, days = 1) {
  date = date.getTime()
  days = days * 24 * 60 * 60 * 1000
  // console.log(days)
  // console.log(date)
  return new Date(date + days)
}

console.log(addDays(newDay, 700))
//Mon Apr 01 2002 00:00:00 GMT+0400 (Москва, летнее время)
