// Write a ts program to toggle case of each character of a string.
var a = prompt("please enter your string");
var str = a;
var str2 = [];
for (var index = 0; index < str.length; index++) {
    var ch = str.charCodeAt(index);
    if (ch >= 65 && ch <= 90) {
        ch += 32;
    }
    else if (ch >= 97 && ch <= 122) {
        ch -= 32;
    }
    str2[index] = String.fromCharCode(ch);
}
console.log(str2.join(""));
