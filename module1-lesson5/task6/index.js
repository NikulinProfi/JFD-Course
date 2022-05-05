const userText = prompt('Введите текст')
console.log(userText)
const wordFromText = prompt('Введите слово из текста')
console.log(wordFromText)
const indexOfWord = userText.indexOf(wordFromText)
console.log(indexOfWord)
const sliceText = userText.slice(0, indexOfWord)
console.log(sliceText)
alert('Результат: ' + sliceText)

//текст текст текст
//123
