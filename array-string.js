function toString(array) {
    var arrToString = array.join(', ');
    return arrToString
}

console.log(toString(["hello", "there"])); // 'hello there'
console.log(toString([1,2,3,4,5,])); // 1,2,3,4,5