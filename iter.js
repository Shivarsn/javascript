//ForEach() Method
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
    txt = txt + value + "<br>";
}
console.log(txt);
//Map method

var numbers = [45, 4, 9, 16, 25]
var num2 = numbers.map(myF);
function myF(value, index, array) {
    return value * 2;
}
console.log(num2)
// Filter() method
var numbers = [45, 4, 9, 16, 25]
var num2 = numbers.filter(myF);
function myF(value, index, array) {
    return value > 9;
}
console.log(num2)
//Reduce() method
var numbers = [45, 4, 9, 16, 25]
var sum = numbers.reduce(myF);
function myF(total, value, index, array) {
    return total + value;
}
console.log(sum);
// reduce() method can accept initial value
var numbers = [45, 4, 9, 16, 25]
var sum = numbers.reduce(myF, 100);
function myF(total, value) {
    return total + value;
}
console.log(sum)
//reduceRight();
var numbers = [45, 4, 9, 16, 25]
var sum = numbers.reduceRight(myF);
function myF(total, value) {
    return total + value;
}
console.log(sum)
//Array.every()
var numbers = [45, 4, 9, 16, 25];
var allOver = numbers.every(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
console.log(allOver);
//SOME()
var numbers = [45, 4, 9, 16, 25];
var somenumbers = numbers.some(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
console.log(somenumbers);

//indexOf()
var numbers = [45, 4, 9, 16, 25];
var x = numbers.indexOf(45);
console.log(x);
//lastIndexOf()
var fruits = ["APPLE", "BANANA", "MAMGO"];
var x = fruits.lastIndexOf("APPLE");
console.log(x);
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Orange");
console.log(a);
//The find() method returns the value of the first array element that passes a test function.

//This example finds (returns the value of) the first element that is larger than 18:
var numbers = [4, 9, 16, 25, 29];
var num1= numbers.find(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
console.log(num1);
//findIndex()
var numbers = [4, 9, 16, 25, 29];
var num1= numbers.findIndex(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
console.log(num1);

