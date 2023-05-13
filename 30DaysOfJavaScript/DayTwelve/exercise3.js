// no.1
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

let pattern = /[^\w+\s]/g
const cleanText = (word) => {
    let newWord = word.replace(pattern, "");
    return newWord;
}

console.log(cleanText(sentence))
sentence = cleanText(sentence).split(" ");

const mostFrequentWords = (string) => {
    let arrayResult = [];
    let counter = 0;
    for (let index = 0; index < sentence.length; index++) {
        const element = sentence[index];
        let pattern = element;
        sentence.forEach((value) => {
            value === pattern ? 
                {
                word: value, count:++counter 
                }
            : counter = counter; 
        });

            arrayResult.push({
                word: element, count:counter 
            });
        counter = 0;
    }
    return arrayResult;
}

const mostFrequentWordsBasedOnInputSize = (string, size) => {
    let result = [];
    let sortArray = mostFrequentWords(string);
    sortArray = sortArray.sort((a,b) => b.count - a.count);
    for (let index = 0; index < size; index++) {
        const element = sortArray[index];
        if(!result.includes(element)){
            result.push(element);
        }
    }
    return result;
}

console.log(mostFrequentWordsBasedOnInputSize(sentence, 3));
