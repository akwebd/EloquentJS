//in JS it is allowed to pass more or less arguments than the function requires
function oneArgument(a){};
//passing less is OK
oneArgument();
//passing more is OK
oneArgument(1,2);

//when function is called 'arguments' array is created, it contains all values passed to a function. This array is little different than regular array, it does not have SLICE and INDEXOF methods.
function argumentCounter(){
    console.log("You gave me ", arguments.length, " arguments.");
}

argumentCounter("Straw man", "Tautology", "Ad hominem");

//Modified addEntry function (see script):

var journal = [];
addEntry(true, "work", "touched tree", "pizza", "running", "television");

function addEntry(squirrel){
    var entry = {events: [], squirrel: squirrel};
    for(var i = 1; i<arguments.lengt;i++)
        entry.events.push(arguments.i);//array element number can be passed in brackets or as a dot field if it is not a number
    journal.push(entry);
}