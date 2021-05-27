// it can point an object
// we can access objects info like events,props,methods
//base object     window it stores the cat value as 10;
var cat = 10;
console.log(10);
//using of this in function level
function some() {
    var x = 1;
    y = 1;
    console.log(this);
}
//console.log(some())
some()    //it stores in window
//
var myobj = {
    heroname: "chiru",
    director: "v.v.vinayak",
    movie: function () {
        console.log(this);
    }
}
console.log(myobj.movie());   // it returns the myobj key value pairs
//using the strict
function fi() {
    console.log(this)
}
console.log(fi());         // it stores in window object
//use strict               example u are not declared any values on that case we use use strict
function fi() {
    "use strict"
    console.log(this)

}
fi();      // it shows undefined
//globally scope
"use strict"

this.table = "window table";
const cleanup = function (soap) {
    let that = this;           // to access the this.table
    const innerfunction = function (_soap) {
        console.log(`cleaning ${that.table} using ${_soap}`)
    }
    innerfunction(soap)
}
console.log(this.cleanup)          // by using the strict mode it shows the undefined
console.log(cleanup.call(this, "some soap"))     // by using the call we caan overcome it
this.garbage = {
    table: "garbage table",
    //cleanTable() {
    //   console.log(`cleaning ${this.table}`)
    //  }
}
//console.log(this.garbage);
//inside the method
let johnRoom = {
    table: "johns table",
    //  cleanTable() {
    // console.log(`cleaning ${this.table}`)
    // }
}
//console.log(johnRoom.cleanTable())
//console.log(this.garbage.cleanTable());
console.log(cleanup.call(this.garbage, "some soap"))
console.log(cleanup.call(johnRoom, "some soap"))

this.table = "window table";
const cleanup1 = function (soap) {
    // to access the this.table
    const innerfunction = function (_soap) {
        console.log(`cleaning ${this.table} using ${_soap}`)
    }
    innerfunction.call(this, soap)
    innerfunction.bind(this)(soap)
}
console.log(this.cleanup1)          // by using the strict mode it shows the undefined
console.log(cleanup1.call(this, "some soap"))
//using the fat arrow
this.table = "window table";
const cleanup3 = function (soap) {

    const innerfunction = (_soap) => {
        console.log(`cleaning ${this.table} using ${_soap}`)
    }
    innerfunction(soap)
}
console.log(this.cleanup3)          // by using the strict mode it shows the undefined
console.log(cleanup3.call(this, "some soap"))
//
this.table = "window table";
const cleanup5 = function (soap) {
    console.log(`cleaning ${this.table} using ${soap}`)
}
this.garbage = {
    table: "garbage table",
}
let createRoom = function (name) {
    this.table = `${name}s table`    //using constructor
}
const doeRoom = new createRoom("doe")
const dheeRoom = new createRoom("dhee")

//console.log(this.cleanup5)          // by using the strict mode it shows the undefined
//console.log(cleanup5.call(this, "some soap"))
console.log(cleanup5.call(doeRoom, "some soap"))
console.log(cleanup5.call(dheeRoom, "some soap"))
//
this.table = "window table";

this.garbage = {
    table: "garbage table",
}
let createRoom1 = function (name) {
    this.table = `${name}s table`    //using constructor
}
createRoom1.prototype.cleanTable = function (soap) {
    console.log(`cleaning ${this.table} using ${soap}`)
}
const sachinRoom = new createRoom1("Sachin")
const rohitRoom = new createRoom1("Rohit")
console.log(sachinRoom.cleanTable("some soap"));
console.log(rohitRoom.cleanTable("some soap"))
// using inside the class
this.table = "window table";

this.garbage = {
    table: "garbage table",
}
class createRoom2 {
    constructor(name) {
        this.table = `${name}s  table `
    }
    cleanTable1(soap) {
        console.log(`cleaning ${this.table} using ${soap}`)
    }
}   //using constructor


const dhoniRoom = new createRoom2("dhoniroom")
const rainaRoom = new createRoom2("rainaroom")
console.log(dhoniRoom.cleanTable1("some soap"));
console.log(rainaRoom.cleanTable1("some soap"))


