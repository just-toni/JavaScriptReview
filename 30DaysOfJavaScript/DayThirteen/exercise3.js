// no.1
const countries = [
    ['Nigeria', 'Lagos'],
    ['Canada', 'Ottawa'],
    ['France', 'Paris'],
    ['Germany', 'Berlin'],
    ['Ireland', 'Dublin']
];

console.time('While loop');
let count = 0;
while(count < countries.length){
    console.log(countries[count][0], countries[count][1]);
    count++;
}
console.timeEnd('While loop');

console.time('Regular for loop');
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1]);
}
console.timeEnd('Regular for loop');
  
console.time('for of loop');
for (const [name, city] of countries) {
    console.log(name, city);
}
console.timeEnd('for of loop');
  
console.time('forEach loop');
countries.forEach(([name, city]) => {
    console.log(name, city);
})
console.timeEnd('forEach loop');