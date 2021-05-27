var num = 1;
try {
    num.toPrecision(500);

} catch (error) {
    console.log(error)

}
//A RangeError is thrown if you use a number that is outside the range of legal values.

//For example: You cannot set the number of significant digits of a number to 500.
var x = 1;
try {
    x = y + 1;
} catch (error) {
    console.log(error)
}
//A ReferenceError is thrown if you use (reference) a variable that has not been declared:
var num = 1;
try {
    num.toUpperCase();   // You cannot convert a number to upper case
}
catch (error) {
    console.log(error)
}
try {
    decodeURI("%%%");   // You cannot URI decode percent signs
}
catch (err) {
    console.log(err)      //A URIError is thrown if you use illegal characters in a URI function:
}