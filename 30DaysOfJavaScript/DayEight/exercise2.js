const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

// no.1
let alexSkills = users.Alex.skills.length
let asabSkills = users.Asab.skills.length
let brookSkills = users.Brook.skills.length
let danielSkills = users.Daniel.skills.length
let johnSkills = users.John.skills.length
let thomasSkills = users.Thomas.skills.length
let paulSkills = users.Paul.skills.length

// no.5
console.log(Object.keys(users))

// no.6
console.log(Object.values(users))

// no.7
const countries = {
    name: 'Ireland',
    capital: 'Dublin',
    population: '2 million',
    languages: 15,
    printCountries: function(){
        return `${this.name} is populated with over ${this.population} people. It's capital city is ${this.capital} with at least ${this.languages} languages.`
    }
}
console.log(countries.printCountries())