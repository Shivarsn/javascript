var peopleFactory = function (name, age, state) {
    var temp = {};
    temp.age = age;
    temp.name = name;
    temp.state = state;
    temp.printPerson = function () {
        console.log(this.name + "," + this.age + "," + this.state);
    }
    return temp;
};
var person1 = new peopleFactory("john", 22, "AP");       //--------->Factory pattern
var person2 = new peopleFactory("rohit", 24, "mumbai");

console.log(person1.printPerson());
console.log(person2.printPerson());
//Constructor pattern
var peopleConstructor = function (name, age, state) {
    this.name = name;
    this.age = age;
    this.state = state;
    this.printPerson = function () {
        console.log(this.name + "," + this.age + "," + this.state);
    }
}
var person1 = new peopleConstructor("sky", 30, "delhi");
var person2 = new peopleConstructor("Doe", 32, "delhi");

person1.printPerson();
person2.printPerson();
//prototypes
//properties of functions shared the spaces known as prototypes
//every objects can shared the spaces are also known as prototypes
var peopleProto = function () {
    peopleProto.prototype.age = 0;
    peopleProto.prototype.name = "no name";
    peopleProto.prototype.state = "no state";
    peopleProto.prototype.printPerson = function () {
        console.log(this.name + "," + this.age + "," + this.state)
    }
}
var person1 = new peopleProto();
person1.name = "john";
person1.age = 22;
person1.state = "ap"

person1.printPerson();
console.log(person1);
console.log("name" in person1)
console.log(person1.hasOwnProperty("name"));
console.log("age" in person1);
console.log(person1.hasOwnProperty("age"));
console.dir(peopleProto);
//dynamic prototype for reduction of complexity of many number of objects
var peopleDynamicproto = function (name, age, state) {
    this.name = name;
    this.age = age;
    this.state = state;
    if (typeof this.printPerson1 !== "function") {
        peopleDynamicproto.prototype.printPerson = function () {
            console.log(this.name + "," + this.age + "," + this.state)
        }
    }
}
var person1 = new peopleDynamicproto("john", 23, "vizsbc");
console.log("name" in person1);
console.log(person1.hasOwnProperty("name"));
//person1.printPerson();
