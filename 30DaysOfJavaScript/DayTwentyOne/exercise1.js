// no.1
const p = document.querySelector('p');
console.log(p);

// no.2
const p1 = document.querySelector('#p1');
console.log(p1);
const p2 = document.querySelector('#p2');
console.log(p2);
const p3 = document.querySelector('#p3');
console.log(p3);
const p4 = document.querySelector('#p4');
console.log(p4);

// no.3
const allPs = document.querySelectorAll('p');
console.log(allPs);

// no.4
allPs.forEach(item =>  console.log(item.textContent));

// no.5
p4.textContent = 'Fourth paragraph';
console.log(p4);

// no.6
p1.setAttribute('class', 'paras');
p1.id = 'para1';
p2.setAttribute('class', 'paras');
p2.id = 'para2';
p3.setAttribute('class', 'paras');
p3.id = 'para3';
p4.setAttribute('class', 'paras');
p4.id = 'para4';
