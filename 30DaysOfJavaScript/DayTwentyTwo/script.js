let h4 = document.querySelector('h4');
h4.textContent = `Total Number of countries: ${countries.length}`;
h4.style.fontSize = '10pt';
h4.style.marginBottom = '-8px';
h4.style.marginTop = '-30px';

let body = document.querySelector('body');
body.style.textAlign = 'center';
body.style.fontFamily = 'Trebuchet MS';

let h3 = document.querySelectorAll('h3');
h3[0].style.fontSize = '8pt';
h3[0].style.marginBottom = '-10px';
h3[0].style.fontWeight = 'lighter'
h3[1].style.fontSize = '8pt';
h3[1].style.marginBottom = '45px';
h3[1].style.fontWeight = 'lighter'

let h2 = document.querySelector('h2');
h2.style.textTransform = 'uppercase';
h2.style.letterSpacing = '5px';
h2.style.fontSize = '40px'

let mainDiv = document.querySelectorAll('div');
mainDiv[1].style.display = 'flex';
mainDiv[1].style.flexWrap ='wrap';
mainDiv[1].style.margin = '0 292px';
for (let index = 0; index < countries.length; index++) {
    const element = countries[index];
    innerdiv = document.createElement('div');
    innerdiv.textContent = element;
    innerdiv.style.width = "100px";
    innerdiv.style.height = "80px"
    innerdiv.style.textTransform = 'uppercase';
    innerdiv.style.border = '2px solid lightgrey';
    innerdiv.style.margin = "3px";
    innerdiv.style.fontSize = '8pt';
    innerdiv.style.fontWeight = 'bold';
    mainDiv[1].appendChild(innerdiv);
}