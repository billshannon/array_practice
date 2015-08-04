function concat(original,newOne) {
    var arr1 = {};
    var concatArray = [];
    for (var i = 2; i--; original=newOne)
        original.map(function(final){
            arr1[final] = arr1[final] || concatArray.push(final)
        })
    return concatArray
}

console.log(concat(['a', 'b', 'c'], [2]))