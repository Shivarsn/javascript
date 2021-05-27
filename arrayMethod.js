//conversion of arrays to strings
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());                            // conversion of arrays to a string(comma separated ) array values;
console.log(fruits.join());
console.log(fruits.join(" ,"))
console.log(fruits.join("& "));     //toString and join behaves same ,in the join method we can use of separator
// pop( ) it removes last element from an array

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop());

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.pop();
console.log(x);
//push() adds new element at last  to an array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x=fruits.push("Kiwui")
console.log(x)       // it returns the new array length
console.log(fruits)
//shifting an elements
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.shift());    //removes the first element from an array and shifts all elements as lower indexes
console.log(fruits)
var x = fruits.shift();
console.log(x);
// unshift()  adds the new element to an array(beginning) and unshifts all older elements
var fruits = ["Banana", "Orange", "Apple", "Mango"];
 var x=fruits.unshift("Lemon");
console.log(fruits)
console.log(x);   // it returns the new array length
// array elements are accessed by using their index number
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0]="kiwi"
console.log(fruits);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length]="Kiwi";     // it justs add element to the last
console.log(fruits);

// delete()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
console.log(fruits);
 // splice( ) uses to add new elementsto an array
 var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,0,"Lemon","Kiwu")
console.log(fruits)
fruits.splice(4,2,"Lemon","Kiwu")
console.log(fruits)     //  the first parameter (4), defines the position  where new elements to be added
// the second parameter(2), defines how many elements should be removed
// it just returns an array with the deleted elements
//using splice(), to remove elements
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0,1);   // it removes the first element in an array
console.log(fruits);
console.log(fruits)

//concat() 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var vegiee =[" green", "leaves"]
console.log(fruits.concat(vegiee))   // it just add elements an array
// merging the three arrays
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];

console.log(arr1.concat(arr2,arr3));
// merging an array with values
var arr1 = ["Cecilie", "Lone"];
console.log(arr1.concat('Peter'))

var arr1 = ["Cecilie", "Lone"];
//console.log(arr1.slice(0))     //slices( ) method slices out a piece of an array into a new array
console.log(arr1.slice(1))
console.log(arr1.slice(2))
console.log(arr1.slice(1,2));     //The method then selects elements from the start argument, and up to (but not including) the end argument.