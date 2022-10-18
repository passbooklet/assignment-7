// Write a ts program to find maximum between two numbers using switch case.
var a1 = prompt("enter the number");
var a = parseInt(a1);
var b1 = prompt("enter the number");
var b = parseInt(b1);
switch (true) {
    case a > b:
        console.log("the number ".concat(a, " is greater than number ").concat(b));
        break;
    case a < b:
        console.log("the number ".concat(b, " is greater than number ").concat(a));
        break;
    default:
        console.log("the numbers are equal");
        break;
}
