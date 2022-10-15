//   a ts program to search all occurrences of a character in given string.
var a1:any=prompt("please enter you sentence")
var b1:any=prompt("please enter you occurrence in the sentence")

var a:string=a1
var b:string=b1
var count:number = 0
for (let index = 0; index < a.length; index++) {    
   if(a[index] == b){
     console.log(`the index of the  ${b} is ${index}`);
     
   }    
}
// console.log(`All occurrences of a character of ${b} are ${count}`);


