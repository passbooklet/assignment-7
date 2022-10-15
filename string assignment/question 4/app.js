var a1 = prompt("enter you first string");
var b1 = prompt("enter you second string");
var b = b1;
var c = a1.localeCompare(b1);
if (c == 0) {
    console.log("yes the string match");
}
else {
    console.log("No the string don't match match");
}
