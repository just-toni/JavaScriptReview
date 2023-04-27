// no.1
let base = prompt("Enter base: ")
let height = prompt('Enter height: ')
let areaTriangle = 0.5 * base * height
console.log(`The area of the triangle is ${areaTriangle}`)

// no.2
let a = prompt("Enter side a: ")
let b = prompt('Enter side b: ')
let c = prompt("Enter side c: ")
let perimeter = a+b+c
console.log(`The perimeter of the triangle is ${perimeter}`)

// no.3
let length = prompt("Enter length: ")
let width = prompt('Enter width: ')
let areaRectangle = length * width
console.log(`The area of the rectangle is ${areaRectangle}`)

// no.4
let radius = prompt("Enter radius: ")
let circleArea = Math.PI * radius**2
let circumference = Math.PI * 2 * radius
console.log(`The area of a circle is ${circleArea} and it's circumference is ${circumference}`)

// no.5
let x_intercept = prompt("Enter x-intercept: ")
let y_intercept = prompt("Enter y-intercept: ")

// no.6
let slope = ((10-2) / (6-2))
console.log(`The slope is ${slope}`)

// no.9
let hours = prompt("Enter hours: ")
let rate = prompt("Enter rate per hour: ")
console.log(`Your weekly earning is `, rate*hours)

// no.10
let nameOfPerson = prompt("Enter name: ")
if (nameOfPerson.length > 7 ? "Your name is long" : 'Your name is short');

// no.11
let firstName = prompt("Enter first name:")
let l_name = prompt("Enter last name:")
if (firstName.length > l_name.length ? console.log(`Your first name ${firstName} is longer than your family name ${l_name}`):
console.log(`Your first name ${firstName} is shorter than your family name ${l_name} `));

// no.12
let myAge = 78
let yourAge = 87
let myDiff = myAge - yourAge
let yourDiff = yourAge - myAge
if(myAge > yourAge ? console.log(`I am ${myDiff} years older than you.`): console.log(`You are ${yourDiff} years older than me.`));

// no.13
let birth_year = prompt("Enter birth year: ")
let currentDate = new Date()
let currentAge = currentDate.getFullYear - birth_year
let yearsLeft = 18 - currentAge
if(currentAge >= 18 ? console.log(`You are ${currentAge}. You are old enough to drive.`):
console.log(`You are ${currentAge}. You will be allowed to drive after ${yearsLeft} years.`));

// no.14
let $numyears = prompt("Enter number of years to live: ")
let now = new Date()
let year = now - parseInt($numyears)
let numyears = new Date(year)
console.log(`You lived ${numyears.getTime()} seconds.`)

// no.15
let time = new Date()
console.log(`${time.getFullYear()}-${time.getMonth()}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}`)
console.log(`${time.getDate()}-${time.getMonth()}-${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`)
console.log(`${time.getFullYear()}/${time.getMonth()}/${time.getDate()} ${time.getHours()}:${time.getMinutes()}`)




