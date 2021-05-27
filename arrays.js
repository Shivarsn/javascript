//java script arrays are used to store mutiple values in a single variable


//creating the array as follows
//1.array literal
//2.new keyword

var cars = ["Saab", "Volvo", "BMW"];
var last = cars[cars.length - 1];
console.log(last)
console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars.length);
console.log(cars.length - 1);

var cars = [
    "Saab",
    "Volvo",
    "BMW"
];
console.log(cars);
//There is no use of new Array(),but for the readability,speed execution,simplicity we can use array literal
var cars = new Array("Saab", "Volvo", "BMW");
console.log(cars)
// Changing an array element


var cars = ["Saab", "Volvo", "BMW"];
cars[0] = ["opel"];
cars[0] = "opel"
console.log(cars)
console.log(typeof cars)     //type of operator in js returns "Object"  in Arrays

var person = { firstName: "John", lastName: "Doe", age: 20 };
console.log(person)
console.log(person.firstName)
console.log(person.lastName);
console.log(person.age);
console.log(person.firstName[0]);
console.log(person.firstName[1]);
console.log(person.firstName[2]);
console.log(person.firstName[3]);
// adding the array element


var cars = ["Saab", "Volvo", "BMW"];
cars.push("Opel");

console.log(cars);

// by using length property can also be added Element
var cars = ["Saab", "Volvo", "BMW"];
cars[cars.length] = "Opel";
console.log(cars);

// adding high indexes for elements it can create undefined holes
var cars = ["Saab", "Volvo", "BMW"];
cars[6] = "OPEL"
console.log(cars);
// Associate Arrays
//Arrays with named indexes are called as Associate indexes
var person = [];
console.log(person);
person[1] = "JOHN";
person[2] = "DOE";
console.log(person)        //number indexes
var x = person.length;
console.log(x)
var y = person[0];
console.log(y)
// for named indexes it will always produced incorrect results
var person = [];
person['firstName'] = "JOHN";
person['lastName'] = "DOE"
person['age'] = 26;
var x = person.length;
console.log(x);
console.log(person);
var y = person[0];
console.log(y)

//differences between the arrays and objects

// arrays always use numberedindexes
//objects always use namedindexes

// when to use arrays and to use of objects
//1.javascript doesnt support associate arrays;
//2.if you want the element names to be  strings, on that case we use objects;
//3.if you want the element names to be numbers, on that case we use arrays;

//Avoid newArray(),use instead[];
var points = new Array();  //it results are bad;
console.log(points);
var points = []   //it results are good
console.log(points);
var points = new Array(20, 10);
console.log(points)
var points = new Array(20)
console.log(points);
// Array.isArray()
var fruits = ["Banana", "Orange", "Apple", "Mango"];


//console.log(points);
console.log(Array.isArray(fruits))
console.log(fruits)
// instanceOf operator returns true  if an object is created by an constructor

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits instanceof Array);
console.log(fruits);


