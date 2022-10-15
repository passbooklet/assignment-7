//a ts program to find last occurrence of a word in a given string
var a1 = prompt("please enter you sentence");
var b1 = prompt("enter  the word to find");
var a = a1;
var b = b1;
var splited = a.split(" ");
var count = 0;
for (var index = 0; index < splited.length; index++) {
    if (splited[index] == b) {
        count = index;
    }
}
console.log("the ".concat(count + 1, " word is the last occurance of the ").concat(b));
