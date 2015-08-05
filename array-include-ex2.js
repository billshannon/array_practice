var include = function (array, target) {
    for (element in array) {
        if ('object' == typeof ( array[element] )) {
            for (sndElement in array[element]) {
                if (target[sndElement] == array[element][sndElement] &&
                    array[element].length == target.length) {
                    return true;
                }
            }
        }
        if (array[element] === target) {
            return true;
        }
    }
    return false;
}

var a = [1, 2, 3, 4, 5];
var b = [1, [2, 3]];
var c = [1, {a: 1}];
console.log("true ?>> " + include(a, 3)); //true
console.log("false ?>> " + include(a, 7)); //false
console.log("false ?>> " + include(a, "3")); //false
console.log("false ?>> " + include(a, {a: 1})); //false
console.log("true ?>> " + include(b, [2, 3])); //true ?
console.log("true ? >> " + include(c, {a: 1}));
console.log("false ? >> " + include([1, 2, 3, [4, 5, 6]], [4, 5]));