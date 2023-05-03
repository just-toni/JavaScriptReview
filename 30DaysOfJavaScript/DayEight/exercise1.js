// no.1
const dog = {}

// no.2
console.log(dog)

// no.3
dog = {
    name: 'Bingo',
    legs: 4,
    color: 'caramel brown',
    age: 2,
    'bark' : 'woof woof'
}

// no.4
console.log(dog[bark])
console.log(dog.age)
console.log(dog.name)
console.log(dog[legs])
console.log(dog.color)

// no.5
dog.breed = 'German Shepherd'
dog.getDogInfo = dog.name + " " + dog.age + " " + dog.color + " " + dog.breed + " " + dog.legs + " " + dog['bark']

