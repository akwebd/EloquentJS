//trigonometric functions:
//sin, cos, tan, asin, acos, atan
//pi = PI
console.log(randomPointOnCircle(2));
function randomPointOnCircle(radius){
    //random number, [0, 1)
    var angle = Math.random() * 2 * Math.PI;
    //it will return an object with variables x and y, note the brackets
    return {x: radius * Math.cos(angle),
            y: radius * Math.sin(angle)}; 
}
//floor rounds down
console.log(Math.floor(Math.random() * 10));
//ceil rounds up
//round rounds to the nearest
