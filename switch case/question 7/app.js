//Write a ts program to check whether a number is positive, negative or zero using switch case.
var a1 = prompt("enter the number");
var a = parseInt(a1);
var b1 = prompt("enter the number");
var b = parseInt(b1);
var c1 = prompt("enter the number");
var c = parseInt(c1);
var disc = b * b - 4 * a * c;
switch (true) {
    case disc > 0:
        if (Number.isInteger(Math.sqrt(disc))) {
            console.log("the roots are real and rational and unequal");
        }
        else {
            console.log("the roots are real and irrational and unequal");
        }
        break;
    case a < 0:
        if (Number.isInteger(Math.sqrt(disc))) {
            console.log("the roots are unreal and rational and unequal");
        }
        else {
            console.log("the roots are unreal and irrational and unequal");
        }
        break;
    default:
        console.log("the number is are equal and rational and real ");
        break;
}
