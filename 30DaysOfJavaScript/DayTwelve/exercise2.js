paragraph = `I love teaching. If you do not love teaching what else can you love. 
I love Python if you do not love something which can give you all the capabilities 
to develop an application what else can you love.`
paragraph = paragraph.replaceAll(".", "");
let paragraphArray = paragraph.split(" ");

// find a way to use regex instead.
console.log(paragraphArray)
const mostFrequentWords = (string) => {
    let arrayResult = [];
    let counter = 0;
    for (let index = 0; index < paragraphArray.length; index++) {
        const element = paragraphArray[index];
        let pattern = element;
        paragraphArray.forEach((value) => {
            value === pattern ? 
                {
                word: value, count:++counter 
                }
            : counter = counter; 
        });
        // if(!(arrayResult.includes({
        //     word: element, count:counter 
        //     }))){
            arrayResult.push({
                word: element, count:counter 
            });
        // }
        counter = 0;
    }
    return arrayResult;
}
// arrayResult.sort((a,b) => b.count - a.count)

console.log(mostFrequentWords(paragraph));

let sortArray = mostFrequentWords(paragraph);
sortArray = sortArray.sort((a,b) => b.count - a.count);
console.log(sortArray)


// has duplicates, fix that issue.
const tenMostFrequentWords = (string, size) => {
    let result = [];
    let sortArray = mostFrequentWords(string);
    let i = 0;
    sortArray = sortArray.sort((a,b) => b.count - a.count);
    // while(i < size){
    //     if(!result.includes(sortArray[i])){
    //         result.push(sortArray[i]);
    //         i++;
    //     };
    // }
    for (let index = 0; index < size; index++) {
        const element = sortArray[index];
        if(!result.includes(element)){
            result.push(element);
        }
    }
    return result;
}
console.log(tenMostFrequentWords(paragraph, 10));
