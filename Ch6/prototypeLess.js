//with Object.create null can be passed as a prototype. This allows to create fresh object without prototype
var map = Object.create(null);
map["pizza"] = 0.069;
console.log("toString" in map);
console.log("pizza" in map);
//the above allows to use for/in loop regardless of what has been done on Object.prototype