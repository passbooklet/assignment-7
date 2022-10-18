//  Write a ts program to check whether a number is even or odd using switch case.
var a1: any = prompt("enter the number");
var a: number = parseInt(a1);
switch (true) {
    case a%2==0:
        console.log("the number is even");
        
        break;
    default:
        console.log("the number is odd");

        break;
}
