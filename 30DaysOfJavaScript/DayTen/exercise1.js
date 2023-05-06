// no.1
const set = new Set();

// no.2
const set2 = new Set();
for (let index = 0; index <= 10; index++) {
    set2.add(index); 
}
console.log(set2);

// no.3
set2.delete(4);
console.log(set2);

// no.4
let words = ['Toni', 'Ini', 'Ayo', 'Dolly', 'Sage'];
for (const word of words) {
    set.add(word);
}
console.log(set);

// no.5
let countries = [['Tanzania', 8], ['Nigeria', 7], ['Paris', 5]];
const map = new Map(countries);
console.log(map);
