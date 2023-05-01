// no.1
for (let index = 0; index <= 10; index++) {
    console.log(index)
}
let count = 0
while(count < 11){
    console.log(count)
    count++
}
let counter = 0;
do{
    console.log(counter)
    counter++;
}
while(counter < 11)

// no.2
for (let index = 10; index <= 0; index--) {
    console.log(index)
}
count = 10
while(count >= 0){
    console.log(count)
    count--
}
counter = 10;
do{
    console.log(counter)
    counter--;
}
while(counter < 11)

// no.3
for (let index = 0; index <= 10000000; index++) {
    console.log(index)
}

// no.4
let hash = ''
for (let index = 0; index < 7; index++) {
    hash += '#'
    console.log(hash)
}

// no.5
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i*i}`)    
}

// no.6
console.log(`i\ti^2\ti^3`)
for (let i = 0; i <= 10; i++) {
    console.log(`${i}\t${i**2}\t${i**3}`)    
}

// no.7
for (let i = 0; i < 100; i++) {
    if(i%2===0){
        console.log(i)
    }
}

// no.8
for (let i = 0; i < 100; i++) {
    if(i%2===1){
        console.log(i)
    }
}

// no.9
for (let i = 0; i < 100; i++) {
    let prime = 0;
    for (let j = 0; j <= i; j++) {
        if(i%j===0){
            prime++
        }
    }
    if(prime===2){
        console.log(i)
    }
}

// no.10
let sum = 0;
for (let i = 0; i < 100; i++) {
    sum+= i
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`)

// no.11
let sumEven = 0;
let sumOdd = 0
for (let i = 0; i < 100; i++) {
    if(i%2===0){
        sumEven+= i
    }
    else sumOdd+=i
}
console.log(`The sum of all evens from 0 to 100 is ${sumEven}`)
console.log(`The sum of all odds from 0 to 100 is ${sumOdd}`)

// no.12
let array = new Array()
for (let i = 0; i < 100; i++) {
    if(i%2===0){
        sumEven+= i
    }
    else {
        sumOdd+=i
    }
}
array.push(sumEven)
array.push(sumOdd)
console.log(array)

// no.13
let newArray = new Array(5)
for (let i = 0; i < newArray.length; i++) {
    newArray.push(Math.random)
}

// no.14
let newArray2 = new Array(5)
for (let i = 0; i < newArray2.length; i++) {
    if(!newArray2.includes(Math.random())){
        newArray2.push(Math.random)
    }
}

// no.15
console.log(Math.random().toString(16).substring(2, 6))

