var peopleCats = ["usaama", "hana"];
var actualCats = ["binx", ["teeny", "ms. purr"]];
var fakeCats = {kitty: "chubs"};
var smellyCats = "pheobe";

function conGato() {
    var output = [];
    for (var i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i]) === false) {
            var newArray = [];
            newArray.push(arguments[i]);
        }
        else {var newArray = arguments[i]};
        for (var j = 0; j < newArray.length; j++) {
            output.push(newArray[j]);
        }
    }
    return output;
}

var allCats = conGato(peopleCats, actualCats, fakeCats, smellyCats);

console.log(allCats);
console.log("--- originals are still in tact ---")
console.log(peopleCats);
console.log(actualCats);
console.log(fakeCats);
console.log(smellyCats);