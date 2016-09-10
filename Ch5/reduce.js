//reduce can be used to find a single value from an array
function reduce(array, combine, start){
    var current = start;
    for(var i = 0; i < array.length; i++)
        current = combine(current, array[i]);
    return current;
}

console.log(reduce([1, 2, 3, 4], function(a, b){
    return a + b;
}, 0));
//built-in reduce function
console.log([1, 2, 3, 4].reduce(function(a, b){
    return a + b;
}, 0));

//finding earliest known ancestor
console.log(ancestry.reduce(function(min, cur){
    if(cur.born < min.born) return cur;
    else return min;
}));