//map method will transform an array by applying a function to all of its elements and building a new array form returned values
function map(array, transform){
    var mapped = [];
    for(var i = 0; i < array.length; i++)
        mapped.push(transform(array[i]));
    return mapped;
}

var overNinety = ancestry.filter(function(person){
    return person.died - person.born > 90;
});
console.log(map(overNinety, function(person){
    return person.name;
}));
//built-in map
console.log(overNinety.map(function(person){
    return person.name;
}));
