var x = 3.14;
console.log(x);

var y = 3;
console.log(y);

var x = 123e3;
console.log(x);

var y = 123e-3;
console.log(y);

var x = 999999999999999;
console.log(x);

var y = 99999999999999999;
console.log(y);

var x = 0.2 + 0.1;
console.log(x)    //floating points are not 100% accurate;

var x = (0.2 * 10 + 0.1 * 10) / 10;
console.log(x);

var x = 20;
var y = 10;
console.log("result is:" + x + y);

var x = '20';
var y = '10';
var z = x + y
console.log(z)

var x = '20' / 'john';
console.log(x);

var x = 20 / '10';
console.log(x)

var x = '20' / 'john';

console.log(isNaN(x));

var x = NaN;
var y = 5;
var z = x + y;
console.log(z)

var x = NaN;
console.log(typeof x)
var y = '5';
var z = x + y
console.log(z)

var x = 'NaN';
console.log(typeof x)
var y = 5;
var z = x + y
console.log(z)

//infinity
var x = 2 / 0;
console.log(x)

var x = -3 / 0;
console.log(x)
console.log(typeof x)

var x = 0xFF;
console.log(x)
console.log(typeof x);

var x = 8;
console.log(x.toString(2));  //binary
console.log(x.toString(8)); //octal
console.log(x.toString(10));  //decimal
console.log(x.toString(16)); //hexa
console.log(x.toString(32));
var x = 2;
console.log(typeof x)

var y = new Number(2);
console.log(typeof y)

console.log(x == y);
console.log(x === y);


var x = new Number(2);
var y = new Number(2);
console.log(x === y);


var x = 123.3;
console.log(x.toExponential(2));
console.log(x.toExponential(3))
console.log(x.toExponential(5));

var x = 1.45;
console.log(x.toFixed(1));
console.log(x.toFixed(0));
console.log(x.toFixed('1'));
console.log(x.toFixed(2))
console.log(x.toFixed(3))
console.log(x.toFixed(5));

var x = 1.45;
console.log(x.toPrecision())
console.log(x.toPrecision(1))
console.log(x.toPrecision(2))
console.log(x.toPrecision(3))
console.log(x.toPrecision(4))     // returns a string with specified length
var x = 9.656;
console.log(x.toPrecision());
console.log(x.toPrecision(1));
console.log(x.toPrecision(2));
console.log(x.toPrecision(3));
console.log(x.toPrecision(4));
console.log(x.toPrecision(5));

//conversion of numbers to variables

var x = Number(true);
console.log(x)
var x = Number(false);
console.log(x)

console.log(Number('10'));
console.log(Number('10          '));
console.log(Number('          10'));
console.log(Number('   10    '));
console.log(Number('10.22'));
console.log(Number('10, 33'));
console.log(Number('10 33'));
console.log(Number('John'));
console.log(Number('10', '30'));

//used ondates
var x = new Date("2017-09-30")
console.log(Number(x));
// parseInt() method  only first number is allowed
var x = '10';
console.log(parseInt(x));
var x = '1.23';
console.log(parseInt(x));
var x = '1 2 3';
console.log(parseInt(x));
var x = '10 years';
console.log(parseInt(x));
var x = ' years 30';
console.log(parseInt(x));

var x = '10';
console.log(parseFloat(x));
var x = '1.23';
console.log(parseFloat(x));
var x = '1 2 3';
console.log(parseFloat(x));
var x = '10 years';
console.log(parseFloat(x));
var x = ' years 30';
console.log(parseFloat(x));

var x = Number.MAX_VALUE;
console.log(x)                // returns the largest possible number in js

var y = Number.MIN_VALUE;       //returns the lowest possible number in js

console.log(y);

var x = Number.POSITIVE_INFINITY;
console.log(x);
var y = Number.NEGATIVE_INFINITY;
console.log(y);

var x= Number.NaN;
console.log(x)