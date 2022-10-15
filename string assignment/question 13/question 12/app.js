// a ts program to check whether a string is palindrome or not.
var a = prompt("please enter you sentence");
var str = a === null || a === void 0 ? void 0 : a.split("");
var str2 = str.reverse();
var str3 = str.join("");
if (a == str3) {
    console.log("this is an palindrome statement");
    console.log("the original is", a);
    console.log("the reverse is", str3);
}
else {
    console.log("this is not an palindrome statement");
    console.log("the original is", a);
    console.log("the reverse is", str3);
}
