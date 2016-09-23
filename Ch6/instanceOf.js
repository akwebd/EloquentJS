//instanceOf operator helps to check if specific object was derived from certain prototype
console.log(new RTextCell("A") instanceof RTextCell);
console.log(new TextCell("A") instanceof TextCell);
console.log(new TextCell("A") instanceof RTextCell);
console.log([1] instanceof Array); 