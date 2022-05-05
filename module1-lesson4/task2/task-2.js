console.log(Number('10'), typeof Number('10'))
//1 явное
console.log(+'50')
console.log(+'50', typeof +'50')
//2 не явное
console.log(Number('100'), typeof Number('100'))
//3 явное
console.log('' + 1)
console.log('' + 1, '' + typeof String(1))
//4 не явное
console.log(String(1), typeof String(1))
//5 явное
console.log(Boolean(0), typeof Boolean(0))
//6 явное
console.log(+'001')
console.log(+'001', typeof +'001')
//7 не явное
console.log(1 + '')
console.log(1 + '', typeof String(1) + '')
//8 не явное
console.log(Boolean(1), typeof Boolean(1))
//9 явное
console.log(String(001), typeof String(001))
//10 явное
console.log(Number('Hello World'), typeof Number('Hello World'))
//11 явное
