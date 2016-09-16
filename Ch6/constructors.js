//A more convenient way to derive objects from some shared prototype is to use a constructor.
function Rabbit(type){
    this.type = type;
}
var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");
console.log(blackRabbit.type);

//Constructors (in fact all functions) automatically get a property named prototype, which by default holds a plain, empty object that derives from Object.prototype.
//To add a speak method to all Rabbit instances (can be added even after object constructor)

Rabbit.prototype.speak = function(line){
    console.log("The " + this.type + " rabbit says '" + line + "'");
};

blackRabbit.speak("Doom...");