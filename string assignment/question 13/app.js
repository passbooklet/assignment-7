//  a ts program to reverse order of words in a given string
var a = prompt("please enter you sentence");
var str = a === null || a === void 0 ? void 0 : a.split("");
var str2 = str.reverse();
var str3 = str.join("");
console.log(str3);
