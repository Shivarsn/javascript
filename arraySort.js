var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());        // Sorts the elements of fruits

var numbers = [1, 4, 8, 2];
console.log(numbers.sort());
console.log(numbers.reverse());     // sorting the elements

// reverse() it reverses the elements in an descending manner
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.reverse());
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());        // First sort the elements of fruits
console.log(fruits.reverse());     // Then reverse the order of the elements
var points = [40, 100, 1, 5, 25, 10];
console.log(points.sort());                                  // Numeric sorting
console.log(points.sort(function (a, b) { return a - b }))
var points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function (a, b) { return b - a }))
// sorting an array in random manner
var points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function (a, b) { return 0.5 - Math.random() }))
// For finding  the highest/lowest Array value
// sort Ascending
var points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function (a, b) { return a - b }))
console.log(points[0]);        // contains the lowest value
console.log(points.length)
console.log(points[points.length - 1]);  //contains the highest value
var points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function (a, b) { return b - a }));
console.log(points[0]);     // contains the highest value
console.log(points[points.length - 1])    // contains the lowest value
// Sorting a whole array is not good practice better to use  Math functions

var points = [40, 100, 1, 5, 25, 10];
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}
console.log(myArrayMax(points));
var points = [40, 100, 1, 5, 25, 10];
function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}
console.log(myArrayMin(points));

// sorting AN Object arrays
var cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];
console.log(cars.sort(function (a, b) {
    return a.year - b.year

}))
var cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];
console.log(cars.sort(function (a, b) {
    return b.year - a.year

}))