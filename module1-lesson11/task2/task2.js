const birthdayDate = new Date(2023, 4, 19)

function getDaysBeforeBirthday(nextBirthdayDate) {
  const dayNow = Date.now()
  nextBirthdayDate = nextBirthdayDate.getTime()
  difference = nextBirthdayDate - dayNow
  return difference
}
function convertMsToDays(ms) {
  const convertMsToDays = ms / 1000 / 60 / 60 / 24
  const round = Math.round(convertMsToDays)
  console.log(round)
  return round
}

const result = getDaysBeforeBirthday(birthdayDate)
convertMsToDays(result)
