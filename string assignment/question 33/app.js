//program to remove last occurrence of a character from string.
var a1 = prompt("please enter you sentence");
var b1 = prompt("enter  the word to find");
var a = a1;
var b = b1;
var splited = a.split(" ");
var cutting = splited.lastIndexOf(b);
delete splited[cutting];
var we = splited.join(" ");
console.log(we);
