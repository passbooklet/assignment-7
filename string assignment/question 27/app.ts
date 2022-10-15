var a1:any=prompt("please enter your sentence")
var b1:any=prompt("please enter the charcter you want remove")
var c1:any=prompt("please enter the charcter you want to replace")
var c:string=c1
var a:string=a1
var b:string=b1
var sp:any=a.split(b)
var replaced:any=sp.join(c)
console.log(replaced);