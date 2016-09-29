//object to map compas directions to coordinate offsets
var directions = {
    "n":    new Vector(0, -1),
    "ne":   new Vector(1, -1),
    "e":    new Vector(1, 0),
    "se":   new Vector(1, 1),
    "s":    new Vector(0, 1),
    "sw":   new Vector(-1, 1),
    "w":    new Vector(-1, 0),
    "nw":   new Vector(-1, -1)
}

//critter objects
function randomElement(array){
    return array[Math.floor(Math.random() * array.length)];
}

var directionNames = "n ne e se s sw w nw".split(" ");

function BouncingCritter(){
    this.direction = randomElement(directionNames);
}
BouncingCritter.prototype.act = function(view){
    if(view.look(this.direction) != " ")
        this.direction = view.find(" ") || "s";
    return {type: "move", direction: this.direction};
};

//the world object
function elementFromChar(legend, ch){
    if(ch == " ")
        return null;
    var element = new legend[ch]();
    element.originChar = ch;
    return element;
}

function World(map, legend){
    var grid = new Grid(map[0].length, map.length);
    this.grid = grid;
    this.legend = legend;
    
    map.forEach(function(line, y){
        for(var x = 0; x < line.length; x++)
            grid.set(new Vector(x, y), elementFromChar(legend, line[x]));
    });
}

//Worlds toString will be used to generate maplike string that will be used to preview current state of the world
function charFromElement(element){
    if(element == null)
        return " ";
    else
        return element.originChar;
}
World.prototype.toString = function(){
    var output = "";
    for(var y = 0; y < this.grid.height; y++){
        for(var x = 0; x < this.grid.width; x++){
            var element = this.grid.get(new Vector(x, y));
            output += charFromElement(element);
        }
        output += "\n";
    }
    return output;
}
//turn method will call act method to get action method and executes the action
World.prototype.turn = function(){
    var acted = [];
    this.grid.forEach(function(critter, vector){
        if(critter.act && acted.indexOf(critter) == -1){
            acted.push(critter);
            this.letAct(critter, vector);
        }
    }, this);
};
//letAct method will contain the actual logic that allows the critters to move
World.prototype.letAct = function(critter, vector){
    var action = critter.act(new View(this, vector));
    if(action && action.type == "move"){
        var dest = this.checkDestination(action, vector);
        if(dest && this.grid.get(dest) == null){
            this.grid.set(vector, null);
            this.grid.set(dest, critter);
        }
    }
}
World.prototype.checkDestination = function(action, vector){
    if(directions.hasOwnProperty(action.direction)){
        var dest = vector.plus(directions[action.direction]);
        if(this.grid.isInside(dest))
            return dest;
    }
}
//internal methods should be prefixed with "_" to avoid accidental use of it
//simple wall object just for taking up space
function Wall(){}

//View object
function View(world, vector){
    this.world = world;
    this.vector = vector;
}
View.prototype.look = function(dir){
    var target = this.vector.plus(directions[dir]);
    if(this.world.grid.isInside(target))
        return charFromElement(this.world.grid.get(target));
    else
        return "#";
};
View.prototype.findAll = function(ch){
    var found = [];
    for(var dir in directions)
        if(this.look(dir) == ch)
            found.push(dir);
    return found;
};
View.prototype.find = function(ch){
    var found = this.findAll(ch);
    if(found.length == 0) return null;
    return randomElement(found);
};
//test World object by creating already defined map, toString method should return very similar map
var world = new World(plan, {"#": Wall,
                             "o": BouncingCritter});
//test if critters actually move
for(var i = 0; i < 5; i++){
    world.turn();
    console.log(world.toString());
}