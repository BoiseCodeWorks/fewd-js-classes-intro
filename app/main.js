import Lion from './models/Lion.js'
import Warthog from './models/Warthog.js'

let simba = new Lion("simba", 3, "I just can't wait to be king!")
let scar = new Lion("scar", 12)
let pumba = new Warthog("pumba", 7, 'brown')

simba.speak()
scar.speak()
pumba.speak()

simba.eat(pumba.name)


console.log(`in 10 years ${simba.name} will be ${simba.age + 10} years old`)
console.log(`in 10 years ${scar.name} will be ${scar.age + 10} years old`)