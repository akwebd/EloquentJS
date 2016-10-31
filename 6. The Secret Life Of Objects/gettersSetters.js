//it is possible to specify properties that look like normal properties but secretly have methods associated with them.
var pile = {
    elements: ["eggshell", "orange peel", "worm"],
    get height(){
        return this.elements.length;
    },
    set height(value){
        console.log("Ignoring attempt to set height to", value);
    }
};

console.log(pile.height); //getting the value
pile.height = 100; //setting the value

//getter and setter methods can be also defined after object definition
Object.defineProperty(TextCell.prototype, "heightProp", {
    get: function(){
        return this.text.length;
    }
});

var cell = new TextCell("no\nway");
console.log(cell.heightProp);
cell.heightProp = 100;
console.log(cell.heightProp);