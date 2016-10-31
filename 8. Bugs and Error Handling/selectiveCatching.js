//In javaScript there is no selective catching, it's either all or nothing
//there is a way to workaround, by checking message that is being thrown, but this is short and temporary solutio
//It is better to define object and use intanceOf for error identification
function InputError(message){
    this.message = message;
    this.stack = (new Error()).stack;
}
InputError.prototype = Object.create(Error.prototype);//inheritance
InputError.prototype.name = "InputError";

function promptDirection(question){
    var result = prompt(question, " ");
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new InputError("Invalid direction: " + result);
}

//following will only catch instances of InputError
for(;;){
    try{
        var dir = promptDirection("Where?");
        console.log("You chose ", dir);
        break;
    } catch (e) {
        if (e instanceof InputError)
            console.log("Not a valid direction. Try again.");
        else
            throw e;
    }
}
