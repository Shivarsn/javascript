var x = 5;
console.log(x == 8);
var x = 5;
console.log(x === 5);
var x = 5;
console.log(x == 5);
var x = 5;
console.log(x == "5")   //it returns true
var x = 5;
console.log(x === "5") // it returns false
var x = 5;
console.log(x != 8);  // it returns true  //!=	not equal
var x = 5;
console.log(x !== 5);   //!==	not equal value or not equal type
var x = 5;
console.log(x !== "5");  // it returns true
var x = 5;
console.log(x !== 8);  // it returns the true
var x = 5;
console.log(x > 8);  // it returns false
var x = 5;
console.log(x < 8);  // it returns the true
var x = 5;
console.log(x >= 8);  // it returns false
var x = 5;
console.log(x <= 8);  // it returns true
//Logical operators
var x = 6;
y = 3;
console.log(x < 10 && y > 1)   // it returns true
var x = 6;
y = 3;
console.log(x == 5 || y == 5)     // it returns false
var x = 6;
y = 3;
console.log(x == 6 || y == 5)  // it returns true
//Conditional(Ternary) Operator
var age, voteable;
var voteable = (age < 18) ? "Too Young " : " Old enough"
console.log(voteable);

//comparing different types

console.log(2 < 12);
console.log(2 > 12);
console.log(2 < "12"); // it returns true
console.log(2 < "john")  // it returns false
console.log(2 > "john")  // it returns false
console.log(2 == 'john');
console.log(2 === "john");  // it returns false
console.log("2" < "12"); // it returns false
console.log("2" > "12"); // it returns true
console.log("2" == "12"); // it returns false
