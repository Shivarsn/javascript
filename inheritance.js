//
//x--->prototype
//         |
//     methods and properties
//x1-->which inherits the methods and properties of x;
var x = function (j) {
    this.i = 0;         //----> setting the constructor
    this.j = j;
    this.getj = function () {
        return this.j;
    }
}
var x1 = new x(1);
var x2 = new x(2);
console.log(x1)
console.log(x2);
console.log(x1.getj());
console.log(x2.getj())
//prototype  access properties from parent objects
var x = function (j) {   //every function expression has constructor
    this.i = 0;
    this.j = j;

}
x.prototype.getj = function () {
    return this.j;
}
var x1 = new x(1);
var x2 = new x(2);

console.log(x1.getj());
console.log(x2.getj());
//master object  --> object is originated from master object
var x = function () {

}
console.dir(x);   // it consists of proto means parent or creater and also inside of it ,contains another proto has object
console.log(x);
console.log(x.toString);  // it returns body of the function

