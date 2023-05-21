let body = document.querySelector('body');
let main = document.createElement('main');
body.appendChild(main);
body.style.cssText = 'text-align:center; color: white';
let title = document.createElement('h1');
title.textContent = 'World Countries List';
let firstSection = document.createElement('section');
firstSection.setAttribute('id', 'firstSection');
firstSection.appendChild(title);
firstSection.style.cssText = 'background-image: url("../img/globe.jpg"); background-repeat: no-repeat; height: 400px; background-size:cover; background-position:center; margin: -8px; padding: 40px;'
let secondSection = document.createElement('section');
secondSection.setAttribute('id', 'secondSection');
main.appendChild(firstSection);
main.appendChild(secondSection);
let subtitle = document.createElement('h4');
subtitle.textContent = `Total number of countries: ${countries_data.length}`;
firstSection.appendChild(subtitle);
let startingWordButton = document.createElement('button');
startingWordButton.textContent = 'STARTING WORD';
let searchWithAnyWordButton = document.createElement('button');
searchWithAnyWordButton.textContent = 'SEARCH WITH ANY WORD';
let orderButton = document.createElement('button');
orderButton.textContent = `v`;
let buttonContainer = document.createElement('section');
buttonContainer.setAttribute('id', 'buttonContainer');
buttonContainer.appendChild(startingWordButton);
buttonContainer.appendChild(searchWithAnyWordButton);
buttonContainer.appendChild(orderButton);
firstSection.appendChild(buttonContainer);
let searchSection = document.createElement('section');
firstSection.appendChild(searchSection);
let input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Search country...');
input.style.cssText = 'width: 350px; border-radius: 10px; padding: 5px; text-align: center;'
let searchButton = document.createElement('button');
let buttonImage = document.createElement('img');
buttonImage.setAttribute('src', '../img/search.png');
buttonImage.setAttribute('alt', 'Search icon');
buttonImage.style.cssText = 'width: 18px;';
searchButton.appendChild(buttonImage);
searchSection.appendChild(input);
searchSection.appendChild(searchButton);
secondSection.style.cssText = 'background-color: grey; margin: -8px;';
let outerSection = document.createElement('section');
outerSection.style.cssText = 'display: flex; flex-wrap: wrap; padding: 55px 75px; justify-content: space-around;';
secondSection.appendChild(outerSection);
for (let index = 0; index < countries_data.length; index++) {
    const element = countries_data[index];
    innerdiv = document.createElement('div');
    innerdiv.textContent = element.name;
    innerdiv.style.cssText = 'background-image: url("../img/world-map.jpg"); background-size: contain; width: 100px; height: 80px; text-transform: uppercase; border: 2px solid lightgrey; margin: 9px 20px; font-size: 8pt; font-weight: bold; border-radius: 5px; height: 110px; width:100px';
    outerSection.appendChild(innerdiv);
}


startingWordButton.addEventListener('click', e => {
    const filtered = [];
    if(input.value.length > 1){
        secondSection.textContent = 'Input has to be a single letter!';
    }
    else {
        countries_data.filter(item => {
            item.name.startsWith(input.value.toUpperCase()) ? filtered.push(item.name) : '';
        });
        filtered.forEach(value => {
            innerdiv = document.createElement('div');
            innerdiv.textContent = value;
            innerdiv.style.cssText = 'background-image: url("../img/world-map.jpg"); background-size: contain; width: 100px; height: 80px; text-transform: uppercase; border: 2px solid lightgrey; margin: 9px 20px; font-size: 8pt; font-weight: bold; border-radius: 5px; height: 110px; width:100px';
            outerSection.appendChild(innerdiv);
        });
        let length = document.createElement('h6');
        length.textContent = `Countries containing ${input.value} are ${filtered.length}`;
        subtitle.append(length);
    }
});

searchWithAnyWordButton.addEventListener('click', e => {
    const filteredAll = [];
    console.log(input.value);
    countries_data.filter(item => {
        item.name.includes(input.value.toUpperCase()) ? filteredAll.push(item.name) : console.log(item.name);
    });
    filteredAll.forEach(value => {
        console.log(value);
        innerdiv = document.createElement('div');
        innerdiv.textContent = value;
        innerdiv.style.cssText = 'background-image: url("../img/world-map.jpg"); background-size: contain; width: 100px; height: 80px; text-transform: uppercase; border: 2px solid lightgrey; margin: 9px 20px; font-size: 8pt; font-weight: bold; border-radius: 5px; height: 110px; width:100px';
        outerSection.appendChild(innerdiv);
    });
});

orderButton.addEventListener('click', e => {
    orderButton.textContent = '^';
    let sorted_desc = countries_data.sort((a,b) => b.name > a.name);
    for (let index = sorted_desc.length - 1; index >= 0; index--) {
        const element = sorted_desc[index];
        console.log(element.name);
        innerdiv = document.createElement('div');
        innerdiv.textContent = element.name;
        innerdiv.style.cssText = 'background-image: url("../img/world-map.jpg"); background-size: contain; width: 100px; height: 80px; text-transform: uppercase; border: 2px solid lightgrey; margin: 9px 20px; font-size: 8pt; font-weight: bold; border-radius: 5px; height: 110px; width:100px';
        outerSection.appendChild(innerdiv);
    };
});

orderButton.addEventListener('dblclick', e => {
    orderButton.textContent = 'v';
    let sorted_asc = countries_data.sort((a,b) => b.name > a.name);
    for (let index = 0; index < sorted_asc.length; index++) {
        const element = sorted_asc[index];
        console.log(element.name);
        innerdiv = document.createElement('div');
        innerdiv.textContent = element.name;
        innerdiv.style.cssText = 'background-image: url("../img/world-map.jpg"); background-size: contain; width: 100px; height: 80px; text-transform: uppercase; border: 2px solid lightgrey; margin: 9px 20px; font-size: 8pt; font-weight: bold; border-radius: 5px; height: 110px; width:100px';
        outerSection.appendChild(innerdiv);
    };
});