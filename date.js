var d = new Date();
console.log(d);  // new date() creates new date object with the current date and time

var d = new Date(2018, 11, 24, 10, 33, 30, 0);

console.log(d);      // it creates the new date object with specified date and time

var d = new Date(2018, 11, 24, 10, 33, 30);
console.log(d);
// 5 members specifying year,month,day,hour,minute

var d = new Date(2018, 11, 24, 10, 33);
console.log(d);
//4 members specifying year,month,day and hour

var d = new Date(2018, 11, 24, 10);
console.log(d);
// 3 members specifying year,month and day

var d = new Date(2018, 11, 24);
console.log(d);

// 2 members specifying year and month

var d = new Date(2018, 11);
console.log(d);
// if u supply one parameter ,it can treated as milliSeconds

var d = new Date(2018);
console.log(d);

// for previous century
var d = new Date(99, 11, 28);
console.log(d);

var d = new Date(9, 11, 28);
console.log(d);

// new Date(dateString) creates the new date  object from the date string

var d = new Date("October 11 ,2014 11:13:00");
console.log(d);

// new date(milliSeconds) creates the new date object as zero time plus milliseconds
var d = new Date(0);
console.log(d);

var d = new Date(100000000000);
console.log(d)

var d = new Date(-1000000000000);
console.log(d);

var d = new Date(-100000000000);
console.log(d);

var d = new Date(86400000);
console.log(d);     // one day(24 h) is 86 400 000 milliseconds

d = new Date();
console.log(d);

d = new Date();
console.log(d.toString());   //When you display a date object in HTML, it is automatically converted to a string, with the toString() method.

d = new Date();
console.log(d.toUTCString());  //The toUTCString() method converts a date to a UTC string (a date display standard)

d = new Date();
console.log(d.toISOString());    //The toISOString() method converts a date to a string, using the ISO standard format:

d = new Date();
console.log(d.toDateString()); //The toDateString() method converts a date to a more readable format:

//Java script ISO 8601 is the international standard representation for the dates and times
//The ISO 8601 syntax(YEAR-MONTH-DAY) is also the preferred javascript  date format

var d = new Date("2015-03-25");
console.log(d);
//ISO dates may depends upon (yy-mm)
var d = new Date("2015-03");
console.log(d);
//ISO written only by Year

var d = new Date("2015");
console.log(d);
//ISO(DATE-TIME)
//ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):

var d = new Date("2015-03-25T12:00:00Z");
console.log(d);
//Date and time is separated with a capital T.

//UTC time is defined with a capital letter Z.

//If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead:

var d = new Date("2015-03-25T12:00:00-06:30")
console.log(d);

var d = new Date("2015-03-25T12:00:00+06:30");   //UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).
console.log(d);

//JavaScript Short Dates.
//Short dates are written with an "MM/DD/YYYY" syntax like this:

var d = new Date("08/21/2021");
console.log(d);

var d = new Date("2015-3-25");
console.log(d);                     // it may produce warnings in some browsers

var d = new Date("2015/03/25");    //The behavior of "YYYY/MM/DD" is undefined.
//Some browsers will try to guess the format. Some will return NaN.
console.log(d);

var d = new Date("25-03-2015");
console.log(d);
var d = new Date("25/03/2015");
console.log(d);     //The behavior of  "DD-MM-YYYY" is also undefined.
//Some browsers will try to guess the format. Some will return NaN.
//JavaScript Long Dates.
//Long dates are most often written with a "MMM DD YYYY" syntax like this:

var d = new Date("Mar 25 2015");
console.log(d);

var d = new Date("Mar 2015 25");
console.log(d);        // it can be any order

var d = new Date("25 Mar 2015");
console.log(d);

var d = new Date("March 25 2015");
console.log(d);

var d = new Date("MARCH, 25 ,2015");      //Commas are ignored. Names are case insensitive:

console.log(d);

//Date Input - Parsing Dates
//If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.

//Date.parse() returns the number of milliseconds between the date and January 1, 1970://

var msec = Date.parse("March 21,2012")
console.log(msec)

var msec =Date.parse("March 21,2012");
var d = new Date(msec);
console.log(d)