var original = ['a','b','c'];
var new1 = 'd';
console.log(original.concat(new1));
// ['a','b','c','d']

console.log(original); // unmodified

var new2 = ['e'];
console.log(original.concat(new2));
// ['a','b','c','e']

var new3 = [['f'], 'g'];
console.log(original.concat(new3));
// ['a','b','c',['f'],'g']