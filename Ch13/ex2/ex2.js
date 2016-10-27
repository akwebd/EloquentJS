//Implement your own version of getElementByTagName
function byTagName(body, node){
    var tags = [];
    var children = body.children;
    for (var i = 0; i < children.length; i++){
        if ( children[i].tagName.toLowerCase() == node.toLowerCase()){
            tags.unshift(children[i]); 
        }            
        else
            if (children[0].children.length > 0)
                byTagName(children[0], node).forEach(function(tag){
                    tags.unshift(tag);
                });
    }
    return tags;
}
