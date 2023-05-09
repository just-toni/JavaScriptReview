try {
    let lastName = 'Blah';
    let fullName = fistName + ' ' + lastName;
}
catch (err) {
    console.log(err);
};

try {
    let lastName = 'Cathsaq';
    let fullName = fistName + ' ' + lastName;
}
catch (err) {
    console.error(err);
}
finally{
    console.log('I would always be displayed!');
};

try {
    let array1 = [1,2,3,4,5,6,7,8,9,0];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.table(array);
    }
}
catch (err) {
    console.log('Type of error:',err.name);
    console.log('Error message:',err.message);
}
finally{
    console.log('I would always be displayed!');
};

try {
    let array1 = [1,2,3,4,5,6,7,8,9,0];
    for (let index = 0; index < array1.length; index++) {
        const element = array1[index];
        console.table(element.toUpperCase());
    }
}
catch (err) {
    console.log('Type of error:',err.name);
    console.log('Error message:',err.message);
}
finally{
    console.log('I would always be displayed!');
};

// throw 'Error 404';
// throw 43;
// throw false;
// throw new Error('Mandatory');
// throw new SyntaxError('Incorrect expression entered!');

const throwExceptionExample = () => {
    let message;
    let input = prompt("Enter a number: ");
    try{
        if(input === '') throw 'EMPTY';
        if(isNaN(input)) throw "Not a number";
        input = Number(input);
        if(input > 100) throw true;
        if(input < 100) throw false;
    }
    catch(err){
        console.log(err);
    }
}
throwExceptionExample();
// console.log(throwExceptionExample());