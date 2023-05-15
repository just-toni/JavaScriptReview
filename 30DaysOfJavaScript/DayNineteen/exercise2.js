function holder(){
    const obj = {
        name: 'Jack',
        word: 'BeanStalk'
    };
    function add(){
        obj.age = 2345;
        console.log(obj);
    }
    function replaces(){
        obj.age = 12;
        console.log(obj);
    }
    function remove(){
        delete obj.age;
        console.log(obj);
    }
    return {
        add: add(),
        replaces: replaces(),
        remove: remove()
    }
}
const inners = holder();
console.log(inners.add);
console.log(inners.replaces);
console.log(inners.remove);