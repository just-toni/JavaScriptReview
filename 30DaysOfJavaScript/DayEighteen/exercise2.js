const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch(catsAPI).then(response => response.json()).then(data => {
    data.forEach(element => {
        console.log(element.name);
    });
}).catch(err => console.error(err));