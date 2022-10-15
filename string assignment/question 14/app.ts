//   a ts program to find first occurrence of a character in a given string.
var a1:any=prompt("please enter you sentence")
var b1:any=prompt("please enter you occurrence in the sentence")

var a:string=a1
var b:string=b1
var count:number = 0
for (let index = 0; index < a.length; index++) {    
   if(a[index] == b){
     count = index
     break;
   }    
}
console.log(`The first occurence of the character ${b} is ${count}`);


