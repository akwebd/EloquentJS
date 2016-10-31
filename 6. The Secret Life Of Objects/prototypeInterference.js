//So the prototype can be used at any time to add new properties to even existing objects
Rabbit.prototype.dance = function(){
    console.log("The " + this.type + " rabbit dances a jig.");
}

killerRabbit.dance();

//But this may cause a problem
var map = {};
function storePhi(event, phi){
    map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched three", -0.081);

//this will cause problems in for loop
Object.prototype.nonsense = "hi";

for(var name in map)
    console.log(name);
//pizza
//touched tree
//nonsense
console.log("nonsense" in map);
console.log("toString" in map);
//toString did not showed up because it is not an enumerable property
//remove not correct property, but this is only partial solution
delete Object.prototype.nonsense;
//all properties that are created by simply assigning to them are enumerable. All standard Object.prototype properties are nonenumerable. To define out own nonenumerable property Object.defineProperty should be used
Object.defineProperty(Object.prototype, "hiddenNonsense", {propertyIsEnumerable: false, value: "hi"});
for (var name in map)
    console.log(name);
console.log(map.hiddenNonsense);
//bus the regular IN operator will still find hiddenNonsense property. Instead of IN hasOwnProperty should be used
console.log("hiddenNonsense" in map);
console.log(map.hasOwnProperty("hiddenNonsense"));
//hasOwnProperty tells us whether the object itself has the property, without looking at the prototype. IN tells us in general if object or its prototype has the property

//when in doubt that someone (or other part of code) might have messed with the base object prototype, use the following check
for(var name in map){
    if (map.hasOwnProperty(name))
        console.log(name);        
}