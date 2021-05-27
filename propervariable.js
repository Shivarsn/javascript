
//(function () {
//  var i = 1;
//(function () {
//   console.log(i);
// (function () {             //best example of lexical scoping
//    console.log(i)
// })();
//})();
//})();
//example
//(function () {
//  (function () {
//    (function () {
//      var i = 1;                  //getting the error
//})();
//})();
//})();
//console.log(i)
//for global access
//(function () {
//  (function () {
//    (function () {
//      i = 1;
//})();                 //it becomes global
//})();
//})();
//console.log(i)
"use strict";
 (function(){
      (function(){
         (function(){
                i = 1;
            })();
        })();           //shows error
        
    })();
console.log(i);