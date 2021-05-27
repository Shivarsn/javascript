var arry = [];
console.log(arry);//---> array litertal
//using the new keyword
var myArray = new Array();
console.log(myArray);
//for sets
var set = new Set();
console.log(set)    //---> doesnt support set literal
//
var arry = [];
arry[0] = 1;
console.log(arry);
//
var set = new Set();
set.add(1);     //--> making the use of add property
console.log(set)
//chain method
var set = new Set();
set.add(1).add(2).add(3);
console.log(set);
//deletion
var set = new Set();
set.add(1).add(2).delete(2);
console.log(set);
//clear
var set = new Set();
set.add(1).add(2).clear();
console.log(set);// ----> it returns the set(0)
//size
var set = new Set();
set.add(1).add(2);
console.log(set.size)  //it returns the size as 2;
//array
var array = [1, 2, 3];
var set = new Set(array);
console.log(set)
//
var array = [];
var set = new Set([1, 2, 3]);
set.add(1).add(2);
console.log(set);
//for of
var array = [];
var set = new Set([1, 2, 3]);
set.add(1).add(2);
for (let keys of set) {
    console.log(keys);
}
//sets are not treated as arrays but seams to be like as arrays and doesn't have ordering;
//using of spread operator in sets
var array = [1, 2, 2, 3, 3, 4, 4, 4, 2];
console.log([...new Set(array)])     //----> it returns the [1,2,3,4]
//
var array = [1, 2, 2, 3, 3, 4, 4, 4, 2];
var set = new Set(array);
console.log(set)
//Array.from
var array = [1, 2, 2, 3, 3, 4, 4, 4, 2];
console.log(Array.from(new Set(array)));    // it returns the [1,2,3,4]
//weaksets takes only objects{} and doesn' t support for iteration purpose
//var ws = new WeakSet();
//ws.add(1);
//console.log(ws)    //----> throws an error called ad invalid value in weak set
//
var ws = new WeakSet();
ws.add({ a: 1 });
console.log(ws);
//
var ws = new WeakSet([{ a: 1 }, { b: 2 }]);
console.log(ws)
//
var ws = new WeakSet([{ a: 1 }, { b: 2 }]);
for (let keys of ws) {
    console.log(keys);     //----> ws is not a iterable(TypeError)

}
//example
var ws = new WeakSet();
class someClass {
    constructor() {
        ws.add(this)
    }
    method() {
        if (!ws.hasadd(this)) {
            throw new TypeError('SomeClass.protoType.method called as incompatible Object!')
        }
    }
};
console.log(method());

