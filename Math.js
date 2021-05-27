console.log(Math.PI)  //// returns 3.141592653589793
console.log(Math.E)   // returns the euler's number
console.log(' the value of Math.LN2 is', Math.LN2);
console.log("The value of Math.SQRT1_2 is ", Math.SQRT1_2);
console.log("The value of Math.log2E is", Math.LOG2E);
console.log(Math.SQRT2);   //// returns the square root of 2
console.log(Math.LN10);  // returns the natural logarithm of 10
console.log(Math.LOG10E);// // returns base 10 logarithm of E

let a = 34.64534;
let b = 89;
console.log(Math.round(b));
console.log(Math.round(a));   // it returns nearest integer as rounded

console.log(Math.ceil(5.8));   // it returns up the nearest integer as rounded
console.log(Math.floor(5.6));  // it returns down the nearest integer as rounded

console.log(Math.ceil(4.9))
console.log(Math.ceil(4.7))
console.log(Math.ceil(4.4))
console.log(Math.ceil(4.2))
console.log(Math.ceil(-4.2))

console.log(Math.floor(4.9));
console.log(Math.floor(4.7));
console.log(Math.floor(4.4));   //Math.floor(x) returns the value of x rounded down to its nearest integer:
console.log(Math.floor(4.2));
console.log(Math.floor(-4.2));

console.log(Math.trunc(4.9));
console.log(Math.trunc(4.7));    // it returns the integer part of the number
console.log(Math.trunc(4.4));
console.log(Math.trunc(4.2));
console.log(Math.trunc(-4.2));

//Math.sign(x) returns if x is negative, null or positive:

console.log(Math.sign(-1));
console.log(Math.sign(0));
console.log(Math.sign(1));
console.log(Math.sign());    //Math.trunc() and Math.sign() were added to JavaScript 2015 - ES6.

console.log(Math.pow(3, 2));
console.log(Math.pow(2, 3));
console.log(Math.pow(-2, 3));   //Math.pow(x, y) returns the value of x to the power of y:
console.log(Math.pow(8, 2));
console.log(Math.pow(-8, 2));

console.log(Math.sqrt(64));
console.log(Math.sqrt(256));   //Math.sqrt(x) returns the square root of x:

console.log(Math.abs(5.6));    //Math.abs(x) returns the absolute (positive) value of x:
console.log(Math.abs(-5.6));

console.log(Math.sin(90 * Math.PI / 180));   // it retutns the 1 (sin of 90 d)
console.log(Math.sin(Math.PI / 2))

console.log(Math.cos(0 * Math.PI / 180))   // it returns the 1 ( cos 0f 90d)
console.log(Math.tan(Math.PI / 2))
//Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:

console.log(Math.min(4, 5, 6));
console.log(Math.max(4, 5, 6));
//Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):

console.log(Math.random());

//Math.log(x) returns the natural logarithm of x:

console.log(Math.log(10))   //Math.E and Math.log() are twins.

//How many times must we multiply Math.E to get 10?

//Math.log2(x) returns the base 2 logarithm of x.

console.log(Math.log2(8));
console.log(Math.log10(1000));

//Math.random() used with Math.floor() can be used to return random integers.

console.log(Math.floor(Math.random() * 10))
/// returns a random integer from 0 to 9

console.log(Math.floor(Math.random() * 100));
// returns a random integer from 0 to 99

console.log(Math.floor(Math.random() * 101));
// returns a random integer from 0 to 100

console.log(Math.floor(Math.random() * 10)) + 1;
// returns a random integer from 1 to 10
console.log(Math.floor(Math.random() * 100)) + 1; // returns a random integer from 1 to 100

// to generate the random number
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}
console.log(getRndInteger(0, 10))
//This JavaScript function always returns a random number between min (included) and max (excluded):

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRndInteger(1, 10));
//This JavaScript function always returns a random number between min and max (both included):







