let body = document.querySelector('body');
body.style.cssText = 'text-align: center; font-family: Trebuchet MS; font-weight: lighter;';
let headingSection = document.createElement('section');
let h1 = document.querySelector('h1');
h1.style.cssText = 'color: lime; font-size: 20pt; font-weight: bold; margin-bottom: -10px;';
let h2 = document.querySelector('h2');
h2.style.cssText = 'font-size: 14pt; font-weight: lighter; margin-bottom: -10px;';
let h3 = document.querySelector('h3');
h3.style.cssText = 'font-size: 11pt; font-weight: lighter;';
headingSection.appendChild(h1);
headingSection.appendChild(h2);
headingSection.appendChild(h3);
let mainDiv = document.querySelector('div');
body.insertBefore(headingSection, mainDiv);
let form = document.createElement('section');
mainDiv.appendChild(form);
let input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Generate more numbers...');
input.style.cssText = 'width: 400px;  height: 20px; border: 1.5px solid lime; padding: 8px';
let button = document.createElement('button');
button.textContent = 'Generate numbers'
button.style.cssText = 'background-color: lime; padding: 9px; margin-left: 10px; color:white;';
form.appendChild(input);
form.appendChild(button);
let output = document.createElement('section');
mainDiv.appendChild(output);
output.style.display = 'flex';
output.style.flexWrap ='wrap';
output.style.marginRight = '200px';
output.style.marginLeft = '200px';
let errorMessage = document.createElement('p');
errorMessage.style.cssText = 'color: red; font-size: 8pt; margin-top: -5px; text-align:left; margin-left:352px';
const isPrime = function(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++){ 
        if (n % i == 0){
            return false;
        }
    }
    return true;
}
// for (let index = 0; index <= 50; index++) {
//     errorMessage.style.display = 'none';
//     innerdiv = document.createElement('div');
//     innerdiv.textContent = index;
//     if(isPrime(index)){
//         innerdiv.style.width = "70px";
//         innerdiv.style.height = "20px"
//         innerdiv.style.backgroundColor = "lightcoral"
//         innerdiv.style.margin = "2px";
//         innerdiv.style.fontSize = '25px'
//         innerdiv.style.textAlign = 'center'
//         innerdiv.style.padding = '10px';
//         innerdiv.style.color = 'white';
//         output.appendChild(innerdiv);
//     }
//     else if(index % 2 === 0){
//         innerdiv.style.width = "70px";
//         innerdiv.style.height = "20px"
//         innerdiv.style.backgroundColor = "greenyellow"
//         innerdiv.style.margin = "2px";
//         innerdiv.style.fontSize = '25px'
//         innerdiv.style.textAlign = 'center'
//         innerdiv.style.padding = '10px';
//         innerdiv.style.color = 'white';
//         output.appendChild(innerdiv);
//     }
//     else if(index % 2 !== 0){
//         innerdiv.style.width = "70px";
//         innerdiv.style.height = "20px"
//         innerdiv.style.backgroundColor = "gold"
//         innerdiv.style.margin = "2px";
//         innerdiv.style.fontSize = '25px'
//         innerdiv.style.textAlign = 'center'
//         innerdiv.style.padding = '10px';
//         innerdiv.style.color = 'white';
//         output.appendChild(innerdiv);
//     }
// }
button.addEventListener('click', e = () => {
    if(input.value.length === 0){
        errorMessage.textContent = 'Enter a number value in the input field to generate numbers';
        headingSection.appendChild(errorMessage);
    }
    else if(typeof input.value !== Number){
        errorMessage.textContent = 'Input must be a number';
        headingSection.appendChild(errorMessage);
    }
    for (let index = 0; index <= input.value; index++) {
        errorMessage.style.display = 'none';
        innerdiv = document.createElement('div');
        innerdiv.textContent = index;
        if(isPrime(index)){
            innerdiv.style.width = "70px";
            innerdiv.style.height = "20px"
            innerdiv.style.backgroundColor = "lightcoral"
            innerdiv.style.margin = "2px";
            innerdiv.style.fontSize = '25px'
            innerdiv.style.textAlign = 'center'
            innerdiv.style.padding = '10px';
            innerdiv.style.color = 'white';
            output.appendChild(innerdiv);
        }
        else if(index % 2 === 0){
            innerdiv.style.width = "70px";
            innerdiv.style.height = "20px"
            innerdiv.style.backgroundColor = "greenyellow"
            innerdiv.style.margin = "2px";
            innerdiv.style.fontSize = '25px'
            innerdiv.style.textAlign = 'center'
            innerdiv.style.padding = '10px';
            innerdiv.style.color = 'white';
            output.appendChild(innerdiv);
        }
        else if(index % 2 !== 0){
            innerdiv.style.width = "70px";
            innerdiv.style.height = "20px"
            innerdiv.style.backgroundColor = "gold"
            innerdiv.style.margin = "2px";
            innerdiv.style.fontSize = '25px'
            innerdiv.style.textAlign = 'center'
            innerdiv.style.padding = '10px';
            innerdiv.style.color = 'white';
            output.appendChild(innerdiv);
        }
    }
})


