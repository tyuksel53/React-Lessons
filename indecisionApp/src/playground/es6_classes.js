class Person {
    constructor(name='Fatih Tekke', age = 0){
        //this.name = name || 'test';
        this.name = name;
        this.age = age;
    }

    getGrettings() {
        //return 'Hi ' + this.name + ' !';
        return `Hi I'am ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {

    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription() {
        let message = super.getDescription();

        if(this.hasMajor()){
            message = `${message} ${this.major}`
        }

        return message;
    }
}

class Traveler extends Person {

    constructor(name, age, location){
        super(name, age);
        this.location = location;
    }

    hasLocation() {
        return !!this.location;
    }

    getDescription() {
        let message = super.getDescription();

        if(this.hasLocation()) {
            message = `${message} I'am traviling from ${this.location}`
        }

        return message;
    }

}

const traveler1 = new Traveler('Hasan Basri', 20, 'Rize');

console.log(traveler1);

console.log(traveler1.getDescription());

const traveler2 = new Traveler('Ali Babacan', 44);

console.log(traveler2);

console.log(traveler2.getDescription());


/*const me = new Student('Muharrem Ince', 46, 'Siyaset');

console.log(me);

console.log(me.getGrettings() + ". " +me.getDescription(), me.hasMajor());

const other = new Student();

console.log(other.getGrettings() + ". " + other.getDescription(), other.hasMajor());

console.log(other); */