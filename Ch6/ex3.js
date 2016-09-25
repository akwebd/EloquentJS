////create an object that provides interface which abstracts iteration over a collection of values. Interface must somehow make it possible for code that uses such an object to iterate over the sequence.
//function Sequence(seq){
//    this.sequence = seq;
//}
//
//Sequence.prototype.iter = function(num){
//    if (num < this.sequence.length)
//        return this.sequence[num];
//    else
//        return -1;
//}
//
////write a function logFive that takes a sequence object and calls console.log on its first five elements, or fewer, if sequence has fewer elements
//function logFive(seq){    
//    for(var i = 0; i < 5; i++)
//        if(seq.iter(i) !== -1)
//            console.log(seq.iter(i));
//        else
//            break;
//}
//
////implement an object type ArraySeq that wraps an array and allows iteration over the array using already defined interface
//function ArraySeq(array){
//    Sequence.call(this, array);
//}
//ArraySeq.prototype = Object.create(Sequence.prototype);
//
////implement object type RangeSeq that iterates over a range of integers taking FROM and TO arguments to its constructor
//function RangeSeq(from, to){
//    var sequence = [];
//    for (var i = from; i < to + 1; i++)
//        sequence.push(i);
//    Sequence.call(this, sequence);
//}
//RangeSeq.prototype = Object.create(Sequence.prototype);
//above code does not solve the problem correctly. new code to be programmed
//tests from the book
logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104