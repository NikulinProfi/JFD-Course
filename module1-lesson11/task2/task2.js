function getDaysBeforeBirthday(nextBirthdayDate) {
  nextBirthdayDate = new Date(2023, 4, 19)
  // console.log(nextBirthdayDate)
  const dayNow = Date.now()
  // console.log(dayNow)
  difference = nextBirthdayDate - dayNow
  // console.log(difference)
  return difference
}
function convertMsToDays() {
  const convertMsToDays = getDaysBeforeBirthday() / 1000 / 60 / 60 / 24
  // console.log(convertMsToDays)
  const round = Math.round(convertMsToDays)
  // console.log(round)
  return round
}

getDaysBeforeBirthday()
convertMsToDays()
