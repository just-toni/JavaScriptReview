class Animal {
    constructor(name, age, color, legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
        this.kids = [];
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
    
    get getKids(){
        return this.kids.length;
    }

    set setKids(kid){
        this.kids.push(kid);
    }

    getInfo(){
        let kidsFormat;
        if(this.getKids <= 0){
            kidsFormat = 'I have no kids'
        }
        else if (this.getKids == 1){ kidsFormat = `I have ${this.getKids} kid`}
        else kidsFormat = `I have ${this.getKids} kids`
        return `My name is ${this.getName} and I am ${this.getAge} months old. I am ${this.getColor} in color and ${kidsFormat}` ;
    }
}

const animal1 = new Animal('Tosd', 36, 'blue', 2);
animal1.setKids = new Animal('Ty', 1, 'light-blue', 2);
console.log(animal1.getKids);
console.log(animal1);
console.log(animal1.getInfo());

class Cat extends Animal{
    constructor(name, age, color, legs, gender, breed){
        super(name, age, color, legs);
        this.gender = gender;
        this.breed = breed;
    }

    get getGender(){
        return this.gender;
    }

    set setGender(gender){
        this.gender = gender;
    }

    get getBreed(){
        return this.breed;
    }

    set setBreed(breed){
        this.breed = breed;
    }

    getInfo(){
        if(this.gender !== undefined || this.breed !== undefined){
            return `My name is ${this.getName} and I am ${this.getAge} months old. I am ${this.getColor} in color and I am a ${this.getGender}. I am a ${this.getBreed} cat.` ;
        }
        else return super.getInfo();
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
console.log(cat1.getInfo());
const dog = new Dog('Bingo', 9, 'brown', 3, 'M', 'Poodle', 2);