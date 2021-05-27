const { boolean } = require("mathjs");


//For this, JavaScript has a Boolean data type. It can only take the values true or false.
console.log(Boolean(10 > 9))
console.log(Boolean(10 < 9))
console.log(Boolean(100));
console.log(Boolean());
console.log(Boolean(3.14))
console.log(Boolean(-15))
console.log(Boolean("Hello"));
console.log(Boolean("false"));
console.log(Boolean(7 + 1 + 3.14));
var x = 0;
console.log(Boolean(x));
var x = -1;
console.log(Boolean(x));   // it returns the true
var x = -0;
console.log(Boolean(x));   // it returns the false
var x = '';
console.log(Boolean(x));  // for empty string it returns false
var x;
console.log(Boolean(x));  // undefined means it shows false
var x = null;
console.log(Boolean(x));
var x = 'false';              // it returns the true
console.log(Boolean(x))
var x = false;
console.log(Boolean(x))  // it returns false
var x = 10 / "H";
console.log(Boolean(x));

//Boolean can be created by using literals
var x = false;
console.log(Boolean(x))
console.log(x)
//Boolean can also be defined as objects with the keyword new
var y = new Boolean(false);
console.log(Boolean(y));
console.log(typeof y);
// typeof x returns boolean
// typeof y returns object
var x = false;
var y = new Boolean(false);
console.log(x == y);   //When using the == operator, equal booleans are equal:
console.log(x === y);   //When using the === operator, equal booleans are not equal, because the === operator expects equality in both type and value.

var x = new Boolean(false);
var y = new boolean(false);
console.log(x===y)  // objects can not be compared