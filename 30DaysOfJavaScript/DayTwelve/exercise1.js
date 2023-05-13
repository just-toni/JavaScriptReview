// no.1
const text = `He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.`;
const matches = text.match(/\d+/g);
console.log(matches);
console.log(matches.reduce((assn, consc) =>  Number.parseInt(assn) + Number.parseInt(consc)));

// no.2
const info = `The position of some particles on the horizontal x-axis -1, 2, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction`;
const points = info.match(/-?\d+/g);
console.log(points);
console.log(points.sort((a,b) => a-b));
console.log(points[points.length - 1] - points[0]);

// no.3
const pattern = /[A-Za-z]/;