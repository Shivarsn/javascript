//using of spread operators
var x = function (...n) {
    console.log(n)
};
x(1, 2, 3);         //it returns the array[1,2,3];
//without using the operators
var x = function () {
    console.log(arguments)
};
x(1, 2, 3);
//
var x = function () {
    var args = Array.prototype.slice.call(arguments, 0);
    var args = [].slice.call(arguments, 0);
};
x(1, 2, 3);
//REST operator  
var n = [2, 4, 6]
var x = function (a, b, c, ...n) {
    console.log(n);
    console.log(x);
}
x(1, 2, 3)
//using of spread operator
var dowhatever = ["watch movie", "watch cricket"];
var life = ["learn to walk", "learn react", ...dowhatever]

console.log(life);
//Example
var a = [1, 2, 3];
var b = [2, 3, 4];
Array.prototype.push.apply(a, b)
//a.push(...b);
console.log(a)
//
let x1 = [1, 2, 3];
let y = x1;
console.log(y)
//
let x2 = [1, 2, 3];
let y1 = Object.assign([], x2);
console.log(y1);
//
let x3 = [2, 3, 4];
let y2 = [...x3];
console.log(y2)
//
var x22 = [1, 2, 3, 4];
var y22 = [10, 20, 30];
console.log([...x22], [...y22]);
console.log(...x22, ...y22);
console.log([...x22, ...y22]);
console.log(x22.concat(...y22));
//array to arguments
var z = [11, 22, 33];
function func(...arguments) {
    console.log(arguments)
}
func(z);
func.apply(null, z)  //---> before introduction of spread operator
//
var something = [4, 5];
console.log(Math.hypot(...something))
//
var extra = [24, 56, 65, 9, 3, 66, 44, 883, 000];
console.log(Math.max(...extra));
console.log(Math.min(...extra));
console.log(Math.hypot(...extra));