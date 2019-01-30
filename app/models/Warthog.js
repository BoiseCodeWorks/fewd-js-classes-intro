export default class Warthog {
  constructor(name, age, color, sound) {
    if (!name || !age || !color) {
      throw new Error("You're missing necessary information to make a Warthog")
    }
    this.name = name
    this.age = age
    this.color = color
    this.sound = sound || "Ahkuna Matata" //optional parameters must be ordered last!
  }

  speak() {
    console.log(`${this.name} is singing ${this.sound.toUpperCase()}`)
  }
}
