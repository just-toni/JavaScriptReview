// no.1
console.log(Math.random().toString())

// no.2
console.log(Math.random().toString(16))

// no.3
let array = new Array(3)
for (let i = 0; i < array.length; i++) {
    if(Math.random() <=255){
        array[i] = Math.random(256)
    }
}
console.log(`rgb (${array})`)

// no.4
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
const countriesArray = new Array()
for (let index = 0; index < countries.length; index++) {
    countriesArray[index] = countries[index].toUpperCase()
}
console.log(countriesArray)

// no.5
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
const webTechArray = new Array
for (let index = 0; index < webTechs.length; index++) {
    webTechArray[index] = webTechs[index].toUpperCase()
}
console.log(webTechArray)

// no.6
let completeCountriesArray = new Array()
let word = new Array()
for (let index = 0; index < countriesArray.length; index++) {
    word[0] = countriesArray[index]
    word[1] = countriesArray[index].substring(0,3) 
    word[2] = countriesArray[index].length
    for (let j = 0; j < completeCountriesArray.length; j++) {
        completeCountriesArray[j] = word
    }
    word = new Array()
}
console.log(completeCountriesArray)

// no.7
let array2 = new Array()
for (let index = 0; index < countriesArray.length; index++) {
    if(countriesArray[index].includes("land")){
        array2.push(countriesArray[index])
    }
    else{
        console.log('All countries are without land')
    }
}
console.log(array2)

// no.8
let array3 = new Array()
for (let i = 0; i < countriesArray.length; i++) {
    if(countriesArray[i].endsWith('ai')){
        array3.push(countriesArray[i])
    }
    else{
        console.log('All countries are without ia')
    }
}
console.log(array3)

// no.9
let max = 0
let min = countriesArray[0].length
let word2 = '';
for (let index = 0; index < countriesArray.length; index++) {
    if(max < min){
        max = min
        max = Math.max(max, countriesArray[index].length)
        word = countriesArray[index]
    }
}
console.log(word)

// no.10
let max2 = 5
let wordsArray = new Array()
for (let i = 0; i < countriesArray.length; i++) {
    if(countriesArray[i].length === 5){
        wordsArray.push(countriesArray[i])
    }    
}
console.log(wordsArray)

// no.11
let max3 = 0
let min3 = countriesArray[0].length
let word3 = '';
for (let i = 0; i < webTechArray.length; i++) {
    if(max3 < min3){
        max3 = min3
        max3 = Math.max(max3, webTechArray[i].length)
        word3 = countriesArray[i]
    }
}
console.log(word3)

// no.12
let completeWebTechArray = new Array()
let wordWebTech = new Array()
for (let index = 0; index < webTechArray.length; index++) {
    wordWebTech[0] = webTechArray[index]
    wordWebTech[1] = webTechArray[index].length
    completeWebTechArray.push(wordWebTech)
    wordWebTech = new Array()
}
console.log(completeWebTechArray)

// no.13


// no.14
for (let index = 0; index < webTechArray.length; index++) {
    console.log(webTechArray[index])
}

// no.15
const fruit_array = new Array(['banana', 'orange', 'mango', 'lemon'])
for (let index = fruit_array.length-1; index >= 0; index--) {
    console.log(fruit_array[index])
}

// no.16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
for (let index = 0; index < fullStack.length; index++) {
    for (let j = 0; j <= fullStack[index].length; j++) {
        console.log(fullStack[index])
    }    
    console.log('\n')
}

