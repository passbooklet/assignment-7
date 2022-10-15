//a ts program to find total number of alphabets, digits or special character in a string.
var a: any = prompt("enter you sentence")
var str: string = a
function n(str:string) {   
var dig :number= 0
var alpha :number= 0
var spec:number = 0
for (let index = 0; index < str.length; index++) {
    var c: any = str.charCodeAt(index);
    if (c >= 65 && c <= 90 || c >= 97 && c <= 122) {
        alpha++
    } else if (c >= 48 && c <= 57) {
        dig++
    } else {
        spec++
    }

}
console.log("The number of alphabets are",alpha);
console.log("The number of digits are",dig);
console.log("The number of special charater are",spec);
}
n(str)