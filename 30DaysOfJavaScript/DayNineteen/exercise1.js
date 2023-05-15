const add = (num) => {
    let value = Math.floor(Math.random()*9);
    function doSomething(){
        return num * value;
    }
    return doSomething();
}
console.log(add(8));