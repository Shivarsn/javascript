var d = new Date();
d.setFullYear(2021);
console.log(d);     //sets the year of a date object

var d = new Date();
console.log(d.setFullYear(2021));

var d = new Date();       // can optionally set month and day
d.setFullYear(2021, 11, 3);
console.log(d);

var d = new Date();
d.setMonth(11);
console.log(d);      //The setMonth() method sets the month of a date object (0-11):

var d = new Date();
d.setUTCMonth(11);
console.log(d)

var d = new Date();
d.setDate(15);
console.log(d);     //The setDate() method sets the day of a date object (1-31):
var d = new Date();
d.setDate(d.getDate() + 50);
console.log(d)

var d = new Date();
d.setUTCDate(15);
console.log(d);

var d = new Date();
d.setHours(12);
console.log(d);     //The setHours() method sets the hours of a date object (0-23):

var d = new Date();
d.setUTCHours(12);
console.log(d);

var d = new Date();
d.setMinutes(30);
console.log(d);    //The setMinutes() method sets the minutes of a date object (0-59)

var d = new Date();
d.setMilliseconds(30);
console.log(d);

var d = new Date();
d.setSeconds(30);
console.log(d);