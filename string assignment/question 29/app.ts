//a ts program to find last occurrence of a word in a given string
var a1:any=prompt("please enter you sentence")
var b1:any=prompt("enter  the word to find")
var a:string=a1
var b:string=b1
var splited:any=a.split(" ")
var count:any=0
for (let index = 0; index < splited.length; index++) {
    if(splited[index]==b){
        count=index
    }
}
console.log(`the ${count+1} word is the last occurance of the ${b}`);















