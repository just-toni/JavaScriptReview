// no.1
// function solveLinEquation(a,b,c){
//     if(a+b)
// }

// no.2
function solveQuadFunction(a,b,c){
    return (-b +- (Math.sqrt((b*b), (4 * a * c)))) / 2*a
}
console.log(solveQuadFunction(1,4,4))

// no.3
const printArray = (array) => {
    for (let index = 0; index < array.length; index++) {
        return array[index]
    }
}
const arrayToBePrinted = [1,2,3,4]
console.log(printArray(arrayToBePrinted))

// no.4
const showDateTime = () => {
    return new Date().getMonth() + "/" + new Date().getDay() + "/" + new Date().getFullYear() + " " + 
    new Date().getHours() + ":" + new Date().getMinutes()
}
console.log(showDateTime())

// no.5
function swapValues(x, y){
    return `x = ${y}, y = ${x}`
}
console.log(swapValues(99,21))

// no.6
const reverseArray = (array) => {
    const reversedArray = []
    for (let index = array.length -1; index >= 0; index--) {
        reversedArray.push(array[index])
    }
    return reversedArray
}
const array = ['Deb', 999.23, 'Stormy']
console.log(reverseArray(array))

// no.7
const capitalizeArray = array => {
    const capitalizedArray = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        capitalizedArray.push(element.substring(0, element.length) + element.substring(1, element.length))
    }
    return capitalizedArray
}
const array2 = ['Deb', '999.23', 'Stormy', 'top']
console.log(capitalizeArray(array2))

// no.8
const addItem = item => {
    const newArray = []
    newArray.push(item)
    return newArray
}
console.log(addItem('blah blah blah'))

// no.9
const removeItem = item => {
    const newArray = []
    for (let index = 0; index < array.length; index++) {
        if(array[index] === item){
            newArray.splice(index)
        }
    }
    return newArray
}
console.log(removeItem('blah blah blah'))

// no.10
const sumOfNumbers = range => {
    let sum = 0;
    for (let index = 0; index <= range; index++) {
        sum+=index
    }
    return sum
}
console.log(sumOfNumbers(10))

// no.11
const sumOfOdd = range => {
    let sumOdd = 0;
    for (let index = 1; index <= range; index+=2) {
        sumOdd+=index
    }
    return sumOdd
}
console.log(sumOfOdd(10))

// no.12
const sumOfEven = range => {
    let sumEven = 0;
    for (let index = 0; index <= range; index+=2) {
        sumEven+=index
    }
    return sumEven
}
console.log(sumOfEven(10))

// no.13
const evensAndOdds = range => {
    let counterEven = 0, counterOdd = 0
    for (let index = 0; index <= range; index++) {
        if(index % 2 === 0){
            counterEven++
        }
        else counterOdd++
    }
    return `The number of odds are ${counterOdd}\nThe number of evens are ${counterEven}`
}
console.log(evensAndOdds(100))

// no.14
const sum = (...args) => {
    let sum = 0
    for (let index = 0; index < args.length; index++) {
        sum+= args[index]
    }
    return sum
} 
console.log(sum(2,4,67,123,987,9))  

// no.15
function randomUserIp(){
    let first = 0, second = 0, third = 0, fourth = 0
    first = Math.floor(Math.random() * 255)
    second = Math.floor(Math.random() * 255)
    third = Math.floor(Math.random() * 255)
    fourth = Math.floor(Math.random() * 255)
    return first + "." + second + "." + third + "." + fourth
}
console.log(randomUserIp())

// no.16
function randomMacAddress(){
    let first, second, third, fourth, fifth, sixth 
    first = Math.floor(Math.random() * 99).toString(12)
    second = Math.floor(Math.random() * 99).toString(12)
    third = Math.floor(Math.random() * 99).toString(12)
    fourth = Math.floor(Math.random() * 99).toString(12)
    fifth = Math.floor(Math.random() * 99).toString(12)
    sixth = Math.floor(Math.random() * 99).toString(12)
    return first + ":" + second + ":" + third + ":" + fourth + ":" + fifth + ":" + sixth
}
console.log(randomMacAddress())

// no.17
const randomHexaNumberGenerator = () => '#' + Math.floor(Math.random() * 100000).toString(16)
console.log(randomHexaNumberGenerator())

// no.18
const userIdGenerator = () => '41XTDbE'
console.log(userIdGenerator())