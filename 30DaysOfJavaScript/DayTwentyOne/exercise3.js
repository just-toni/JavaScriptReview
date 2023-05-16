const div = document.querySelector('div');
div.innerHTML = '<h1>Asabeneh Yetayeh challenges in 2020</h1> <h2>30DaysOfJavaScript Challenge</h2> <p></p> <ul><li>30DaysOfPython Challenge Done</li><li>30DaysOfJavaScript Challenge Ongoing</li><li>30DaysOfReact Challenge Coming<li>30DaysOfFullStack Challenge Coming</li><li>30DaysOfDataAnalysis Challenge Coming</li><li>30DaysOfReactNative Challenge Coming</li><li>30DaysOfMachineLearning Challenge Coming</li></ul>';

const body = document.querySelector('body');
body.style.textAlign = 'center';
body.style.fontFamily = 'Trebuchet MS';
const ul = document.querySelector('ul');
ul.style.listStyleType = 'none';

const h1 = document.querySelector('h1');
h1.innerHTML = 'Asabeneh Yetayeh challenges in <span id="year">2020<span>';
const year = document.querySelector('span');

const colorSwitcherForYear = () => {
    let first = Math.floor(Math.random() * 255);
    let second = Math.floor(Math.random() * 255);
    let third = Math.floor(Math.random() * 255);
    let rgb = `rgb(${first}, ${second}, ${third})`;
    year.style.color = rgb;
}
setInterval(colorSwitcherForYear, 1000);

const h2 = document.querySelector('h2');
h2.style.textDecoration = 'underline';
const p = document.querySelector('p');
const month = (number) => {
    if(number === 0){
        return 'January'
    }
    else if(number === 1){
        return 'February'
    }
    else if(number === 2){
        return 'March'
    }
    else if(number === 3){
        return 'April'
    }
    else if(number === 4){
        return 'May'
    }
    else if(number === 5){
        return 'June'
    }
    else if(number === 6){
        return 'July'
    }
    else if(number === 7){
        return 'August'
    }
    else if(number === 8){
        return 'September '
    }
    else if(number === 9){
        return 'October'
    }
    else if(number === 10){
        return 'November'
    }
    else return 'December'
}
const hours = (hour) => {
    let result = '0'
    if(hour < 10){
        return result + hour
    }
    else return hour;
}
const minutes = (minute) => {
    let result = '0'
    if(minute < 10){
        return result + minute
    }
    else return minute;
}
const seconds = (second) => {
    let result = '0'
    if(second < 10){
        return result + second
    }
    else return second;
}
p.innerHTML = month(new Date().getMonth()) + " " + new Date().getDate() + ", " + new Date().getFullYear()
+ " " + hours(new Date().getHours()) + ":" + minutes(new Date().getMinutes()) + ":" + seconds(new Date().getSeconds());

const colorSwitcherForDate = () => {
    let first = Math.floor(Math.random() * 255);
    let second = Math.floor(Math.random() * 255);
    let third = Math.floor(Math.random() * 255);
    let rgb = `rgb(${first}, ${second}, ${third})`;
    p.style.backgroundColor = rgb;
}
setInterval(colorSwitcherForDate, 1000);
p.style.width = "200px";
p.style.margin = "0 auto";
p.style.padding = '5px';

ul.style.marginLeft = '270px';
const lists = document.querySelectorAll('li');
lists.forEach((item) => {
    if(item.textContent.includes('Done')){
        item.style.backgroundColor = 'greenyellow';
        item.style.padding = '10px';
        item.style.margin = '5px';
        item.style.width = '600px';
        item.style.textAlign = 'left';
    }
    else if(item.textContent.includes('Ongoing')){
        item.style.backgroundColor = 'gold';
        item.style.padding = '10px';
        item.style.margin = '5px';
        item.style.width = '600px';
        item.style.textAlign = 'left';
    }
    else {
        item.style.backgroundColor = 'lightcoral';
        item.style.padding = '10px';
        item.style.margin = '5px';
        item.style.width = '600px';
        item.style.textAlign = 'left';
        item.style.fontSize = '12pt';
    }
});