//A way to pass more than one argument to a inner function
//a useless funtion to indicate the concept, null argument can be used to simulate a method call
function transparentWrapping(f){
    return function(){
        return f.apply(null, arguments);
    };
}