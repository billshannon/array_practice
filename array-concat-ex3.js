function include(array, element) {
    return (array.indexOf(element) != -1);
}

var a = [1, 2, 3, 4, 5];
var b = [1, [2,3]];

console.log(include(a, 3)); // true
console.log(include(a, 7)); // false
console.log(include(a, "3")); // false
console.log(include(a, {a : 13})); // false

//console.log(include(b, [2,3])); // true