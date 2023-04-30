// no.2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const array = text.split('.')
const words = text.split(' ')
console.log(words)
console.log(words.length)

// no.3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
// shoppingCart.pop()
shoppingCart.splice(4,1)
shoppingCart.splice(2, 1, 'Green Tea')
console.log(shoppingCart)

// no.4
countries.includes('Ethopia') ? console.log('ETHOPIA') : countries.push('Ethopia')

// no.5
webTechs.indexOf('Sass') === -1 ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass')
console.log(webTechs)

// no.6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
fullStack = frontEnd.concat(backEnd)
console.log(fullStack)