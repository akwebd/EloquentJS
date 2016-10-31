//old critters cannot be used because they do not have energy property, some new life forms have to be defined
//plant is a simple life form that grows but is not able to move
function Plant(){
    this.energy = 3 + Math.random() * 4;
}
Plant.prototype.act = function(context){
    if (this.energy > 15){
        var space = context.find(" ");
        if (space)
            return {type: "reproduce", direction: space};
    }
    if (this.energy < 20)
        return {type: "grow"};
};

//plant eater is an active creature
function PlantEater(){
    this.energy = 20;
}
PlantEater.prototype.act = function(context){
    var space = context.find(" ");
    if (this.energy > 60 && space)
        return {type: "reproduce", direction: space};
    var plant = context.find("*");
    if (plant)
        return {type: "eat", direction: plant};
    if (space)
        return {type: "move", direction: space};
}