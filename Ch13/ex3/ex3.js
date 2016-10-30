//Extend the cat animation defined earlier so that both the cat and his hat orbit on ellipses
var cat = document.querySelector("#cat");
var hat = document.querySelector("#hat");
var angle = 0, lastTime = null;
function animate(time) {
    if (lastTime != null)
        angle += (time - lastTime) * 0.001;
    lastTime = time;
    console.log(angle);
    cat.style.top = (Math.sin(angle)*100+100) + "px";
    cat.style.left = (Math.cos(angle)*200+200) + "px";
    var hatAngle = angle;
    hat.style.top = (Math.sin(hatAngle)*100-10) + "px";
    hat.style.left = (Math.cos(hatAngle)*200-20) + "px";
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);