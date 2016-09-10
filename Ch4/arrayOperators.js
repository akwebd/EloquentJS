//index, lastIndex
console.log([1,2,3,2,1].indexOf(2));
console.log([1,2,3,2,1].lastIndexOf(2));
//slice
console.log([1,2,3,2,1].slice(2,4));
console.log([1,2,3,2,1].slice(2));
//concat
function remove(array, index){
    return array.slice(0,index).concat(array.slice(index + 1));
}
console.log(remove(["a","b","c","d","e"],2));
//string and array operators
var todoList = [];
//push
function rememberTo(task){
    todoList.push(task);
}
//shift
function whatIsNext(){
    return todoList.shift();
}
//unshift
function urgentlyRememberTo(task){
    todoList.unshift(task);
}