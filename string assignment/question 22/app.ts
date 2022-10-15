//to remove last occurrence of a character from string.
var a1: any = prompt("please enter you sentence");
var b1: any = prompt("please enter the character to remove ");
// var c1: any = prompt("please enter the charaer to relplace");
var a: string = a1;
var b: string = b1;
// var c: string = c1;
var d1: any = a.lastIndexOf(b);
var re: any = a.substring(0, d1) +  a.substring(d1 + 1);
console.log(re);

