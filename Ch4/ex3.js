///A list
console.log(listToArray(arrayToList([1,2,3,4])));
//arrayToList should convert array to a list variable
function arrayToList(inArray){
    var outList = {
        value: inArray[inArray.length - 1],
        rest: null};
    for(var i = 1; i < inArray.length; i++)
        outList = prepend(inArray[inArray.length - i - 1], outList);
    return outList;
}
//helper function prepend updates a list by adding addition element at the front
function prepend(inNum, inList){
    var outList = {
        value: inNum,
        rest: inList};
    return outList;
}
//listToArray should convert list to an array variable
function listToArray(inList){
    var outArray = [];
    var i = 0;
    while(nth(i, inList) != undefined){
        outArray.push(nth(i, inList));
        i++;
    }
    return outArray;
}
//recursive helper function nth returns specified value in the list or undefined when it does not exists
function nth(inNum, inList){
    if(inNum == 0)
        return inList.value;
    else if(inList.rest != null)
        return nth(inNum-1, inList.rest);
    else
        return undefined;
}