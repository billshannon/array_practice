var include = function(arr, element){
    var output = false;
    if (Array.isArray(element) === true){
        for (var i = 0; i < arr.length; i++){
            if (arr[i][0] === element[0]){
                for (var j = 1; (arr[i][j] === element[j]) && (j < element.length); j++){
                    output = true;
                };
            };
        };
    }
    else {
        for (var i = 0; i < arr.length; i++){
            if (arr[i] === element){
                output = true;
            };
        };
    };
    return output;
};