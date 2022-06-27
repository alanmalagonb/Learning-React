const number = 1;
const num2 = number;

console.log(num2);

// Copy Pointer 

const person = {
    name: 'Max'
};
const secondPerson = person;
person.name = 'Manu';
console.log(secondPerson); 
/*
[object Object] {
    name: "Manu"
}
*/


// Real copy

const person2 = {
    name: 'Max'
};
const secondPerson2 = {
    ...person
};
person2.name = 'Manu';
console.log(secondPerson2); 
/*
[object Object] {
    name: "Max"
}
*/