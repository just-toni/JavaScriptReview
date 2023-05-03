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
    for (let index = 2; index <= number; index++) {
        let flag = 0
        for (let j = 1; j <= index; j++) {
            if(index % j === 0){
                flag++
            }                
        }
        if(flag == 2){
            return true
        }
        else return false
    }
}
console.log(isPrime(46))
console.log(isPrime(7))

// no.16
function isUnique(array){
    let item = array[0]
    let counter = 0
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(array[index] === item){
            counter++;
            item = array[index]
        }
    }
    if(counter > 1){
        return false
    }
    else return true
}
const testArray5 = ["dave", 'pass', 'tree', 'doha', 'dave']
console.log(isUnique(testArray4))
console.log(isUnique(testArray5))

// no.18
function isValidVariable(variable) {
    const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    for (let index = 0; index < variable.length; index++) {
        // if(variable.charAt(index) !== " "){
            if (variable.charAt(index) === '$' || variable.charAt(index) === '_' && variable.charAt(index) !== ' '){
                for (let index = 0; index < alphabetArray.length; index++) {
                    const element = alphabetArray[index];
                    if(variable.charAt(index) === element){
                        return true
                    }
                }
            }
            return false
        // }
    }
}
console.log(isValidVariable('$tyler'))
console.log(isValidVariable('$tyler_tye'))
console.log(isValidVariable('$tyler tye'))
console.log(isValidVariable('*hj'))
console.log(isValidVariable(' *hj'))
console.log(isValidVariable('h j'))
console.log(isValidVariable('tyl123'))

// no.17
function checkDataType(array){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        for (let j = 0; j < index; j++) {
            const element1 = array[index];
            if(typeof(element)!== typeof(element1)){
                return false
            }
            return true;
        }
    }
}
console.log(checkDataType(testArray2))
console.log(checkDataType(testArray))

// no.19
const sevenRandomNumbers = () =>{
    let resultArray = new Array()
    for (let index = 0; index < 7; index++) {
        resultArray.push(Math.floor(Math.random() * 9))
    }
    return resultArray
}
console.log(sevenRandomNumbers());

// no.20
const reverseCountries = (countriesArray) =>{
    const reversedArray = []
    for (let index = countriesArray.length -1; index >= 0; index--) {
        const element = countriesArray[index];
        reversedArray.push(element)
    }
    return reversedArray
}
let testArray6 = new Array('play', 'time', 'fun')
console.log(reverseCountries(testArray6))