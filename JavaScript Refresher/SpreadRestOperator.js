// ...

// Spread
// Used to split up array elements OR object properties
const newArray = [...oldArray, 1, 2]
const newObject = {...oldObject, newProp:5}

// Rest
// Used to merge a list of function arguments into in array
function sortArgs(...args){
    return args.sort();
}