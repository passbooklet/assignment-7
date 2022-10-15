var a1 = prompt("please enter your sentence");
var b1 = prompt("please enter the charcter you want remove");
var c1 = prompt("please enter the charcter you want to replace");
var c = c1;
var a = a1;
var b = b1;
var sp = a.split(b);
var replaced = sp.join(c);
console.log(replaced);
