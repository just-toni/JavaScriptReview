const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
// no.3
const allCountries = countries.forEach((country) => console.log(country))

// no.4
const allNames = names.forEach((name) => console.log(name))

// no.5
const allNumbers = numbers.forEach((number) => console.log(number))

// no.6
const allCountriesInUpperCase = countries.map((country) => console.log(country.toUpperCase()))

// no.7
const allCountriesLength = countries.map((country) => console.log(country.length))

// no.8
const allNumbersSquared = numbers.map((number) => console.log(number **2))

// no.9
const allNmesUpperCase = names.map((name) => console.log(name.toUpperCase()))

// no.11
const allCountriesWithLand = countries.filter((country) => console.log(country.endsWith('land')))

// no.12
const allCountriesLenghtEqualsSix = countries.filter((country) => console.log(country.length === 6))

// no.13
const allCountriesLenghtGreaterThanOrEqualsSix = countries.filter((country) => console.log(country.length >= 6))

// no.14
const allCountriesStartingWithE = countries.filter((country) => console.log(country.startsWith('E')))

// no.15
const allProductsPriceWithNumbers = products.filter((prices) => {
    if(typeof prices.price === 'number'){
        console.log(prices.price)
    }
})

// no.16
function getStringLists(array){
    const answer = array.forEach((element) => {
        if(typeof element === 'string'){
            console.log(element)
        }
    })
}
getStringLists(names)

// no.17
const sumOfAllNumbers = numbers.reduce((assn, consc) => (assn + consc), 0)
console.log(sumOfAllNumbers)

// no.18
// const sentence = countries.reduce((assn, consc) => console.log(`Estonia ${assn.concat(consc)} are north European countries`))

// no.20
const allNamesWithLengthGreaterThanSeven = names.some((name) => console.log(name.length > 7))

// no.21
const allCountriesWithWordLand = countries.every((name) => name.endsWith('land'))
console.log(allCountriesWithWordLand)

// no.23
const firstCountryWithSixLetters = countries.find((country) => country.length === 6)
console.log(firstCountryWithSixLetters)

// no.24
const firstCountryIndexWithSixLetters = countries.findIndex((country) => country.length === 6)
console.log(firstCountryIndexWithSixLetters)

// no.25
const countryNorwayIndexIfPresent = countries.findIndex((country) => country === 'Norway')
console.log(countryNorwayIndexIfPresent)

// no.26
const countryRussiaIndexIfPresent = countries.findIndex((country) => country === 'Russia')
console.log(countryRussiaIndexIfPresent)