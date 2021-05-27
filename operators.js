//var x = 5;
//console.log(x)
//var y = 6;
//var z = x + y;  // addition
//console.log(z)

//var x = 5;
//var y = 2;
//var z = x * y;
//var z = x / y // numbers
//var z = x % y
//console.log(z);

//var txt1 = "john";
//var txt2 = "doe";
//var txt =  txt1+" " +txt2;
//txt1 += "doe"
//console.log(txt1);

//var x = 5 + 5;   //literals
//var y = "5" + 5;
//var z = "Hello" + 5;
//console.log(x);
//console.log(y);
//console.log(z);

//var x = 3;
//console.log((100 + 50) * 2) // expressions

//var x= 5;
//x++;  
     //incrementing
//var z = x;
//console.log(z)

//var x= 6;
//x--;
//var z = x;
//console.log(z);

//var x= 2;
//var y =5;
//console.log(x**5)
//console.log(Math.pow(y,5));

//var x= 5;
//var y = 6;       //boolean(false)
//console.log(x==y)
//var x= 6;
//var y=6;
//console.log(x==y);

//let cars=["AUDI","BMW"];
//console.log(cars[0]);
//console.log(typeof cars)

//var persons ={firstName:"john",lastName:"doe",age:50}
//persons=undefined;
//console.log(typeof persons);
//console.log(persons.firstName);

//console.log(typeof "");
//console.log(typeof 3.14)

//var car;
//console.log(car);

//var car = "bmw";      //type is undefined because of value is undefined
//car = undefined;
//console.log(undefined);

//function myfunction(p1,p2){
  //  return p1*p2;
//}
//console.log(myfunction(4,3))

//var x = myfunction(4,3);

//function myfunction(p1,p2){
  //  return p1*p2;
//}
//console.log(x);



var x = "W\fe are the so-called \\'Vikings\\'from the north.";

console.log(x);

var x = "We\r are\n the \tso-called \v from the north.";
console.log(x);

var x = 'so \
called';
console.log(x)

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(txt.length);

var str = "Please locate where 'locate' occurs!"; // position of first occurence of specified text
console.log(str.indexOf('locate'));
console.log(str.lastIndexOf('locate'));
console.log(str.indexOf('john'))
console.log(str.lastIndexOf('john'))
console.log(str.indexOf('locate',15))
console.log(str.lastIndexOf('locate',15))
console.log(str.search("locate"))
console.log(str.search("john"))


var str = "Apple, Banana, Kiwi";
console.log(str.slice(0,7));
console.log(str.slice(-0,-5))   // position is counted from the end of the string
console.log(str.substring(0,7));
console.log(str.substring(-1,-10));  //doesn't accept negative index values
console.log(str.substr(0,7));  
// difference is that the second parameter  specifies the length of the string
console.log(str.substr(7,6));
console.log(str.substr(-1));     // accepts the negative indexes

console.log(str.slice(7));
console.log(str.slice(-7));
console.log(str.substring(-1))
console.log(str.substring(7))
console.log(str.substr(7));
console.log(str.substr(-7));

 var str = "Please visit Microsoft!";
 console.log(str.replace('Microsoft!','TATA'))

 var str = "Please visit Microsoft and Microsoft";    //it takes only the first match
 console.log(str.replace('Microsoft','TATA'))

  var str = "Please visit Microsoft!";
  console.log(str.replace('MICROSOFT'));   //case senstive it doesnt work ,it can overcome by using /i;
  console.log(str.replace(/MICROSOFT/i,'TATA'))  // it can written without quotes;
// for global match (/g)
var str = "Please visit Microsoft and Microsoft";
console.log(str.replace(/Microsoft/g,'TATA'))

// conversion of upper case to lowercase

var str = 'javascript';
console.log(str.toUpperCase());
console.log(str.toLocaleUpperCase());
console.log(str.toLowerCase());
console.log(str.toLocaleLowerCase());
// concat methods
var text1 = "Hello";
var text2 = "World";
console.log(text1.concat("",""));
console.log(text2.concat('',''));
console.log(text1.concat('world',''))
console.log(text2.concat("Hello",""))
 // trim method
 var text ='     hello                     ';
 console.log(text.trim());
 // string padding

 var str ='5';
 console.log(str.padStart(10))
 console.log(str.padStart(10,0));
 console.log(str.padEnd(10))
 console.log(str.padEnd(10,0))

 var txt = 'hello';                   //returns the character at the specified  position in a string
 console.log(txt.charAt(2))

 var txt = 'hello';
 console.log(txt.charCodeAt(2));     //returns the unicode UTF-16

 //converting string as an array
 var txt ='a,b,c,d';
 console.log(txt.split(","));
 console.log(txt.split (" "));
 console.log(txt.split("|"));

 var txt ='hello';
 console.log(txt.split(" "))




