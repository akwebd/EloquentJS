//Implement a cell type StrechCell(inner, width, height) that conforms to the cell table interface. It should wrap another cell and ensure that the resulting cell has at least the given width and height.
function StretchCell(inner, width, height){
    this.inner = inner;
    this.width = width;
    this.height = height;
}

StretchCell.prototype.minWidth = function(){
    return Math.max(this.inner.minWidth(), this.width);
}
StretchCell.prototype.minHeight = function(){
    return Math.max(this.inner.minHeight(), this.height);
}
StretchCell.prototype.draw = function(width, height){
    return this.inner.draw(Math.max(width, this.width), Math.max(height, this.height));
//    var result = [];
//    for(var i = 0; i < Math.max(height, this.height); i++){
//        var line = this.inner.text[i] || "";
//        result.push(line + repeat(" ", Math.max(width, this.width) - line.length));
//    }
//    return result;
};

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]
