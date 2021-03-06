// Function Declaration
const isName1 = getName1('Dima')
function getName1(name) {
  return `Имя равно ${name}`
}
const isName = getName1('Dima') // можно вызвать и до и после функции
console.log(isName1)

// Function Expression

function getName2(name) {
  return `Имя равно ${name}`
}

const isName2 = getName2('Oleg')
console.log(isName2)

// arrow Function Expression

const getName3 = (name) => {
  return `Имя равно ${name}`
}
const isName3 = getName3('Denis')
console.log(isName3)
