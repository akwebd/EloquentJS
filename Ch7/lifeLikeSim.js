//new object, just to override old world letAct method
function LifelikeWorld(map, legend){
    World.call(this, map, legend);
}

LifeLikeWorld.prototype = Object.create(World.prototype);
var actionTypes = Object.create(null);

LifeLikeWorld.prototype.letAct = function(critter, vector){
    var action = critter.act(new Vector(this, vector));
    var handled = action && action.type in actionTypes && actionTypes[action.type].call(this, critter, vector, action);
    if(!handled){
        critter.energy -= 0.2;
        if (critter.energy <= 0)
            this.grid.set(vector, null);
    }
};