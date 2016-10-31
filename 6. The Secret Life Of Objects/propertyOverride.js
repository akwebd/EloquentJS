//when property is added to an Object and it matches property in the prototype, prototype property is ignored. Prototype itself is not changed
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
killerRabbit.teeth = "long, sharp and bloody";
console.log(killerRabbit.teeth);
console.log(blackRabbit.teeth);
console.log(Rabbit.prototype.teeth);

//Override is also used to give array different toString method
console.log(Array.prototype.toString == Object.prototype.toString);
console.log([1, 2].toString());

//When trying to call Object.prototype.toString with an array produces a different string. Because that function simply doesn't know about arrays.
console.log(Object.prototype.toString.call([1, 2]));