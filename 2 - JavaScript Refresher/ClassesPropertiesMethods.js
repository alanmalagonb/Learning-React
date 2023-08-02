// Properties
// "variables attached to classes/objects"

// ES6
constructor(){
    this.myProperty = 'value'
}

// ES7
myProperty = 'value'

// Methods
// "functions attached to classes/objects"

// ES6
myMethod(){
    // ...
}

// ES7
myMethod = () => {
    // ...
}

// Example

class Human {
    gender = 'male';
    
    printGender = () => {
        console.log(this.gender);
    }
}

class PersonClass{
    name = 'Alan';

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();