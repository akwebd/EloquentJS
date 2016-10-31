//A function that creates function
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
function greaterThan(n){
    return function(m){return m > n;};
}