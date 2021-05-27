//In javascript there are 5 differnt data types that contain values:
//1.Number;
//2.String;
//3.Boolean;
//4.Object;
//5.function;
//Types Of Object:
//.Date;
//.Object;
//.Array;
//.String;
//.Number;
//.Boolean;
//The Data types doesnt contain values:
//1.null;
//2.unDefined;
//USE of TypeOf Operator
console.log(typeof "John");
console.log(typeof 3.14);
console.log(typeof NaN);
console.log(typeof false);
console.log(typeof true);
console.log(typeof [1, 2, 3, 4]);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof { fName: "John", lName: "Doe" });
console.log(typeof new Date());
console.log(typeof function () { });
console.log(typeof cars);

console.log("John".constructor);
console.log(3.14.constructor);
console.log(NaN.constructor);
console.log(false.constructor);
console.log(true.constructor);
console.log([1, 2, 3, 4].constructor);
console.log({ fName: "John", lName: "Doe" }.constructor);
console.log(new Date().constructor);
console.log(function () { }.constructor);
var fruits = ["Banana", "Orange", "Apple", "Mango"];
//function isArray(myArray) {
//  return myArray.constructor.toString().indexOf("Array") > -1;
//}
function isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
}
console.log(isArray(fruits));
//You can check the constructor property to find out if an object is an Array (contains the word "Array"):

//Or even simpler, you can check if the object is an Array function:
var fruits = ["Banana", "Orange", "Apple"];
function isArray(myArray) {
  return myArray.constructor === Array;
}
console.log(isArray(fruits));
//You can check the constructor property to find out if an object is a Date (contains the word "Date"):
var myDate = new Date();
function isArray(myDate) {
  return myDate.constructor.toString().indexOf("Date") > -1;
}
console.log(isArray(myDate));
//Or even simpler, you can check if the object is a Date function:
var myDate = new Date();
function isArray(myDate) {
  return myDate.constructor === Date;
}
console.log(isArray(myDate));
//Conversion of numbers to strings
//The global method string() is used to convert number into strings
//it can be used on any variables,numbers,literals or expressions:
var x = 123;
console.log(String(x));
console.log(String(123));
console.log(String(100 + 23));
//to.String() does the same:
var x = 123;
console.log(x.toString());
console.log((123).toString());
console.log((100 + 23).toString());
//Converting Booleans to strings
console.log(String(false));
console.log(String(true));
//to.String() also does the same:
console.log(false.toString());
console.log(true.toString());
//Conversion of dates to strings
console.log(String(Date()));
//to.String also does the same
console.log(Date().toString());
//Conversion of strings to numbers by using Number()
console.log(Number(3.14));
console.log(Number(""));
console.log(Number(" "));
console.log(Number("99 88"));
//The unary + operator can be used to convert a variable to a number:
var y = "5";
var x = +y;
console.log(x)
console.log(y);
console.log(typeof x);
console.log(typeof y);
var y = "john";
var x = +y;
console.log(y);
console.log(x);
//Conversion of boolean to numbers;
console.log(Number(false));
console.log(Number(true));
//Conversion of Dates to Numbers:
var d = new Date();
console.log(Number(d))
//getTime does the same
var d = new Date()
console.log(d.getTime());
//Automatic type Conversion
console.log(5 + null); // returns 5 because null is converted as zero;
console.log("5" + null); // returns 5null because null is converted as "null";
console.log("5" + 2);  // returns 52 because 2 is treated as "2";
console.log("5" - 2); // returns 3 because "5" is converted as 5;
console.log("5" * "2")   // returns 10 because both are considered as 5 and 2;
var x = false;
console.log(Number(x));
console.log(String(x));
console.log(Boolean(x));
console.log(Number(true));
console.log(String(true));
console.log(Boolean(true));
console.log(Number(0));
console.log(String(0));
console.log(Boolean(0));
console.log(Number(1));
console.log(String(1));
console.log(Boolean(1));
console.log(Number("1"));
console.log(String("1"));
console.log(Boolean("1"));
console.log(Number("0"));
console.log(String("0"));
console.log(Boolean("0"));
console.log(Number(NaN));
console.log(String(NaN));
console.log(Boolean(NaN));
console.log(Number(Infinity));
console.log(Boolean(Infinity));
console.log(String(Infinity));
console.log(Number(-Infinity));
console.log(String(-Infinity));
console.log(Boolean(-Infinity))
console.log(Number(""));
console.log(Boolean(""));
console.log(String(""));
console.log(Number("twenty"));
console.log(String("twenty"));
console.log(Boolean("twenty"));
var x=[];
console.log(Number(x));
console.log(String(x));
console.log(Boolean(x));
var x =[20];
console.log(Number(x));
console.log(String(x));
console.log(Boolean(x));
var x =[10,20];
console.log(Number(x));   // it retuns NaN
console.log(String(x));
console.log(Boolean(x));
var x= ["twenty"];
console.log(Number(x));   // it returns NaN
console.log(String(x));  // it returns twenty
console.log(Boolean(x));  // it returns true
var x =["ten","twenty"];
console.log(Number(x));   // it returns NaN
console.log(String(x));   // it returns ten,twenty

console.log(Boolean(x)); // it returns false
var x =function(){}
console.log(Number(x));   // it returns NaN;
console.log(String(x)); // it returns function
console.log(Boolean(x));  // it returns true;
var x ={};
console.log(Number(x));  // it returns NaN;
console.log(String(x));  // it returns object
console.log(Boolean(x));   // it returns true
var x =null;
console.log(Number(x));   // 0;

console.log(String(x)); // null
console.log(Boolean(x));  //false
var x = undefined;
console.log(Number(x)); // NaN
console.log(String(x));  //undefined
console.log(Boolean(x));   // false
  














 //The Data Type of the typeOf
 //The typeofoperator is not a variable. It is an operator. Operators ( + - * / ) do not have any data type.

//But, the typeof operator always returns a string (containing the type of the operand).

//The constructor Property
//The constructor property returns the constructor function for all JavaScript variables.











