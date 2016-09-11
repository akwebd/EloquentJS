//function to calculate amount of DNA inherited from the oldest ancestor
var byName = {};
ancestry.forEach(function(person){
    byName[person.name] = person;
});

function reduceAncestors(person, f, defaulValue){
    function valueFor(person){
        if (person == null)
            return defaulValue;
        else
            return f(person, valueFor(byName[person.mother]),
                             valueFor(byName[person.father]));
    }
    return valueFor(person);
}

function sharedDNA(person, fromMother, fromFather){
    if(person.name == "Pauwels van Haverbeke")
        return 1;
    return (fromMother + fromFather) / 2;
}

var ph = byName["Philibert Haverbeke"];
console.log(reduceAncestors(ph, sharedDNA, 0)/4)

//count long living ancestors for a person
function countAncestors(person, test){
    function combine(person, fromMother, fromFather){
        var thiOneCounts = test(person);
        return fromMother + fromFather + (thiOneCounts ? 1 : 0);
    }
    return reduceAncestors(person, combine, 0);
}
function longLivingPercentage(person){
    var all = countAncestors(person, function(person){
        return true;
    });
    var longLiving = countAncestors(person, function(person){
        return (person.died - person.born) >= 70;
    });
    return longLiving / all;
}
console.log(longLivingPercentage(byName["Emile Haverbeke"]));