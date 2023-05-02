// no.1
function userIdGeneratedByUser(){
    let input1 = prompt("Enter a number of characters:")
    let input2 = prompt("Enter a number of ids:")
}

// no.2
const rgbColorGenerator = () => {
    let first = 0, second = 0, third = 0
    first = Math.floor(Math.random() * 255)
    second = Math.floor(Math.random() * 255)
    third = Math.floor(Math.random() * 255)
    return "(" + first + "," + second + "," + third + ")"
}
console.log(rgbColorGenerator())

// no.3
const arrayOfHexaColors = array => array.length
const hexaColorsArray = ['d', '6a', 'e3f']
console.log(arrayOfHexaColors(hexaColorsArray))

// no.4
const arrayOfRgbColors = array =>  array.length
const rgbColorsArray = [233, 19, 22]
console.log(arrayOfRgbColors(rgbColorsArray))

// no.5
function convertHexaToRgb(hexa){

}

// no.6
function convertRgbToHexa(rgb){
    let hex1 = new Array()
    let hex
    for (let index = 0; index < rgb.length; index++) {
        const element = rgb[index];
        hex1.push(element.toString(16))
        hex += (element.toString(16))
    }
    return '#' + hex1 + "\n#" + hex
}
console.log(convertRgbToHexa(rgbColorsArray))

// no.7
function generateColors(type, amount){
    const result = new Array()
    if(type === 'hexa'){
        for (let index = 0; index < amount; index++) {
            result.push('#' + Math.floor(Math.random() * 100000).toString(16))
        }
    }
    else {
        for (let index = 0; index < amount; index++) {
            let first = 0, second = 0, third = 0
            first = Math.floor(Math.random() * 255)
            second = Math.floor(Math.random() * 255)
            third = Math.floor(Math.random() * 255)
            let rgbValue = `rgb(${first}, ${second}, ${third})`
            result.push(rgbValue)
        }
    }
    return result
} 
console.log(generateColors('hexa', 4))
console.log(generateColors('rgb', 2))

// no.8
const shuffleArray = inputArray => {

}

// no.9
function factorial(number){
    let factorial = 1
    for (let index = 1; index <= number; index++) {
        factorial *= index
    }
    return factorial
}
console.log(factorial(6))

// no.10
const isEmpty = parameter => parameter.length > 0 ? false : true
console.log(isEmpty(''))
console.log(isEmpty(99))

// no.11
const sum = (...args) => {
    let sum1 = 0
    for (let index = 0; index < args.length; index++) {
        const element = args[index];
        sum1+= element
    }
    return sum1
}
console.log(sum(4,7,2,4,7,23,77,987,8))

// no.12
const sumOfArrayItems = function(array3){
    let arraySum = 0
    for (let index = 0; index < array3.length; index++) {
        const element = array3[index];
        if(typeof(element) !== "number"){
            return "One or more of the elements in this array is not a number"
        }
        else{
            arraySum+=element
        }
    }
    return arraySum
}
const testArray = [1,2,3,4,5]
const testArray2 = [1,2,3,4,5, 'Dave']
console.log(sumOfArrayItems(testArray2))
console.log(sumOfArrayItems(testArray))

// no.13
const avgOfArrayItems = function(array3){
    let arraySum = 0
    for (let index = 0; index < array3.length; index++) {
        const element = array3[index];
        if(typeof(element) !== "number"){
            return "One or more of the elements in this array is not a number"
        }
        else{
            arraySum+=element
        }
    }
    return arraySum / array3.length
}
console.log(avgOfArrayItems(testArray2))
console.log(avgOfArrayItems(testArray))

// no.14
function modifyArray(array4){
    if(array4.length < 5){
        return "Item not found"
    }
    else{
        let value = array4[4]
        array4[4] = value.toUpperCase()
    }
}
const testArray3 = ["dave", 'pass', 'tree', 'the', 'doha']
const testArray4 = ["dave", 'pass', 'tree', 'doha']
console.log(modifyArray(testArray3))
console.log(modifyArray(testArray4))

// no.15
const isPrime = function(number) {
    if (number > 1){
        for (let index = 2; index <= number; index++) {
            let flag = 0
            for (let j = 1; j <= index; j++) {
                if(index%j ===0){
                    flag++
                }                
            }
            if(flag == 2){
                return true
            }
            else return false
        }
    }
}
console.log(isPrime(90))
console.log(isPrime(7))