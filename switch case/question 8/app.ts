//Write a ts program to check whether a number is positive, negative or zero using switch case.
var a1: any = prompt("enter the number");
var a: number = parseInt(a1);
var c: string|null = prompt("enter the sign");
var b1: any = prompt("enter the number");
var b: number = parseInt(b1);
switch (c) {
    case "+":
        console.log(`${a} + ${b} = ${a+b}`);

        break;
    case "-":
        console.log(`${a} - ${b} = ${a-b}`);

        break;
    case "*":
        console.log(`${a} * ${b} = ${a*b}`);

        break;
    case "/":
        console.log(`${a} / ${b} = ${a/b}`);

        break;
    case "%":
        console.log(`${a} % ${b} = ${a%b}`);

        break;
    default:
        console.log("error");

        break;
}
