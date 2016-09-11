//using reduce method in cobination with the concat method to "flatten an array of arrays into a single array that has all the elements of the input arrays.
var inArray = [[11, 12, 13], [21, 22, 23], [31, 32, 34], 44];

console.log(inArray.reduce(function(a, b){
    return a.concat(b);
}));
