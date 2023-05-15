const countriesAPI = 'https://restcountries.com/v2/all';

// const fetchData = async () => {
//     try{
//         const res = await fetch(countriesAPI);
//         const lang = await res.json();
//         console.log(
//             lang.forEach(
//                 element => {
//                     let languages =[];
//                     element.languages.forEach(value => {
//                         languages.push(value.name);
//                     }
//                     );
//                     console.log(languages);
//                 }
//             )
//         )
//     }
//     catch(err){
//         console.error(err); 
//     }
// }
// fetchData();

const language = fetch(countriesAPI).then(response => response.json()).then(data => {
    data.forEach(element => {
        let languages =[];
        element.languages.forEach(value => {
            languages.push(value.name);
        }
        );
        console.log(languages);
    });
}).catch(err => console.error(err));

fetch(countriesAPI).then(response => response.json()).then(data => {
    data.forEach(element => {
        console.log(`Name: ${element.name}, 
Capital: ${element.capital}, 
Languages: ${language}, 
Population: ${element.population}, 
Area: ${element.area}.`);
    });
}).catch(err => console.error(err));

fetch(countriesAPI).then(response => response.json()).then(data => {
    data.forEach(element => {
        console.log(element);
    });
}).catch(err => console.error(err));

const filterFunction = (key, value) => {
    key === 'name' && key === 'capital' && key === 'languages' && key === 'population' && key === 'area';
}

fetch(countriesAPI).then(response => response.json()).then(data => {
    Object.keys(data).reduce((acc, key) =>{
        const value = data[key];
        if(filterFunction(key, value)){
            acc[key] = value;
        }
        return acc;
    }, {})
}).catch(err => console.error(err));

console