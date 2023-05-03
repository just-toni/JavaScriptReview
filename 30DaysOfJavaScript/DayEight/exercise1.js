// no.1
const dog = {}

// no.2
console.log(dog)

// no.3
   dog.name = 'Bingo',
    dog.legs = 4,
    dog.color = 'caramel brown',
    dog.age = 2,
    dog.bark = 'woof woof'

// no.4
console.log(dog['bark'])
console.log(dog.age)
console.log(dog.name)
console.log(dog['legs'])
console.log(dog.color)

// no.5
dog.breed = 'German Shepherd'
dog.getDogInfo = function(){
    return `The name of this dog is ${dog.name} and this dog is ${dog.age} years old. It is a ${dog.breed} and has ${dog.legs} legs. It is ${dog.color} in color and likes to bark like this ${dog['bark']} `
}
console.log(dog.getDogInfo())

