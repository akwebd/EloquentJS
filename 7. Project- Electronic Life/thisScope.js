//Each function call gets its own this binding, therefore for this in Each of a constructor does not refer to constructor's this.
//When the function isn't called as a method, this will refer to the global object.
//For World object we can't write this.grid to access the grid from inside the loop. Instead the outer function creates a normal local variable grid, through which the inner function gets access to the grid. NEXT VERSION OF JS PROVIDES A SOLUTION FOR THIS PROBLEM.
//workaround 1 is to define outer variable and use it inner function
//workaround 2 is to use bind method, which allows us to provide an explicit this object to bind to
var test = {
    prop: 10,
    addPropTo: function(array){
        return array.map(function(elt){
            return this.prop + elt;}.bind(this));
    }
};
console.log(test.addPropTo([5]));

//most standard higher order methods on arrays, such as forEach and map, take an optional second argument that can also be used to provide a this for the calls to the iteration function.
var test = {
    prop: 10,
    addPropTo: function(array){
        return array.map(function(elt){
            return this.prop + elt;}, this);
    }
};
console.log(test.addPropTo([5]));