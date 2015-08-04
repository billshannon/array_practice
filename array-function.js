function slice(array, first, last) {
    var array= array;
    var slice = array.slice(first, last);
    return slice;

};

console.log(slice([1, 2, 3, 4, 5], 1,3 ))
console.log(slice([1, 2, 3, 4, 5],1))
console.log(slice([1, 2, 3, 4, 5],-2))
console.log(slice)