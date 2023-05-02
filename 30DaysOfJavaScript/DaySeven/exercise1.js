// no.1
function fullName(){
    return 'Toni Adeniyi'
}
console.log(fullName())

// no.2
const fullName1 = (firstName, lastName) => {
    return firstName + " " + lastName
}
console.log(fullName1)

// no.3
const addNumbers = (first = 10, second = 9) => first + second
console.log(addNumbers())
console.log(addNumbers(45, 78))

// no.4
function areaoOfRectangle(length, breadth){
    return length * breadth
}
console.log(areaoOfRectangle(4,5))

// no.5
function perimeteroOfRectangle(length, width){
    return 2* (length + width)
}
console.log(perimeteroOfRectangle(4,5))

// no.6
function volumeOfRectPrism(length, width, height){
    return length * width * height
}
console.log(volumeOfRectPrism(4,5,6))

// no.7
function areaOfCircle(radius){
    return Math.PI * (radius**2)
}
console.log(areaOfCircle(7))

// no.8
function cirumOfCircle(radius){
    return  2* Math.PI * radius
}
console.log(cirumOfCircle(7))

// no.9
function density(mass, volume){
    return mass/volume
}
console.log(areaOfCircle(7,3))

// no.10
const speed = (distance, time) => distance /time
console.log(speed(100,45))

// no.11
const weight = (mass, gravity = 9.7) => {
    return mass * gravity
}
console.log(weight(36))

// no.12
function convertCelsiusToFahrenheit(celsuis){
    return (celsuis * (9/5)) + 32
}
console.log(convertCelsiusToFahrenheit(15))

// no.13
const bmi = (weight, height) => {
    return weight / (height **2)
}
let value = console.log(bmi(50,60))
if(value < 18.5){
    console.log(`Underweight, BMI is less than 18.5`)
} 
else if(value >= 18.5 && value <= 24.9){
    console.log(`Normal weight: BMI is 18.5 to 24.9`)
} 
else if(value >= 25 && value <= 29.9){
    console.log(`Overweight: BMI is 25 to 29.9`)
} 
else {
    console.log("Obese: BMI is 30 or more")
}

// no.14
function checkSeason(month){
    if(month === 'December' || month === "January" || month === "February"){
        return 'Winter'
    }
    else if(month === 'March' || month === "April" || month === "May"){
        return 'Spring'
    }
    else if(month === 'June' || month === "July" || month === "August"){
        return 'Summer'
    }
    else if(month === 'September' || month === "OCtober" || month === "November"){
        return 'Autumn'
    }
}
console.log(checkSeason('April'))

// no.15
const findMax = (first, second, third) => {
    if(first > second){
        if (first > third){
            return first 
        }
        else return third
    }
    else return second
    // else if(second > first){
    //     if(second > third){
    //         return second
    //     }
    //     return third
    // }
    // else if(third > first){
    //     if(third > second){
    //         return third
    //     }
    //     return second
    // }
}
console.log(findMax(33023,56,333))