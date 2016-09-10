//adding new property to a string does not work:
var myString = "Fido";
myString.myProperty = "value";
console.log(myString.myProperty);
//string, number and Boolean are not objects, therefore it is not possible to add new properties to them. The language allow addition (hence no error), but new properties are not added.

//strings have similar methods to array:
//slice
console.log("coconuts".slice(4,7));
//for string indexOf takes a string as an argument and not an character
//indexOf
console.log("coconuts".indexOf("nu"));
//trim
console.log("   okay \n ".trim());
//length
//charAt
var string = "abc";
console.log(string.length);
console.log(string.charAt(0));
console.log(string[1]);