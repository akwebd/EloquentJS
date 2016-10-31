//stringify takes JS object and converts it into JSON notation
var string = JSON.stringify({name: "X", born: 1980});
console.log(string);
//parse takes JSON object and converts it into values JSON encodes
console.log(JSON.parse(string).born);

var ancestry = JSON.parse(ANCESTRY_FILE);
console.log(ancestry.length);