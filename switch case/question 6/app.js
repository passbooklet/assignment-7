//Write a ts program to check whether a number is positive, negative or zero using switch case.
var a1 = prompt("enter the number");
var a = parseInt(a1);
switch (true) {
    case a > 0:
        console.log("the number is positive");
        break;
    case a < 0:
        console.log("the number is negative");
        break;
    default:
        console.log("the number is zer");
        break;
}
