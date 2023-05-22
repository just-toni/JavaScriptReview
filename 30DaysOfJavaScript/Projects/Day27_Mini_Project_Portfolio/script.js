let body = document.querySelector('body');
let transitionSection = document.createElement('section');
// body.insertBefore(transitionSection, document.querySelector('p'));
transitionSection.setAttribute('id', 'text');
// text.style.cssText = "width: 100px; height: 100px; background-color: red; position: relative; animation: slide-in 1s ease-in-out 0s 1;";
const titles = [
    'intrustor',
    'motivational speaker',
    'programmer',
    'content creator',
    'educator',
    'motivator'
];
const titleIcon = [
    "../Day27_Mini_Project_Portfolio/img/book.png", "../Day27_Mini_Project_Portfolio/img/fire.jpg",
    "../Day27_Mini_Project_Portfolio/img/laptop.png", "../Day27_Mini_Project_Portfolio/img/closedbook.jpg",
    "../Day27_Mini_Project_Portfolio/img/leaf.png", "../Day27_Mini_Project_Portfolio/img/fire.jpg"
];
const titleIconAlt = ["Book emoji", "Fire emoji", "Laptop emoji", "Closed Book emoji", "Leaf emoji", "Fire emoji"];

setInterval(displayAnimation, 1000);

function displayAnimation() {
    let index = Math.floor(Math.random() * titleIcon.length);
    const element = titles[index];
    transitionSection.textContent = '';
    let text_img = document.createElement('img');
    let text_title = document.createElement('p');
    text_title.setAttribute('id', 'text-title')
    transitionSection.appendChild(text_img);
    transitionSection.appendChild(text_title);
    text_title.textContent = element;
    text_img.setAttribute('src', titleIcon[index]);
    text_img.setAttribute('alt', titleIconAlt[index]);
}
body.appendChild(transitionSection);