// no.1
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
fetch(catsAPI).then(response => response.json()).then(data => {
    data.forEach(element => {
        console.log(element.name);
        let sum = 0;
        let first = Number.parseInt(element.weight.metric[0]);
        let last = Number.parseInt(element.weight.metric[4]);
        let range = last - first;
        for (let index = first; index <= last; index++) {
            sum+=index;
        }
        console.log(`Average mertic unit weight of this cat is ${(sum/range).toFixed(2)}`)
    });
}).catch(err => console.error(err));

// no.2
const countriesAPI = 'https://restcountries.com/v2/all';

const fetch10LargestCountries = async () => {
    try{
        const response = fetch(countriesAPI);
        const countries = (await response).json();
        countries.then(data => {
            const sorted = data.sort((a,b) => b.area > a.area ? 1 : -1);
            sorted.filter((country, index) => index < 10 ? console.log(country.name) : "");
        })
    }
    catch(err){
        console.error(err);
    }
}
fetch10LargestCountries();

// no.3
const fetchSumOfOfficialLanguages = async () => {
    try{
        const response = fetch(countriesAPI);
        const countries = (await response).json();
        countries.then(data => {
            let counter = 0;
            const officialLang = [];
            data.forEach(element => {
                element.languages.forEach(lang => {
                    if(!officialLang.includes(lang.name)){
                        officialLang.push(lang.name);
                    }
                })
            });
            console.log(`The sum of languages in the world used of officials are ${officialLang.length}`);
        })
    }
    catch(err){
        console.error(err);
    }
}
fetchSumOfOfficialLanguages();
