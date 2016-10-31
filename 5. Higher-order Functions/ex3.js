//compute and output the average age of the people in the ancestry data set per century. A person is assigned to a century by taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100)
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function age(p) {return p.died - p.born;}
function century(cent, p){return Math.ceil(p.died / 100) == cent;}

//to pass additional variable binding is used
for(var i = 16; i < 22; i++)
    console.log(i + ": " + average(ancestry.filter(century.bind(null, i)).map(age)));

//different approach, groupBy function to abstract grouping is used
console.log("-----------------DIFFERENT APPROACH-----------------------");
function groupBy(array, groupMethod){
    var groups = [];
    array.forEach(function(p){
        var group = groupMethod(p);
        if(!(group in groups))
            groups[group] = [];
        groups[group].push(p);
    });
    return groups;
}           

var grouped = groupBy(ancestry, function(p){
    return Math.ceil(p.died / 100);
});
for(var group in grouped)
    console.log(group + ": " + average(grouped[group].map(age)));
// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94