//program to remove first occurrence of a character from string.
 var a1:any=prompt("please enter you sentence")
 var b1:any=prompt("enter  the word to find")
var a:string=a1
var b:string=b1
var splited:any=a.split(" ");
var cutting:any=splited.indexOf(b)
delete splited[cutting];
var we:any=splited.join(" ")
console.log(we);


