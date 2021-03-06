//Helper function for DOM element creation
function elt(name, attributes) {
    var node = document.createElement(name);
    if (attributes) {
        for (var attr in attributes)
            if (attributes.hasOwnProperty(attr))
                node.setAttribute(attr, attributes[attr]);
    }
    for (var i = 2; i < arguments.length; i++) {
        var child = arguments[i];
        if (typeof child == "string")
            child = document.createTextNode(child);
        node.appendChild(child);
    }
    return node;
}


//Core function for Paint application    
var controls = Object.create(null);

function createPaint(parent) {
    var canvas = elt("canvas", {width: 500, height: 300});
    var cx = canvas.getContext("2d");
    var toolbar = elt("div", {class: "toolbar"});
    for (var name in controls)
        toolbar.appendChild(controls[name](cx));

    var panel = elt("div", {class: "picturepanel"}, canvas);
    parent.appendChild(elt("div", null, panel, toolbar));
}
    

//Tool object for drawing tool selection    
var tools = Object.create(null);

controls.tool = function(cx) {
    var select = elt("select");
    for (var name in tools)
        select.appendChild(elt("option", null, name));

    cx.canvas.addEventListener("mousedown", function(event) {
        if (event.which == 1) {
            tools[select.value](event, cx);
            event.preventDefault();
        }
    });

    return elt("span", null, "Tool: ", select);
};
  

//Helper function for getting canvas-relative mouse pointer coordinates
function relativePos(event, element) {
    var rect = element.getBoundingClientRect();
    return {x: Math.floor(event.clientX - rect.left),
            y: Math.floor(event.clientY - rect.top)};
}
   

//Function to track mouse movement
function trackDrag(onMove, onEnd) {
    function end(event) {
        removeEventListener("mousemove", onMove);
        removeEventListener("mouseup", end);
        if (onEnd)
            onEnd(event);
    }
    addEventListener("mousemove", onMove);
    addEventListener("mouseup", end);
}   
  

//Line tool
tools.Line = function(event, cx, onEnd) {
    cx.lineCap = "round";

    var pos = relativePos(event, cx.canvas);
    trackDrag(function(event) {
        cx.beginPath();
        cx.moveTo(pos.x, pos.y);
        pos = relativePos(event, cx.canvas);
        cx.lineTo(pos.x, pos.y);
        cx.stroke();
    }, onEnd);
};
 

//Erase tool
tools.Erase = function(event, cx) {
    cx.globalCompositeOperation = "destination-out";
    tools.Line(event, cx, function() {
        cx.globalCompositeOperation = "source-over";
    });
};
   

//Color picker
controls.color = function(cx) {
    var input = elt("input", {type: "color"});
    input.addEventListener("change", function() {
        cx.fillStyle = input.value;
        cx.strokeStyle = input.value;
    });
    return elt("span", null, "Color: ", input);
};
    

//Brush size picker
controls.brushSize = function(cx) {
    var select = elt("select");
    var sizes = [1, 2, 3, 5, 8, 12, 25, 35, 50, 75, 100];
    sizes.forEach(function(size) {
        select.appendChild(elt("option", {value: size},
                               size + " pixels"));
    });
    select.addEventListener("change", function() {
        cx.lineWidth = select.value;
    });
    return elt("span", null, "Brush size: ", select);
};

//Save function
controls.save = function(cx) {
    var link = elt("a", {href: "/"}, "Save");
    function update() {
        try {
            link.href = cx.canvas.toDataURL();
        } catch (e) {
            if (e instanceof SecurityError)
                link.href = "javascript:alert(" +
                    JSON.stringify("Can't save: " + e.toString()) + ")";
            else
                throw e;
        }
    }
    link.addEventListener("mouseover", update);
    link.addEventListener("focus", update);
    return link;
};
  

