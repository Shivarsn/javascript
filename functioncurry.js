var add = function (a) {
    return function (b) {
        return a + b;
    }
}
var addToFive = add(5);   //Adds 5 to a
console.log(addToFive(1)); //adds b =1
"use strict"
var avg = function (...n) {
    let total = 0;
    for (i = 0; i < n.length; i++) {
        total = total + n[i]
    }
    return total / n.length;
}
var spiceUp = function (fn, ...n) {
    return function (...m) {
        return fn.apply(this, n.concat(m));
    }
}
var doAvg = spiceUp(avg, 1, 2, 3);
console.log(doAvg(4, 5, 6));
//
var sayWhat = function (a) {
    return function (b) {
        return function (c) {
            console.log("saying" + a + " to" + b + "using" + c)
        }
    }
}
//sayWhat("hello")("friends")("js");
var fn1 = sayWhat("hi");      //here storing of hi in sayWhat function wwith fn1
var fn2 = fn1("hello");
var fn3 = fn2("gm")
//

var summation = function (num1) {
    // console.log(num1);
    return function (num2) {
        //   console.log(num1, num2);
        return function (num3) {
            //     console.log(num1, num2, num3)
            console.log(num1 + num2 + num3)
        }
    }
}
summation(5)(1)(4)
//sum(5)(3)(4);
//const sumUp = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);
//sum(5)(1)(4);
