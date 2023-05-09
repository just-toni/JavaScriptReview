class Animal {
    constructor(name, age, color, legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    get getName(){
        return this.name;
    }

    set setName(name){
        this.name = name;
    }

    get getAge(){
        return this.age;
    }

    set setAge(age){
        this.age = age;
    }

    get getColor(){
        return this.color;
    }

    set setColor(color){
        this.color = color;
    }

    get getLegs(){
        return this.legs;
    }

    set setLegs(legs){
        this.legs = this.legs;
    }
}

class Cat extends Animal{
    constructor(name, age, color, legs, gender, breed){
        super(name, age, color, legs);
        this.gender = gender;
        this.breed = breed;
    }
}

class Dog extends Animal{
    constructor(name, age, color, legs, gender, breed, qty){
        super(name, age, color, legs);
        this.gender = gender;
        this.breed = breed;
        this.qty = qty;
    }
}

const cat1 = new Cat('Billy', 12, 'ginger', 4);
const dog = new Dog('Bingo', 9, brown, 3, 'M', 'Poodle', 2);