//Load image function
function loadImageURL(cx, url) {
    var image = document.createElement("img");
    image.addEventListener("load", function() {
        var color = cx.fillStyle, size = cx.lineWidth;
        cx.canvas.width = image.width;
        cx.canvas.height = image.height;
        cx.drawImage(image, 0, 0);
        cx.fillStyle = color;
        cx.strokeStyle = color;
        cx.lineWidth = size;
    });
    image.src = url;
}
   

//Open file function
controls.openFile = function(cx) {
    var input = elt("input", {type: "file"});
    input.addEventListener("change", function() {
        if (input.files.length == 0) return;
        var reader = new FileReader();
        reader.addEventListener("load", function() {
            loadImageURL(cx, reader.result);
        });
        reader.readAsDataURL(input.files[0]);
    });
    return elt("div", null, "Open file: ", input);
};
  

//Loading from URL
controls.openURL = function(cx) {
    var input = elt("input", {type: "text"});
    var form = elt("form", null,
                   "Open URL: ", input,
                   elt("button", {type: "submit"}, "load"));
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        loadImageURL(cx, input.value);
    });
    return form;
};


//Text tool
tools.Text = function(event, cx) {
    var text = prompt("Text:", "");
    if (text) {
        var pos = relativePos(event, cx.canvas);
        cx.font = Math.max(7, cx.lineWidth) + "px sans-serif";
        cx.fillText(text, pos.x, pos.y);
    }
};


//Spray tool
tools.Spray = function(event, cx) {
    var radius = cx.lineWidth / 2;
    var area = radius * radius * Math.PI;
    var dotsPerTick = Math.ceil(area / 30);

    var currentPos = relativePos(event, cx.canvas);
    var spray = setInterval(function() {
        for (var i = 0; i < dotsPerTick; i++) {
            var offset = randomPointInRadius(radius);
            cx.fillRect(currentPos.x + offset.x,
                        currentPos.y + offset.y, 1, 1);
        }
    }, 25);
    trackDrag(function(event) {
        currentPos = relativePos(event, cx.canvas);
    }, function() {
        clearInterval(spray);
    });
};


//Helper function for Spray tool
function randomPointInRadius(radius) {
    for (;;) {
        var x = Math.random() * 2 - 1;
        var y = Math.random() * 2 - 1;
        if (x * x + y * y <= 1)
            return {x: x * radius, y: y * radius};
    }
}


//Exercise 19.1
//Define a tool called Rectangle that fills a rectangle (see the fillRect method from Chapter 16) with the current color. The rectangle should span from the point where the user pressed the mouse button to the point where they released it. Note that the latter might be above or to the left of the former.

//Once it works, you’ll notice that it is somewhat jarring to not see the rectangle as you are dragging the mouse to select its size. Can you come up with a way to show some kind of rectangle during the dragging, without actually drawing to the canvas until the mouse button is released?

//If nothing comes to mind, think back to the position: absolute style discussed in Chapter 13, which can be used to overlay a node on the rest of the document. The pageX and pageY properties of a mouse event can be used to position an element precisely under the mouse, by setting the left, top, width, and height styles to the correct pixel values.
//Helper function to get rectangle parameters
function rectPar(p1, p2){
    return {x : Math.min(p1.x, p2.x),
            y : Math.min(p1.y, p2.y),
            w : Math.abs(p1.x - p2.x),
            h : Math.abs(p1.y - p2.y)};
}
//Rectangle tool
tools.Rectange = function(event, cx) {
    var pos1r = relativePos(event, cx.canvas);
    var pos2r = pos1r;
    var pos1a = {x: event.pageX, y: event.pageY};
    var pos2a = pos1a;
    var tempRect = elt("div");
    tempRect.style.position = "absolute";
    tempRect.style.background = cx.fillStyle;;
    cx.canvas.parentElement.appendChild(tempRect);
    trackDrag(function(event) {  
        pos2a = {x: event.pageX, y: event.pageY};
        var rect = rectPar (pos1a, pos2a);
        tempRect.style.left = rect.x + "px";
        tempRect.style.top = rect.y + "px";
        tempRect.style.width = rect.w + "px";
        tempRect.style.height = rect.h + "px";
    }, function(event){
        cx.canvas.parentElement.removeChild(tempRect);
        pos2r = relativePos(event, cx.canvas);
        cx.moveTo(pos1r.x, pos1r.y);
        var rect = rectPar (pos1r, pos2r);
        cx.fillRect(rect.x, rect.y, rect.w, rect.h);
    });
};

