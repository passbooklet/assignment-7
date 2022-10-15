//a ts program to count total number of words in a string.
var a = prompt("please enter your sentence");
var str = a;
var b = a.match(/[QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm]/gi).length;
console.log(b);
