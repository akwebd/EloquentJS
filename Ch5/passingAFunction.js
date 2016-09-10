//function can be passed as a variable indicating what action is expected
forEach(["Wampeter", "Foma", "Granfalloon"], console.log);
//creating a function on the spot
var numbers = [1 ,2 ,3 ,4 ,5 ], sum = 0;
forEach(numbers, function(number){
    sum += number;
});
console.log(sum);
//forEach function takes an array and performs defined action on each element of this array
function forEach(array, action){
    for(var i = 0; i < array.length; i++)
        action(array[i]);
}

//built-in function
numbers.forEach(function(number){
    sum += number;
});
