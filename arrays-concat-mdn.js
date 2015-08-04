var alpha = ['a', 'b', 'c'],
    numeric = [1, 2, 3];

var alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // Result: ['a', 'b', 'c', 1, 2, 3]


var num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];

var nums = num1.concat(num2, num3);

console.log(nums); // Result: [1, 2, 3, 4, 5, 6, 7, 8, 9]


var alpha = ['a', 'b', 'c'];

var alphaNumeric = alpha.concat(1, [2, 3]);

console.log(alphaNumeric);
// Result: ['a', 'b', 'c', 1, 2, 3]