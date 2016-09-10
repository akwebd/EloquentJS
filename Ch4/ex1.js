
///The sum of a range

console.log(range(5,2,-1));

//range function returns an array containing all the numbers from the range defined by start and stop parameters
function range(a, b, c){
    var numArray = [];
    if(arguments.length < 3) c = 1;//default increment
    if(a > b) 
        for(var i = a; i > b - 1; i+=c)
            numArray.push(i);
    else
        for(var i = a; i < b + 1; i+=c)
            numArray.push(i);
    return numArray;
}

//sum function 
function sum(numArray){
    var theSum = 0;
    for(var i = 0; i < numArray.length; i++)
        theSum += i;
    return theSum
}