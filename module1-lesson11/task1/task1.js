function getDateFormat(date, separator = '.') {
  const dateYear = date.getFullYear()
  let dateMonth = date.getMonth() + 1
  let dateDay = date.getDate()
  if (dateMonth < 10) {
    dateMonth = '0' + dateMonth
  }
  if (dateDay < 10) {
    dateDay = '0' + dateDay
  }

  return `${dateYear}${separator}${dateMonth}${separator}${dateDay}`
}

const birthdayNikitaDemyanenko = new Date(2005, 8, 11)
console.log(getDateFormat(birthdayNikitaDemyanenko))
