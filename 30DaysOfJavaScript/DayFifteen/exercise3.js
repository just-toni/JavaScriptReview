class Statistics{

    constructor(array){
        this.array = array;
    }

    describe(){

    }
    count(){
        return this.array.length;
    }
    sum(){
        let sum = 0;
        for (let index = 0; index < this.array.length; index++) {
            const element = this.array[index];
            sum += element;
        }
        return sum;
    }
    min(){
        let min = ages[0];
        for (let index = 0; index < this.array.length; index++) {
            const element = this.array[index];
            min = Math.min(min, element);
        }
        return min;
    }
    max(){
        let max = ages[0];
        for (let index = 0; index < this.array.length; index++) {
            const element = this.array[index];
            max = Math.max(max, element);
        }
        return max;
    }
    range(){
        return this.max()-this.min();
    }
    mean(){
        return this.sum() /this.count();
    }
    median(){
        let median1 = (this.array.length / 2) - 1;
        let median = 13;
        return this.array[median];
    }    
    var(){
        let sumvar = 0;
        for (let index = 0; index < this.array.length; index++) {
            const element = this.array[index];
            sumvar += ((element - this.mean()) ** 2);
        }
        let meanvar = sumvar / this.count();
        return meanvar;
    }
    std(){
        let sumstd = 0;
        for (let index = 0; index < this.array.length; index++) {
            const element = this.array[index];
            sumstd += ((element - this.mean()) ** 2);
        }
        let meanstd = sumstd / this.count();
        return Math.sqrt(meanstd);
    }
    freqDist(){
        this.array = this.array.sort();
        let resultObj = {};
        let resultArray = [];
        let resultSet = new Set;
        for (let index = 0; index < this.array.length; index++) {
            const element = this.array[index];
            let counter = 0;
            for (let j = 0; j < this.array[index]; j++) {
                const element2 = this.array[j];
                if(element === element2){
                    counter++;
                    console.log(counter);
                }
            }
            // if(!resultArray.includes({element, counter})){
                resultSet.add({value: element,freq: counter});
            // }
        }
        // resultSet.add(resultArray);
        return resultSet;
    }
    describe(){
        console.log('Count:', this.count()) // 25
        console.log('Sum: ', this.sum()) // 744
        console.log('Min: ', this.min()) // 24
        console.log('Max: ', this.max()) // 38
        console.log('Range: ', this.range()) // 14
        console.log('Mean: ', this.mean()) // 30
        console.log('Median: ',this.median()) // 29
        // console.log('Mode: ', this.mode()) // {'mode': 26, 'count': 5}
        console.log('Variance: ',this.var()) // 17.5
        console.log('Standard Deviation: ', this.std()) // 4.2
        console.log('Frequency Distribution: ',this.freqDist())
    }
}

let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = new Statistics(ages);
statistics.describe();
console.log(statistics.freqDist());



