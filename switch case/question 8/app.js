//Write a ts program to check whether a number is positive, negative or zero using switch case.
var a1 = prompt("enter the number");
var a = parseInt(a1);
var c = prompt("enter the sign");
var b1 = prompt("enter the number");
var b = parseInt(b1);
switch (c) {
    case "+":
        console.log("".concat(a, " + ").concat(b, " = ").concat(a + b));
        break;
    case "-":
        console.log("".concat(a, " - ").concat(b, " = ").concat(a - b));
        break;
    case "*":
        console.log("".concat(a, " * ").concat(b, " = ").concat(a * b));
        break;
    case "/":
        console.log("".concat(a, " / ").concat(b, " = ").concat(a / b));
        break;
    case "%":
        console.log("".concat(a, " % ").concat(b, " = ").concat(a % b));
        break;
    default:
        console.log("error");
        break;
}
