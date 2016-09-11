function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

//using data set from this chapter, compute average age difference between mothers and children. Note that not all mothers may be in the data set
function average(array){
    function plus(a, b){return a + b;}
    return array.reduce(plus) / array.length;
}
function ageDiff(p) {return p.born - byName[p.mother].born;}
function motherInList(p){return byName[p.mother] != null;}

console.log(average(ancestry.filter(motherInList).map(ageDiff)));