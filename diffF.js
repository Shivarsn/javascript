var x = { num: 2 };

var addToThis = function (a) {
    return this.num + a;
}
let result = addToThis.call(x, 3);
console.log(result);                //functionname.call(obj,function argument)
//Mulitiple parameters
var x = { num: 2 };

var addToThis = function (a, b, c) {
    return this.num + a + b + c;
}
console.log(addToThis.call(x, 3, 6, 9));
//apply for arrays
var arr = [1, 2, 3];

var addToThis = function (a, b, c) {
    return this.num + a + b + c;
}
console.log(addToThis.apply(x, arr));
// bind()
var x = { num: 2 };

var addToThis = function (a, b, c) {
    return this.num + a + b + c;
}
var bound = addToThis.bind(x);
console.log(bound(1, 2, 3));
//Closures
let f = () => {
    let i = 1;
    let j = 2;
    return () => {
        console.log(i);
        console.log(j);
    }
}
console.dir(f())
//Interview question
//for (let i = 0; i < 3; i++) {
//  setTimeout(() => {
//     console.log(i)
// }, 1000);
//}
//console.log("After the loop");
////
//for (var i = 0; i < 3; i++) {
//  setTimeout(() => {                 //it can be fixed by adding another function
//     console.log(i)
// }, 1000);
//}
//console.log("afer the loop");

//
//for (var i = 0; i < 3; i++) {
//  ((i) => {
//    setTimeout(() => {                 //it can be fixed by adding another function
//      console.log(i)
//  }, 1000);
//})(i);
//}                               //immediate invoking function by creating the blockscope

//console.log("afer the loop");
//
//for(let i=0;i<3;i++){
//  const f=()=>{
//     console.log(i)
// }
// console.log(f());
//}
"use strict"
let square = (a) => {
    return a * a                //using fatarrow
};
console.log(square(2));
//implicit return
var square2 = a => a * a;
console.log(square2(2));
//
var a = 4;
var square3 = () => {
    return a * a;
}
console.log(square3());
//_ using this also works
var a = 4;
var square3 = _ => {
    return a * a;
}
console.log(square3())
//Mutiple parameters

let multiply = (a, b) => {
    return a * b;
}
console.log(multiply(2, 4))
//example

var x = function () {
    var that = this;
    this.val = 1;
    setTimeout(function () {
        that.val++
        console.log(that.val)
    }, 1);
}
var xx = new x;
//
var x = function () {

    this.val = 1;
    setTimeout(() => {
        this.val++
        console.log(this.val)
    }, 1);
}
var xx = new x;
//
var x = function () {
    console.log(arguments[0])
};
x(1, 2, 3)
//using fat arrow
var x = () => {
    console.log(arguments[0]);
}
x(1, 2, 3);
//by overcome of using the spread operator
var x = (...n) => {
    console.log(n[0]);
};
x(1, 2, 3)
//immediately ivoked function expression
function increment(i) {
    return i + 1;
}
console.log(increment());
//using the function expression
//var increment = function (i) {
//  return i + 1;
//}
//console.log(increment(i));
//
//(function (i) {
//  return i + 1;
//})(j)
// Both are same
//  (function (i) {
//    return i + 1;
//}(j))
// without return
//!function (i) {
//block of code to be executed
//}()
//  + function (i) {
//block of code to be executed
//}
//
var counter = (function () {
    var i = 0;
    return {
        get: function () {
            return i;
        },
        set: function (val) {
            i = val;
        },
        increment: function () {
            i++
        }
    }
})();
console.log(counter.get());
counter.set(5);
counter.increment();
console.log(counter.get());
//closures examples
var addTo = function (passed) {
    var inner = 2;
    return passed + inner;
};
console.log(addTo(3));
//
var passed = 3;
var addTo = function () {
    var inner = 2;
    return passed + inner;
};
console.dir(addTo());
var passed = 4;
console.dir(addTo());

//closures are nothing but functions which is of reserved data
var addTo = function (passed) {
    var add = function (inner) {
        return passed + inner
    };
    return add;
};
var addthree = new addTo(3);   //for outer(passed)
var addfour = new addTo(4);
//console.dir(addToThree);
//console.dir(addTofour);
console.log(addthree(1));   // for inner(inner)
console.log(addfour(1));


