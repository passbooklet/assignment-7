//   a ts program to count occurrences of a character in given string.
var a1 = prompt("please enter you sentence");
var b1 = prompt("please enter you occurrence in the sentence");
var a = a1;
var b = b1;
var count = 0;
for (var index = 0; index < a.length; index++) {
    if (a[index] == b) {
        count++;
    }
}
console.log("All occurrences of a character of ".concat(b, " are ").concat(count));
// console.log(a[0]);
