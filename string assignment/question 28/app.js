//a ts program to find first occurrence of a word in a given string.
var a1 = prompt("please enter you sentence");
var b1 = prompt("enter  the word to find");
var a = a1;
var b = b1;
var splited = a.split(" ");
for (var index = 0; index < splited.length; index++) {
    if (splited[index] == b) {
        console.log("the ".concat(index + 1, " word is the first occurance of the ").concat(b));
        break;
    }
}
