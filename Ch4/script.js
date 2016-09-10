
var journal = [];

addEntry(["work", "touched tree", "pizza", "running", "television"], true);
addEntry(["work", "ice cream", "cauliflower", "pizza", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "pizza"], false);


//console.log(tableFor("pizza", journal));
var map = {};
storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
//console.log("pizza" in map);
//console.log(map["touched tree"]);

for (var event in map)
    console.log("The correlation for '" + event + "' is " + map[event]);


//to store calculated corellation
function storePhi(event, phi){
    map[event] = phi;
}

//to add new entries into journal
function addEntry(events, didITurnIntoASquirrel){
    journal.push({
        events: events,
        squirrel: didITurnIntoASquirrel
    })
}

//this checks if event is in the entry
function hasEvent(event, entry){
    return entry.events.indexOf(event) != -1;
}

//this creates relation array for a given event
function tableFor(event, journal){
    var table = [0, 0, 0, 0];
    for (var i=0;i<journal.length;i++){
        var entry = journal[i], index = 0;
        if (hasEvent(event, entry)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] +=1;
    }
    return table;
}

//this calculates correlation values
function phi(table){
    return (table[3]* table[0] - table[2] * table[1])/
            Math.sqrt((table[2] + table[3]) *
                      (table[0] + table[1]) *
                      (table[1] + table[3]) *
                      (table[0] + table[2]));
}