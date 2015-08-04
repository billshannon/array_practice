// not complete

function Slice(arr, firstIndex, lastIndex) {
    var output = [];

    if (firstIndex < 0) {
        firstIndex = arr.length + firstIndex;

    }
    else if (firstIndex === undefined) _
    {
        firstIndex = 0;
    }
    ;

    if (lastIndex > arr.length - 1) {
        lastIndex = arr.length;
    }
    else if (lastIndex === undefined) {
        lastIndex = arr.length;
    }
    ;

    for (var i = firstIndex; i < lastIndex; i++) {
        output.push()
    }
}