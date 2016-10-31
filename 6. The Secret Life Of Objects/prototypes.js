//In JavaScript in addition to their properties, almost all objects have a prototype. If Object does not have a called property, it's prototype is searched for that property, if prototype does not have that property its prototype will be searched and etc.
var empty = {};
console.log(empty.toString);
console.log(empty.toString());

//prototype of an empty object is Object.prototype
console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

//JavaScript objects inherit their properties from their prototypes. Examples of Function.prototype, Array.prototype.
console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);

//And these prototypes have prototypes Object.prototype, which provides methods like toString

//Object.create can be used to create an object with a specific prototype
var protoRabbit = {
    speak: function(line){
        console.log("The " + this.type + " rabbit says '" + line + "'");}
    }
var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");