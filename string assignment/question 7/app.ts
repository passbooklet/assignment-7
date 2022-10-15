// Write a ts program to toggle case of each character of a string.
var a: string | null = prompt("please enter your string")
var str: any = a;
var str2: string[] = []
for (let index = 0; index < str.length; index++) {
    var ch: number = str.charCodeAt(index);
    if (ch >= 65 && ch <= 90) {
        ch += 32;
    } else if (ch >= 97 && ch <= 122) {
        ch -= 32;
    }
    str2[index] = String.fromCharCode(ch)

}
console.log(str2.join(""));
