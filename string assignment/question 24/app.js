// a ts program to remove all occurrences of a character from string.
var a1 = prompt("please enter your sentence");
var b1 = prompt("please enter the charcter you want remove");
var a = a1;
var b = b1;
var sp = a.split(b);
var replaced = sp.join("");
console.log(replaced);
