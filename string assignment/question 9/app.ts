//a ts program to count total number of vowels and consonants in a string
var a:any=prompt("please enter your sentence");
var str:string=a
var b:any=str.match(/[aeiouAEIOU]/gi).length
console.log("the number of vowels are ",b);
var c:any=str.match(/[BCDFGJKLMNPQSTVXZHRWYbcdfglklmnpqstvxzhrwy]/gi).length
console.log("the number of constants are ",c);

