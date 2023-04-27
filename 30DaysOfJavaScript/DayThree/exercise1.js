// no.1
let firstName = 'Tiffany'
let l_Name = 'Hudson'
let $country = 'USA'
let city = "Houston"
let _age = 37
let isMarried = false
let year = 1983
console.log(typeof firstName)
console.log(typeof l_Name)
console.log(typeof $country)
console.log(typeof city)
console.log(typeof _age)
console.log(typeof isMarried)
console.log(typeof year)

// no.2
if (typeof '10' == 10 ? console.log('They are equal') : console.log("They are not equal"));
if (typeof'10' === 10 ? console.log('They are equal with their values and datatypes') 
: console.log("They are not equal with their values and datatypes"));

// no.3
if (parseInt('9.8') == 10 ? console.log('They are equal') : console.log("They are not equal"));
if (parseInt('9.8') === 10 ? console.log('They are equal with their values and datatypes') 
: console.log("They are not equal with their values and datatypes"));

// no.4
isMarried = false
isSingle = true
console.log(isMarried == isSingle)
console.log(isMarried != isSingle)
console.log(isMarried === isSingle)
console.log(isMarried !== isSingle)

// no.5
let python = 'python'
let jargon = 'jargon'
console.log(python !== jargon)

// no.6
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!false)
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log(python.includes("on"))
console.log(jargon.includes("on"))

// no.7
const date = new Date()
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getTime())



