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


//the interface will contain two methods:
//next - bool method to check if next sequence element exists;
//current - int method to return current sequence element;

//write a function logFive that takes a sequence object and calls console.log on its first five elements, or fewer, if sequence has fewer elements
function logFive(seq){    
    for(var i = 0; i < 5; i++)
        if(seq.next())
            console.log(seq.current());
        else
            break;
}
//implement an object type ArraySeq that wraps an array and allows iteration over the array using already defined interface
function ArraySeq(array){
    this.sElem = 0;
    this.sequence = array;
}
ArraySeq.prototype.next = function(){
    if (this.sElem < this.sequence.length)
        return true;
    else {
        this.sElem = 0;
        return false;
    }
};
ArraySeq.prototype.current = function(){
    this.sElem++;
    return this.sequence[this.sElem - 1];
}

//implement object type RangeSeq that iterates over a range of integers taking FROM and TO arguments to its constructor
function RangeSeq(from, to){
    this.sElem = from;
    this.from = from;
    this.to = to;
}
RangeSeq.prototype.next = function(){
    this.sElem++;
    if (this.sElem < this.to)
        return true;
    else {
        this.sElem = this.to;
        return false;
    }
};
RangeSeq.prototype.current = function(){
    return this.sElem - 1;
}

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