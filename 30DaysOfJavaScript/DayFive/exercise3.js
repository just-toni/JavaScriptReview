// no.1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log("Minium number is", ages[0])
console.log("Maximum number is", ages[ages.length -1])
ages.length % 2 === 0 ? console.log("Median age is", ages[ages.length /2]) 
: console.log("Median age is", ages[ages.length/2 + 1])
let average = (ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9]) / ages.length
console.log("Average age is", average)
console.log(Math.abs(ages[0] - average))
console.log(ages[ages.length - 1] - average)

// no. 1(again)
console.log(countries.slice(0,10))

// no.2
console.log(countries[countries.length-1/2])

// no.3
let firstArray = countries.slice(0, countries.length /2)
let secondArray = countries.slice( countries.length /2, countries.length - 1)
console.log(firstArray)
console.log(secondArray)