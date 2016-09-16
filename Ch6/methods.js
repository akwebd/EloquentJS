//methods are simply properties that hold function values.
var rabbit = {};
rabbit.speak = function(line){
    console.log("The rabbit says '"+ line +"'");
};

rabbit.speak("I'm alive.");

//this can will point to the object that method was called on
function speak(line){
    console.log("The " + this.type + " rabbit says '" + line + "'");
};
var whiteRabbit = {
    type: "white",
    speak: speak,
};
var fatRabbit = {
    type: "fat",
    speak: speak
};

whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
fatRabbit.speak("I could sure use a carrot right now.");

//CALL calls a function it is a method of but takes its arguments normally, rather that as an array. Like APPLY and BIND, CALL can be passed a specific this value
speak.apply(fatRabbit, ["Burp!"]);
speak.call({type: "old"}, "Oh my.");