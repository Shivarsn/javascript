"use strict";
(function () {
    var i = 1;
    if (true) {
        var i = 2;             //beacuse var key word not works for blockscope
        console.log(i);
    };
    console.log(i);
})();
//javascript introduces new feature like let,const
(function () {
    let i = 1;
    if (true) {
        let i = 2;                       //---->block scope
        console.log(i);   //2
    }
    console.log(i);   //1     //---> global scope
})()
//use of const
const i = 2;
i = 3;
console.log(i);       //shows aan error