//Exercise 19.2
//Another tool that is commonly found in graphics programs is a color picker, which allows the user to click the picture and selects the color under the mouse pointer. Build this.

//For this tool, we need a way to access the content of the canvas. The toDataURL method more or less did that, but getting pixel information out of such a data URL is hard. Instead, we’ll use the getImageData method on the drawing context, which returns a rectangular piece of the image as an object with width, height, and data properties. The data property holds an array of numbers from 0 to 255, using four numbers to represent each pixel’s red, green, blue, and alpha (opaqueness) components.

//This function retrieves the numbers for a single pixel from a canvas.
function pixelAt(cx, x, y) {
  var imgData = cx.getImageData(x, y, 1, 1).data;
  return 'rgb(' + imgData[0] + ', ' + imgData[1] + ', ' + imgData[2] + ')';
}

tools["Pick color"] = function(event, cx) {
    var pos = relativePos(event, cx.canvas);
    try {
        var pixelColor = pixelAt(cx, pos.x, pos.y);}
    catch(e) {
        if(e instanceof SecurityError)
            alert("Unable to access your picture's pixel data")}
    cx.fillStyle = pixelColor;
    cx.strokeStyle = pixelColor;    
  };

//Exercise 19.3
//A flood fill tool colors the pixel under the mouse and the surrounding pixels of the same color. For the purpose of this exercise, we will consider such a group to include all pixels that can be reached from our starting pixel by moving in single-pixel horizontal and vertical steps (not diagonal), without ever touching a pixel that has a color different from the starting pixel.
  //return pixel position in data array
function checkAround(pos, fnct){
    fnct({x: pos.x + 1, y: pos.y});
    fnct({x: pos.x, y: pos.y + 1});
    fnct({x: pos.x - 1, y: pos.y});
    fnct({x: pos.x, y: pos.y - 1});
}
//Gets rgba array at given 'pos' position in picture represented by 'data' array
function getRGBA(data, idx){
    return data.slice(idx, idx + 4).join(',');    
}
//all coordinates of arrays shall be stored using
tools["Flood fill"] = function(event, cx) {
    var canvas = cx.canvas;
    var currPos = relativePos(event, canvas);//string with x,y coordinates
    var currIdx = currPos.x + currPos.y * canvas.width;
    var dataA = cx.getImageData(0, 0, canvas.width, canvas.height).data;
    var refClr = getRGBA(dataA, currIdx * 4);//memorize selected color
    var memory = [];//this will be used to store all pixels that should be changed
    memory.push(currPos);
    var reviewed = new Array (canvas.width * canvas.width);//full sized array is used to save memory   
    while(memory.length){
        currPos = memory.pop();
        currIdx = currPos.x + currPos.y * canvas.width;        
        cx.fillRect(currPos.x, currPos.y, 1, 1);  
        reviewed[currIdx] = true;;
        
        checkAround(currPos, function(nextPos){  
            var nextIdx = nextPos.x + nextPos.y * canvas.width;
            if((nextPos.x >= 0) && (nextPos.x <= canvas.width)&&
               (nextPos.y >= 0) && (nextPos.y <= canvas.height))
                if(!reviewed[nextIdx])
                    if(refClr === getRGBA(dataA, nextIdx * 4))
                        memory.push(nextPos);    
                    else
                        reviewed[nextIdx] = true;
        });
    }
  };