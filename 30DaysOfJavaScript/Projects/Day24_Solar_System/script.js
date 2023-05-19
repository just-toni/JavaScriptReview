let body = document.querySelector('body');
body.style.cssText = 'background-image: url("/30DaysOfJavaScript/Projects/Day24_Solar_System/images/galaxy.gif"); text-align: center; margin: 0px 100px; color: white;  height: 500px; font-family: Trebuchet MS; font-weight: lighter';
let header = document.querySelector('header');
let title = document.querySelector('h1');
title.style.cssText = 'color: white';
let input = document.querySelector('input');
let planetList = document.querySelector('select');
let planetNames = ['mercury', 'venus', 'earth', 'moon', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];
const planetWeights = [3.7, 8.9, 9.8, 1.6, 3.7, 23.1, 9, 8.7, 11, 7];
const planetImageArray = ["/30DaysOfJavaScript/Projects/Day24_Solar_System/images/mercury.png",
"/30DaysOfJavaScript/Projects/Day24_Solar_System/images/venus.png", "/30DaysOfJavaScript/Projects/Day24_Solar_System/images/earth.png",
"/30DaysOfJavaScript/Projects/Day24_Solar_System/images/moon.png", "/30DaysOfJavaScript/Projects/Day24_Solar_System/images/mars.png",
"/30DaysOfJavaScript/Projects/Day24_Solar_System/images/jupiter.png", "/30DaysOfJavaScript/Projects/Day24_Solar_System/images/saturn.png",
"/30DaysOfJavaScript/Projects/Day24_Solar_System/images/uranus.png", "/30DaysOfJavaScript/Projects/Day24_Solar_System/images/neptune.png",
"/30DaysOfJavaScript/Projects/Day24_Solar_System/images/pluto.png"];
for (let index = 0; index < planetNames.length; index++) {
    const element = planetNames[index];
    let options = document.createElement('option');
    options.setAttribute('value', element);
    options.setAttribute('class', 'planets');
    options.textContent = element.toUpperCase();
    planetList.appendChild(options);
}
let dropDown = document.querySelector('select');
let planetOptions = document.querySelectorAll('option');
let holder = document.querySelector('.none');
let button = document.querySelector('button');
let main = document.querySelector('main');
let content = document.querySelector('div');
let contentImageOverlay = document.querySelectorAll('div')[1];
// contentImageOverlay.style.cssText = "position: fixed; display:block; width: 900px; height: 400px; background-color: rgba(0,0,0,0.5); margin-left: 80px; z-index: 1;";
contentImageOverlay.style.cssText = 'background-color: darkgrey';
let contentImage = document.querySelector('img');
contentImage.style.cssText = 'padding: 20px; width: 350px; top: 10px; left: 10px; z-index: 2;';
let contentDescription = document.querySelectorAll('div')[2];
button.addEventListener('click', e  = () => {
    if(input.value.length <= 0){
        contentImage.style.display = 'none';
        contentDescription.textContent = 'Mass is required';
        contentDescription.style.backgroundColor = 'grey';
    }
    else if(dropDown.value === 'none'){
        contentImage.style.display = 'none';
        contentImageOverlay
        contentDescription.textContent = 'You did not choose a planet yet.';
    }
    else{
        let planet = dropDown.value;
        for (let index = 0; index < planetNames.length; index++) {
            console.log(planetNames[index]);
            if(planetNames[index] === planet){
                contentImage.setAttribute('src', planetImageArray[index]);
                contentImage.style.display = 'block';
                // let innerSection = document.createElement('section');
                // innerSection.setAttribute('id', 'innerSection')
                // let answer = document.createElement('p');
                // answer.innerHTML = `The weight of the object on <span>${planet.toUpperCase()}</span>`;
                // let resultInnerSection = document.createElement('p');
                // resultInnerSection.textContent = (input.value * planetWeights[index]).toFixed(2).concat(' N');
                // console.log(resultInnerSection.textContent);
                // innerSection.appendChild(answer);
                // innerSection.appendChild(resultInnerSection);
                // contentDescription.textContent = `${innerSection}`;
                contentDescription.innerHTML = `
                The weight of the object on <span id="description">${planet.toUpperCase()}</span> <br>
                <span id="answer">${(input.value * planetWeights[index]).toFixed(2).concat(' N')}</span>
                `;
                contentDescription.style.cssText = 'background-color: grey; color: white';
                let description = document.querySelector('#description');
                description.style.cssText = 'font-weight: bolder; font-size: 20pt;';
            }
        }
    }
});