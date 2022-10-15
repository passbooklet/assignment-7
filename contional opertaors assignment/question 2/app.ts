//Write a ts program to find maximum between three numbers using conditional operator.

var a1: any = prompt("please enter you first number")
var b1: any = prompt("please enter you second number")
var c1: any = prompt("please enter your  third number")
var c: number = c1
var a: number = a1;
var b: number = b1;
var d: string = (a >= b && a >= c ? "true" : "false")
var d1: string = (b >= a && b >= c ? "true" : "false")
var d2: string = (c >= a && c >= b? "true" : "false")

console.log(d);
console.log(d1);
console.log(d2);


if (d == "true" && d1 == "false" && d2== "false") {
    console.log(`the maximum number is${a}`);


} else if (d == "false" && d1 == "true" && d2== "false") {
    console.log(`the maximum number is${b}`);

} else if (d == "false" && d1 == "false"&& d2== "true") {
    console.log(`the maximum number is${c}`);
}