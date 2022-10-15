//Write a ts program to find maximum between three numbers using conditional operator.
var a1 = prompt("please enter you first number");
var b1 = prompt("please enter you second number");
var c1 = prompt("please enter your  third number");
var c = c1;
var a = a1;
var b = b1;
var d = (a >= b && a >= c ? "true" : "false");
var d1 = (b >= a && b >= c ? "true" : "false");
var d2 = (c >= a && c >= b ? "true" : "false");
console.log(d);
console.log(d1);
console.log(d2);
if (d == "true" && d1 == "false" && d2 == "false") {
    console.log("the maximum number is".concat(a));
}
else if (d == "false" && d1 == "true" && d2 == "false") {
    console.log("the maximum number is".concat(b));
}
else if (d == "false" && d1 == "false" && d2 == "true") {
    console.log("the maximum number is".concat(c));
}
