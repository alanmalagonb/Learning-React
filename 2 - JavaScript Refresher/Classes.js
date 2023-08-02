class Person{
    // Property
    name = 'Alan'
    // Method
    call = () => {
        // ...
    }
}

// Usage
const myPerson = new Person()
myPerson.call()
console.log(myPerson.name)

// Inheritance
//class Person extends Master

// Example

class Human {
    constructor(){
        this.gender = 'male';
    }
    printGender(){
        console.log(this.gender);
    }
}

class PersonClass{
    constructor(){
        super()
        this.name = 'Alan';
    }
    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();