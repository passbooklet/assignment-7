//   Write a ts program to find last occurrence of a character in a given string.
var a1 = prompt("please enter you sentence");
var b1 = prompt("please enter you occurrence in the sentence");
var a = a1;
var b = b1;
var count = 0;
for (var index = 0; index < a.length; index++) {
    if (a[index] == b) {
        count = index;
    }
}
console.log("The first occurence of the character ".concat(b, " is ").concat(count));
