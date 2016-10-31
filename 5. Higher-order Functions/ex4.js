//Standard array methods EVERY and SOME. EVERY function returns true if method applied on all elements return true. SOME function returns true if method applied on any element return true. Task is to create duplicates for these functions.
function every(array, method){
    for(var i = 0; i  < array.length; i++)
        if(!method(array[i]))
            return false;
    return true;
}

function some(array, method){
    for(var i = 0; i  < array.length; i++)
        if(method(array[i]))
            return true;
    return false;
}

var tArray1 = [1, 2, 3, 4];

function moreThan(x){
    return function(y){return y > x;}
}

console.log("input array: " + tArray1);
console.log("more than 2, every: " + every(tArray1, moreThan(2)));
console.log("more than 2, some: " + some(tArray1, moreThan(2)));

console.log("more than 0, every: " + every(tArray1, moreThan(0)));
console.log("more than 0, some: " + some(tArray1, moreThan(0)));

console.log("more than 10, every: " + every(tArray1, moreThan(10)));
console.log("more than 10, every: " + some(tArray1, moreThan(10)));
