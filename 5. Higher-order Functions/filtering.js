//filter all person who were young in 1924
console.log(filter(ancestry, function(person){
    return person.born > 1900 && person.born < 1925;
}));
//filtering function
function filter(array, test){
    var passed = [];
    for (var i = 0; i < array.length; i++){
         if(test(array[i]))
             passed.push(array[i]);
         }
    return passed;
}
//built-in filtering
console.log(ancestry.filter(function(person){
    return person.father == "Carel Haverbeke";
}));
