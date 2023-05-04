// function sayHello() {
//     console.log('Hello')
// }
// // setInterval(sayHello, 6000) // it prints hello in every second, 1000ms is 1s
// setTimeout(sayHello, 10000)

// arr.forEach(function (element, index, arr) {
//     console.log(index, element, arr)
// })
//   // The above code can be written using arrow function
// arr.forEach((element, index, arr) => {
//     console.log(index, element, arr)
// })
//   // The above code can be written using arrow function and explicit return
// arr.forEach((element, index, arr) => console.log(index, element, arr))

let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num, element, numbers) => console.log(num, element, numbers))
console.log(sum)

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element, index) => console.log(element.toUpperCase(), index))


const names = ['Toni', 'Davis', 'Joy', 'D#', "Ghost", 'Zuko', 'Francis']
names.forEach((index, name) => console.log(name, index))

const sum2 = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum2)
const sub = numbers.reduce((acc, cur) => cur - acc, 2)
console.log(sub)

const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
]
  
const score = scores.find((user) => user.score > 80)
console.log(score)

const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
    if (a.age < b.age) return 1
    if (a.age > b.age) return -1
    return 0
})
console.log(users)