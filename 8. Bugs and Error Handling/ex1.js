//exception prototype
function MultiplicatorUnitFailure(){   
}
MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.name = "MulltiplicatorUnitFailure";

//faulty function
function primitiveMultiply (a, b){
    if (Math.random() > 0.5)
        return a * b;
    throw new MultiplicatorUnitFailure();
}

//function that will try multiplying until result is returned
function reliableMultiply(a, b){
    for (;;){
        try {return primitiveMultiply(a, b);}
        catch (e) {
            if (!(e instanceof MultiplicatorUnitFailure))
                throw e}
    };
}

console.log(reliableMultiply());