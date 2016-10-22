//Replace single quotation marks with double without affecting contractions

var text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/'\b([^]+?[^\w])'/g, "\"$1\""));
// → "I'm the cook," he said, "it's my job."