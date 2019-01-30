export default class Lion {
  constructor(name, age, sound) {
    if (name == undefined || age == undefined) {
      throw new Error("You're missing information necessary to create a lion")
    }
    this.name = name
    this.age = age
    this.sound = sound || "I'm a hungry Lion!" //optional parameter
  }

  speak() {
    window.alert(`${this.name} is singing ${this.sound}`)
  }
  eat(food) {
    window.alert(`${this.name} is eating ${food}! nam nam nam...`)
  }
}