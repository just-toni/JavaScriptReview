let body = document.querySelector('body');
body.style.fontFamily = 'Arial, Helvetica, sans-serif';
body.style.marginRight = '200px'
let outerDiv = document.createElement('div');
let h1 = document.createElement('h1');
h1.style.textAlign = 'center';
let p = document.createElement('p');
p.style.textAlign = 'center';
p.style.textDecoration = 'underline';
body.appendChild(h1);
body.appendChild(p);
h1.textContent = 'Number Generator';
p.innerHTML =  `30DaysOfJavaScript Dom Day2 <br>Author:Toni Adeniyi`
body.appendChild(outerDiv);

outerDiv.style.display = 'flex';
outerDiv.style.flexWrap ='wrap';
outerDiv.style.marginRight = '310px';
outerDiv.style.marginLeft = '100px';
const isPrime = function(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++){ 
        if (n % i == 0){
            return false;
        }
    }
    return true;
}

let innerdiv;
for (let index = 0; index <= 101; index++) {
    innerdiv = document.createElement('div');
    innerdiv.textContent = index;
    if(isPrime(index)){
        innerdiv.style.width = "70px";
        innerdiv.style.height = "50px"
        innerdiv.style.backgroundColor = "lightcoral"
        innerdiv.style.margin = "2px";
        innerdiv.style.fontSize = '25px'
        innerdiv.style.textAlign = 'center'
        innerdiv.style.padding = '10px';
        innerdiv.style.color = 'white';
        outerDiv.appendChild(innerdiv);
    }
    else if(index % 2 === 0){
        innerdiv.style.width = "70px";
        innerdiv.style.height = "50px"
        innerdiv.style.backgroundColor = "greenyellow"
        innerdiv.style.margin = "2px";
        innerdiv.style.fontSize = '25px'
        innerdiv.style.textAlign = 'center'
        innerdiv.style.padding = '10px';
        innerdiv.style.color = 'white';
        outerDiv.appendChild(innerdiv);
    }
    else if(index % 2 !== 0){
        innerdiv.style.width = "70px";
        innerdiv.style.height = "50px"
        innerdiv.style.backgroundColor = "gold"
        innerdiv.style.margin = "2px";
        innerdiv.style.fontSize = '25px'
        innerdiv.style.textAlign = 'center'
        innerdiv.style.padding = '10px';
        innerdiv.style.color = 'white';
        outerDiv.appendChild(innerdiv);
    }
}
