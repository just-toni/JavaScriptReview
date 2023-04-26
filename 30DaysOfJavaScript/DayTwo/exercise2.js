// no.1
console.log("The quote \' There is no exercise better for the heart than reaching down and lifting people up.'\
by John Holmes teaches us to help one another.")

// no.2
console.log("Love is not patronizing and charity isn't about pity, it is about love. \
Charity and love are the same -- with charity you give love, \
so don't just give money but reach out your hand instead.")

// no.3
let num1 = '10'
console.log(typeof 10 == typeof num1)
let newNum1 = +num1 

// no.4
let float1 = '9.8'
console.log(float1 == 10)
let newFloat1 = parseFloat(float1)
console.log(Math.round(newFloat1))

// no.5
let word = 'jargon'
let word2 = 'python'
console.log(word.search("on"))
console.log(word2.includes("on"))

// no.6
let word3 = 'I hope this course is not full of jargon'
console.log(word3.includes("jargon is"))

// no.7
let randomNum1 = Math.random() * 50
console.log(randomNum1)

// no.8
let randomNum2 = Math.random(50) * 100
console.log(randomNum2)

// no.9
let randomNum3 = Math.random() * 200
console.log(randomNum3)

// no.11
console.log(" 1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125")

// no.12
let word4 = `You cannot end a sentence with because because because is a conjunction`
console.log(word4.substring(0, 31).concat(word4.substring(55, word4.length)))