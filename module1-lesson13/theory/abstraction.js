// 4.Абстракция
// - это использование только тех характеристик объекта, которые с наибольшей точностью педставляют его в какой-то определенной системе

// class Footballer описывает общие параметры, присущи каждому футболисту
// обобщенные параметры, конкретизацию делаем в отдельном классе

class Footballer {
  constructor(name, club) {
    this.name = name
    this.club = club
  }
  shoot() {}
  celebrateGoal() {}
  pass() {}
}

class Forward extends Footballer {
  constructor(name, club) {
    super(name, club)
  }
  shoot() {
    console.log('Очень сильный удар!')
  }
  celebrateGoal() {
    console.log('Даа! Я забил гол!')
  }
  pass() {
    'Средненький пас'
  }
}
