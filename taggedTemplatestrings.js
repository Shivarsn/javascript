var str = "hello";
console.log(str);
var str = 'hello';
console.log(str);
var str = `hello`;
console.log(str)   // both results are same
//
var str = "hello\n" + "world";
console.log(str);
var str = `hello     
world`;
console.log(str);
//
let x = `bond`;
let y = `my name is ${x},james ${x}`;
console.log(y);
//as a string
var one = 1;
var two = 2;
console.log(`adding of ${one} and ${two} gives the ${one + two}`)
//functions
var tagged = function (strArry, ...vals) {
    console.log(strArry);
    console.log(vals);
}
tagged`adding of ${one} and ${two} gives the ${one + two}`
//string stypes
console.log("hello JavaSCRIPT".startsWith("hell"));
console.log("hello javascript".endsWith("cript"));
console.log("hello".includes("ell"));
console.log("hello".repeat(5))
//
let raw = String` Not a line:\n`;
console.log(raw);
//
let raw1 = String`Not a line:\n`;
console.log(raw1);