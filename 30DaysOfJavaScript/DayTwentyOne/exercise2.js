// no.1
const paras = document.querySelectorAll('p');
// console.log(paras);
paras.forEach((item, index) => {
    if (index === 0){
        item.style.color = 'blue';
        item.style.backgroundColor = 'grey';
        item.style.border = '5px solid black';
        item.style.fontSize = '20px';
        item.style.fontFamily = 'serif';
    }
    else if (index === 1){
        item.style.color = 'red';
        item.style.backgroundColor = 'grey';
        item.style.border = '5px none black';
        item.style.fontSize = '25px';
        item.style.fontFamily = 'Georgia';
    }
    else if (index === 2){
        item.style.color = 'yellow';
        item.style.backgroundColor = 'grey';
        item.style.border = '5px dashed black';
        item.style.fontSize = '15px';
        item.style.fontFamily = 'Arial';
    }
    else{
        item.style.color = 'green';
        item.style.backgroundColor = 'grey';
        item.style.border = '5px dotted black';
        item.style.fontSize = '10px';
        item.style.fontFamily = 'Times New Roman';
    }
})

// no.2
paras.forEach((item, index) => {
    if (index % 2 === 0){
        item.style.color = 'red';
    }
    else{
        item.style.color = 'green';
    }
})

// no.3
paras.forEach((item, index) => {
    if (index === 0){
        item.textContent = 'This is a random sentence with a p tag'
        item.setAttribute('id', 'p1');
        item.classList.add('plist');
    }
    else if (index === 1){
        item.textContent = 'fegrjhtklh;ijokfghgjklkdf eukhweutghsdj jvwtyto;ewvgugiu'
        item.setAttribute('id', 'p2');
        item.classList.add('plist');
    }
    else if (index === 2){
        item.textContent = 'fhgjhkl;'
        item.setAttribute('id', 'p3');
        item.classList.add('plist');
    }
    else{
        item.textContent = 'jyhsf vpiypo;hgvb hiyuy weho;l jhvdb yt7appo'
        item.setAttribute('id', 'p4');
        item.classList.add('plist');
    }
})