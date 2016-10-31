//Deep comparison
//deepEqual takes two values and returns true only if they are the same value

console.log(deepEqual({cats: 1, dogs: 2}, {cats: 1, dogs: 2}));

function deepEqual(a, b){
    if((a == null)||(b == null))
        return false;
    else if((typeof(a) != "object") && (typeof(b) != "object"))
        return a == b;
    else if(Object.keys(a).length != Object.keys(b).length)
        return false;
    else
        for(var prop in a)
            if(!deepEqual(a[prop], b[prop]))
                    return false;
        return true;
}