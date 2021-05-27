//Loops can execute a block of code a number of times.
// it is also known as entry loop, if the number of iterations are known in advance
for (let i = 0; i <= 10; i++) {
    console.log(5 * i);
}                            // print the 5 table
for (let i = 1; i <= 10; i++) {
    console.log(8 * i);
}                          // 8th table
// print the even numbers
for (let i = 2; i <= 20; i += 2) {
    console.log(i)

}
//print the odd numbers
for (let i = 3; i <= 10; i += 3) {
    console.log(i)
}
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
//For in
//for (key in object) {
// code block to be executed
//}
var person = { fName: 'John', lName: 'Doe', age: 20 }
var x;
for (x in person) {
    console.log(person[x]);
}
//The for in loop iterates over a person object
//Each iteration returns a key (x)
//The key is used to access the value of the key
//The value of the key is person[x]
// looping over an array
var cars = ['BMW', 'VOLVO', 'FORD'];
var x;
for (let x of cars) {
    console.log(x)                        //variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
}
// Looping over the string
var language = "Java Script";
var x;
for (let x of language) {
    console.log(x)
}
// while loop
// print the odd numbeers
var x = 1;
while (x < 10) {
    console.log(x);
    x += 2;  // x=x+2;
}
//let size = ['s', 'm', 'l', 'xl'];
//let i = 0;
//while (size[i]) {
//  i++;
//console.log(size[i])
//}
//do while
var size = ['S', 'M', 'X', 'XL'];
var i = 0;
do {
    console.log(size[i]);
    i++
}
while (i <= size.length - 1);
//The example below uses a do/while loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:
var x = 7;
do {
    console.log("JSON");
    x--;
}
while (x > 5);
//break it jumps out from an loop
//continue it jumps over one iteration in an loop
for (i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}
for (i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}
// Javascript Labels
//The break and the continue statements are the only JavaScript statements that can "jump out of" a code block.

//Syntax:

//break labelname;

//continue labelname;
//The continue statement (with/without)label it can skip one  loop iteration;
//the break statement(with/without)label it can be used to jump out of loop /swith
//with label reference the Break statement may jump out of any code block
var cars=["BMW","VOLVO","FORD"];
lists:{
    console.log(cars[0]);
    console.log(cars[1]);
    break lists;
    console.log(cars[2]);
    console.log(cars[3]);
}
