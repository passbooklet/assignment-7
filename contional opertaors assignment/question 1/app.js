//Write a ts program to find maximum between two numbers using conditional operator.
var a1 = prompt("please enter you first number");
var b1 = prompt("please enter you second number");
var a = a1;
var b = b1;
var c = (a <= b ? "true" : "false");
if (c == "true") {
    console.log("the maximum number is".concat(a));
}
else {
    console.log("the maximum number is".concat(b));
}
