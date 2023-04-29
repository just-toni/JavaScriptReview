// no.1
const array = new Array()

// no.2
const array_of_items = [1,2,3,4,5,'A', 'B', 'C', 'D','E']

// no.3
console.log("The length of the array is: ", array.length)
console.log("The length of the array is: ", array_of_items.length)

// no.4
console.log('The first item of this array is', array_of_items[0])
console.log('The middle item of this array is', array_of_items[4])
console.log('The lastitem of this array is', array_of_items[9])

// no.5
const mixedDataTypes = ['a', 23, 3.65, true, {food: 'grass', drink: 'milk'}, 'cow']

// no.6
const itCompanies = ['Facebook', 'Google', 'Mircosoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// no.7
console.log('Companies:',itCompanies)

// no.8
console.log("The number of companies in the array are: ", itCompanies.length)

// no.9
console.log('The first item of this array is', itCompanies[0])
console.log('The middle item of this array is', itCompanies[3])
console.log('The last item of this array is', itCompanies[6])

// no.10
console.log('The first item of this array is', itCompanies[0])
console.log('The second item of this array is', itCompanies[1])
console.log('The third item of this array is', itCompanies[2])
console.log('The fourth item of this array is', itCompanies[3])
console.log('The fifth item of this array is', itCompanies[4])
console.log('The sixth item of this array is', itCompanies[5])
console.log('The seventh item of this array is', itCompanies[6])

// no.11
itCompanies[0].toUpperCase()
console.log('The first item of this array is', itCompanies[0])
itCompanies[1].toUpperCase()
console.log('The second item of this array is', itCompanies[1])
itCompanies[2].toUpperCase()
console.log('The third item of this array is', itCompanies[2])
itCompanies[3].toUpperCase()
console.log('The fourth item of this array is', itCompanies[3])
itCompanies[4].toUpperCase()
console.log('The fifth item of this array is', itCompanies[4])
itCompanies[5].toUpperCase()
console.log('The sixth item of this array is', itCompanies[5])
itCompanies[6].toUpperCase()
console.log('The seventh item of this array is', itCompanies[6])

// no.12
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and
${itCompanies[6]} are big IT companies`)

// no.13
itCompanies.indexOf('Facebook') !== -1 ? `Facebook` : "Company not found!"

// no.14
console.log("Companies with two 'o's in their name are:")
if(itCompanies[0].includes("o",2)){
    console.log(itCompanies[0])
}
if(itCompanies[1].includes("o",2)){
    console.log(itCompanies[1])
}
if(itCompanies[2].includes("o",2)){
    console.log(itCompanies[2])
}
if(itCompanies[3].includes("o",2)){
    console.log(itCompanies[3])
}
if(itCompanies[4].includes("o",2)){
    console.log(itCompanies[4])
}
if(itCompanies[5].includes("o",2)){
    console.log(itCompanies[5])
}
if(itCompanies[6].includes("o", 2)){
    console.log(itCompanies[6])
}

// no.15
console.log(`Sorted array: ${itCompanies.sort()}`)

// no.16
console.log(`Reversed array: ${itCompanies.reverse()}`)

// no.17
console.log(itCompanies.slice(0,3))

// no.18
console.log(itCompanies.slice(3, itCompanies.length))

// no.19
itCompanies.length % 2 === 0 ? console.log(itCompanies.slice(itCompanies.length/2)) : console.log(itCompanies.length/2 + 1)

// no.20
console.log(itCompanies.pop(0))

// no.21
itCompanies.length % 2 === 0 ? console.log(itCompanies.pop(itCompanies.length/2)) : console.pop(itCompanies.length/2 + 1)

// no.22
console.log(itCompanies.pop(itCompanies.length))

// no.23
console.log(itCompanies.pop())
