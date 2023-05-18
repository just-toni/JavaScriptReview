let h1 = document.createElement('h1');
h1.innerHTML = 'Press any keyboard key <span id="input"></span>';
h1.style.cssText = 'border: 1px none grey; padding: 25px; box-shadow: 1px 1px 1px 1px grey';
let body = document.querySelector('body');
body.style.cssText = 'text-align: center; margin: 260px 400px; font-family: Trebuchet MS;'
let h2 = document.createElement('h2');
body.appendChild(h1);
body.addEventListener('keypress', e => {
    h1.innerHTML = `You pressed <span id="input">${e.key}</span>`;
    let input = document.getElementById('input');
    input.style.cssText = 'color: green;'
    h2.textContent = e.key.charCodeAt(0);
    h2.style.cssText = 'color: green; font-size: 40pt; border: 1px solid grey; padding: 50px 0px; height: 60px; width: 120px; margin-top: 20px; box-shadow: 10px grey; margin-left: 190px; border-radius: 5px; font-weight: bolder';
    body.style.margin = '200px 400px';
    body.appendChild(h1);
    body.appendChild(h2);
});

