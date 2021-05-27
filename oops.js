var x = new Object();
console.log(x)   // by using of new keyword
// by using the object literal
var y = {}
console.log(y)     // it also returns the same
//using console.dir
console.dir(x);
console.dir(y)    // it gives the entire information
//
var Pizza = {
    crust: "thin",
    toppings: 3,
    hsBacon: true,
    howManyToppings: function () {
        return this.toppings
    }

}
Pizza.price = "12$";
console.log(Pizza);

console.log(Pizza.crust);
console.log(Pizza.toppings);
console.log(Pizza.hsBacon);
console.log(Pizza.howManyToppings());
//deletion of properties
delete (Pizza.crust);
delete (Pizza.hsBacon)
console.log(Pizza)
//using in Functional
var Pizza = function () {
    this.crust = "thin"
    this.toppings = 3
    this.hasBacon = true
};
//console.log(Pizza)
console.dir(Pizza.crust)   //returns undefined
//if u want to access store it in another obj
var Pizza1 = new Pizza();
console.dir(Pizza1.crust)
//replace Pizza1.crust
Pizza1.crust = "pan";
console.dir(Pizza1.crust)
console.dir(Pizza1 instanceof Pizza)   //it returns true because of pizza
console.dir(Pizza1.constructor)     //it returns the function
//these are public variables and public methods
//private
var Pizza = function () {
    var crust = 'THIN';
    var hasBacon = "TRUE";
    this.hasToppings = "true";   //---->private variable
    this.getToppings = function () {  //----> public method
        return this.getToppings
    }
    this.getcrust = function () {
        return crust
    }
    var getHasBacon = function () {  //--->private method
        return hasBacon;
    }
}
var PizzaA = new Pizza();
//console.dir(PizzaA.getToppings())
console.log(PizzaA.getToppings());
console.log(PizzaA.getcrust());
console.log(PizzaA.getHasBacon);
console.log(PizzaA);
//accesing the private variable by private method
var pizza = function () {
    var crust = "thin";
    var toppings = 3;
    var getToppings = function () {
        return toppings;
    }
    var temp = {}
    temp.getToppings = getToppings;  //----> closure(accessing the toppings)
    return temp;
}
var PizzaB = new pizza();
console.log(PizzaB.getToppings());
console.log(PizzaB)   