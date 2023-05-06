const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// no.1
const seta = new Set(a);
const setb = new Set(b);
const union = [...a, ...b]
const setc = new Set(union);
console.log(setc);

// no.2
const intersection = a.filter((num) => setb.has(num))
const setd = new Set(intersection);
console.log(setd);

// no.3
const witH = a.filter((num) => !setb.has(num))
const sete = new Set(witH);
console.log(sete);