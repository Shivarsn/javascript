//var hour = 16;;
//if (hour < 18) {
//console.log(greeting = "Good day");
//} else {                                            // if else block
//console.log(greeting = "Good evening");
//}
// if block
var hour = 16;
if (hour < 18) {
  console.log(greeting = "Good Day");
}
var x = 3;
if (x % 2 == 0) {
  console.log(' EVEN number');
} else {                                  // if else block
  console.log(' ODD number')
}
//Find the number is positive,negative and zero
var x = 0;
if (x > 0) {
  console.log("Positive number");
}
else if (x < 0) {
  console.log("Negative number");
} else {
  console.log('zero number');
}
// find the number is positive and even
var x = -3;
if (x > 0) {
  console.log(" positive number");
  if (x % 2 == 0) {
    console.log(" even number")
  } else {
    console.log(" odd number")
  }
} else {
  console.log("negative number")
}
var x = 6;
if (x > 0 && x % 2 == 0) {
  console.log(" even amd positive number")
}
var day;
switch (new Date().getDay()) {
  case 0:
    day = " sunday";
    break;
  case 1:
    day = " monday";
    break;
  case 2:
    day = " tuesday";
    break;
  case 3:
    day = "wednesday";
    break;
  case 4:
    day = " thursday";
    break;
  case 5:
    day = " friday";
    break;
  case 6:
    day = " saturday";
    break;
}
console.log(day)
//When JavaScript reaches a break keyword, it breaks out of the switch block.

//This will stop the execution inside the switch block.

//It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.
var day = 11;
switch (day) {
  case 0:
    console.log('Monday');
    break;
  case 1:
    console.log('Tuesday');
    break;
  case 2:
    console.log('Wednesday');
    break;
  case 3:
    console.log('Thursday');
    break;
  case 4:
    console.log('Friday');
    break;
  case 5:
    console.log('Saturday');
    break;
  case 6:
    console.log('Sunday');
    break;
  default:                                    //The default keyword specifies the code to run if there is no case match:
    console.log(' Wrong Input')
    break;
}
var day = 11;
switch (day) {
  default:
    console.log(' Wrong Input')
    break;
  case 0:
    console.log('Monday');
    break;
  case 1:
    console.log('Tuesday');
    break;
  case 2:
    console.log('Wednesday');
    break;
  case 3:                                              //The default case does not have to be the last case in a switch block:
    console.log('Thursday');
    break;
  case 4:
    console.log('Friday');
    break;
  case 5:
    console.log('Saturday');
    break;
  case 6:
    console.log('Sunday');
    break;
}
// common code blocks
var day = 9;
switch (day) {
  case 4:
  case 5:
    console.log("soon it is weekend");
    break;
  case 6:
  case 7:
    console.log("It is a weekend");
    break;
  default:
    console.log('Looking forward to the weekend')
    break;
}