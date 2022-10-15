//a ts program to count total number of vowels and consonants in a string
var a = prompt("please enter your sentence");
var str = a;
var b = str.match(/[aeiouAEIOU]/gi).length;
console.log("the number of vowels are ", b);
var c = str.match(/[BCDFGJKLMNPQSTVXZHRWYbcdfglklmnpqstvxzhrwy]/gi).length;
console.log("the number of constants are ", c);
