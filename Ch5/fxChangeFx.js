//A function that changes other function
noisy(Boolean)(0);
function noisy(f){
    return function(arg){
        console.log("calling with ", arg);
        var val = f(arg);
        console.log("called with", arg, " - got", val);
        return val;
    };
}