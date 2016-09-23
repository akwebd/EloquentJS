//write a constructor Vector that represents a vector in two-dimensional space. It takes x and y parameters(number), which it should save to properties of the same name
//define getter function that calculates length of the vector from 0,0 point
function Vector(x, y){
    this.x = x;
    this.y = y;
}
//prototype should have two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors
Vector.prototype.plus = function(vector){
    return new Vector(this.x + vector.x, this.y + vector.y);
}

Vector.prototype.minus = function(vector){
    return new Vector(this.x - vector.x, this.y - vector.y);
}

//to add function to a prototype
Object.defineProperty(Vector.prototype, "length", {
    get: function(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
})
var vector1 = new Vector(4, 5);
var vector2 = new Vector(7, 8);
console.log(vector1.plus(vector2));
console.log(vector2.minus(vector1));
console.log(vector1.length);


console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5