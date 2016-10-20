console.log("-----car and cat match-----");
verify(/car|t/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

console.log("-----pop and prop-----");
test(/pr?op/, cases[1]);

console.log("-----ferret and ferry and ferrari-----");
test(/ferr(et|y|ari)/, cases[2]);

console.log("-----ending in ious-----");
test(/ious$/, cases[3]);

console.log("-----whitespace followed by a . , : ;-----");
test(/\s(\.|\,|\;|\:)/, cases[4]);

console.log("-----word longer than six letters-----");
test(/\w{6,}/, cases[5]);

console.log("-----word without e-----");
test(/[^e+]/, cases[6]);

verify(/.../,
       ["pop culture", "mad props"],
       ["plop"]);

verify(/.../,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/.../,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/.../,
       ["bad punctuation ."],
       ["escape the dot"]);

verify(/.../,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

verify(/.../,
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
