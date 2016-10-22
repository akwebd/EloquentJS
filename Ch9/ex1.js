console.log("-----car and cat match-----");
verify(/ca[rt]/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

console.log("-----pop and prop-----");
verify(/pr?op/,
       ["pop culture", "mad props"],
       ["plop"]);

console.log("-----ferret and ferry and ferrari-----");
verify(/ferr(et|y|ari)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

console.log("-----ending in ious-----");
verify(/ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

console.log("-----whitespace followed by a . , : ;-----");
verify(/\s[.,;:]/,
       ["bad punctuation ."],
       ["escape the dot"]);

console.log("-----word longer than six letters-----");
verify(/\w{7,}/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

console.log("-----word without e-----");
verify(/\b[a-df-z]+\b/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("Unexpected match for '" + s + "'");
  });
}
