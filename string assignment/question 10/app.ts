//a ts program to count total number of words in a string.
var a:any=prompt("please enter your sentence")
var str:string=a
var b:any=a.match(/[QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm]/gi).length;
console.log(b);
