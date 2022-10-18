// Write a ts program print total number of days in a month using switch case.
var a1 = prompt("enter the month");
var a = parseInt(a1);
switch (a) {
    case 1 || 3 || 5 || 7 || 8 || 10 || 12:
        console.log("there are 31 days");
        break;
    case 4 || 6 || 9 || 11:
        console.log("there are 30 days");
        break;
    case 2:
        console.log("there are 28 or 29 days");
        break;
    default:
        console.log("the numbers are equal");
        break;
}
