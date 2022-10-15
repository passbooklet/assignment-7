// a ts program to remove all occurrences of a character from string.
var a1:any=prompt("please enter your sentence")
var b1:any=prompt("please enter the charcter you want remove")
var a:string=a1
var b:string=b1
var sp:any=a.split(b)
var replaced:any=sp.join("")
console.log(replaced);
