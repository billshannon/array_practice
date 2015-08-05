### 1. What is an Array?
```
An array is an indexed, ordered collection of values
```

### 2. How does JavaScript implement arrays?

```
JavaScript can implement arrays in the browser. JS Arrays are technically special case objects that inherit from the Object.prototype. Although arrays are objects, the browser treats both arrays and objects very differently in terms of performance. 
```
### 3. Provide examples for three Array methods that can be found in the standard library. In the comments for each example explain what the standard library method does.

// Array.prototype.concat() ---- concat returns a new array, returning the values of two or more arrays.
  
```
var men = ["Tom", "Bob"];
var women = ["Sally", "Jane", "Diana"];
var coed = men.concat(women);

console.log(coed)

```

// Array.prototype.slice() ---- returns an extracted part of the array into a new array.

```
var instruments = ["Bass", "Drums", "guitar", "Keys", "Horns"];
var riddimSection = instruments.slice(0, 2);

console.log(riddimSection)

```

// Array.prototype.join() ---- joins all the elements of an array into a string.

```
var quarterNotes = [1, 2, 3, 4];
var eighthNotes = quarterNotes.join(" and ") + " and ";

console.log(eighthNotes)

```