//Reversing an array

var arr = [0,1,2,3,4,5,6,7,8,9]
console.log(reverseArray(arr));
reverseArrayInPlace(arr);
console.log(arr);
//reverseArray takes an array as argument and produces a new array that has the same elements in the inverse order
function reverseArray(inArray){
    var outArray = [];
    for(var i = 0; i < inArray.length; i++)
        outArray.push(inArray[inArray.length - i - 1]);
    return outArray;
}

function reverseArrayInPlace(inArray){
    var t1 = 0;    
    for(var i = 0; i < inArray.length / 2; i++){
        t1 = inArray[i];
        inArray[i] = inArray[inArray.length - i - 1];
        inArray[inArray.length - i - 1] = t1;
    }
}