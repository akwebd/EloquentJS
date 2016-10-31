//plan that will define 2D world:
//# - walls and rocks
//_ - empty space
//o - critter
var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];

//Vector object from the previous chapter can be used for square identification
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

//object type that models grid
function Grid(width, height){
    this.space = new Array(width * height);
    this.width = width;
    this.height = height;
}
Grid.prototype.isInside = function (vector){
    return vector.x >= 0 && vector.x < this.width &&
           vector.y >= 0 && vector.y < this.height;
};
Grid.prototype.get = function(vector){
    return this.space[vector.x + this.width * vector.y];
};
Grid.prototype.set = function(vector, value){
    this.space[vector.x + this.width * vector.y] = value;
};
//check thisScope.js
Grid.prototype.forEach = function(f, context){
    for(var y = 0; y < this.height; y++){
        for(var x = 0; x < this.width; x++){
            var value = this.space[x + y * this.width];
            if (value != null)
                f.call(context, value, new Vector(x, y));
        }
    }
};
//trivial test
var grid = new Grid(5, 5);
console.log(grid.get(new Vector(1, 1)));
grid.set(new Vector(1, 1), "X");
console.log(grid.get(new Vector(1, 1)));