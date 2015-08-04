function concat(array){
    var output = [];
    for(var x=0;x<arguments.length;x++){
        if (Array.isArray(arguments[x])) {
            for (var i=0;i<arguments[x].length;i++){
                output.push(arguments[x][i]);
            }
        } else {
            output.push(arguments[x]);
        }
    }
    return output;
}