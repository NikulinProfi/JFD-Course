const developer = {
  // key: value,
  name: 'Dima',
  job: 'Front-End разработчик',
  experience: 24,
  // jobAllInfo: {
  //   type: 'Front-End',
  //   framework: {
  //     name: 'ReactJS',
  //   },
  // },
}

// console.log('type', developer.jobAllInfo.type)
// console.log('framework', developer['jobAllInfo']['framework'])

// console.log('developer', developer)

// // Получение значения по ключу

// // 1 рекомендуется

// console.log('name', developer.name)
// console.log('name', developer.jobAllInfo)
// console.log('name', developer.jobAllInfo.type)

// // 2
// const key = 'name'

// console.log('name', developer[key])

// Опциональная цепочка ?.

// console.log(developer.jobAllInfo)
// console.log(developer.jobAllInfo.framework)

// 1

// if (developer.jobAllInfo.framework) {
if (developer && developer.jobAllInfo && developer.jobAllInfo.framework) {
  console.log('Разработчик уже знает фреймворк')
} else {
  console.log('Разработчик еще не знает фреймворк')
}

// 2

if (developer?.jobAllInfo?.framework?.name) {
  console.log('Разработчик уже знает фреймворк')
} else {
  console.log('Разработчик еще не знает фреймворк')
}
