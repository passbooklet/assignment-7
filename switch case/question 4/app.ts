// Write a ts program to find maximum between two numbers using switch case.
var a1: any = prompt("enter the number");
var a: number = parseInt(a1);
var b1: any = prompt("enter the number");
var b: number = parseInt(b1);
switch (true) {
    case a > b:
        console.log(`the number ${a} is greater than number ${b}`);
        break;
    case a < b:
        console.log(`the number ${b} is greater than number ${a}`);
        break;
    default:
        console.log("the numbers are equal");

        break;
}
