const myName = 'Дмитрий'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Владилена Минина'
const reasonText = 'хочу получать удовольствие от результатов своей работы'
const numberOfMonth = '1'

let myInfoText = `Всем привет! Меня зовут, ${myName}. Cейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.

Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяц. Я уверен, что пройду данный курс до конца!`
console.log(
  myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase())
)

console.log('Длина строки myInfoText:', myInfoText.length)

console.log(myInfoText[0] + myInfoText[myInfoText.length - 1])
