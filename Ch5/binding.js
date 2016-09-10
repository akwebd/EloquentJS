//bind is a method, that all functions have. It creates a new function from original function, but with some input parameters being preset
var theSet = ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"];
function isInSet(set, person){
    return set.indexOf(person.name) > -1;
}

console.log(ancestry.filter(function(person){
    return isInSet(theSet, person);
}));
//with binding
console.log(ancestry.filter(isInSet.bind(null, theSet)));