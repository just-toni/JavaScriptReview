// no.1
let input = prompt("Enter your age: ")
if(input >= 18) {
    console.log("You are old enough to drive")
}
else{
    console.log("You are left with", 18-input, "years to drive")
}

// no.2
let your_age = prompt("Enter your age: ")
if(your_age < 19){
    console.log("You are", 19-your_age, "years younger than me")
}
else{
    console.log("You are", your_age-19, "years older than me")
}

// no.3
let a = 4
let b = 3
if(a > b){
    console.log(`${a} is greater than ${b}`)
}
else{
    console.log(`${b} is greater than ${a}`)
}
let isGreater = 4 > 3
isGreater ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`);

// no.4
let num = prompt("Enter a number:")
if(num % 2 == 0){
    console.log(`${num} is an even number`)
}
else {
    console.log(`${num} is an odd number`)
}