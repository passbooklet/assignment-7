var a1:any=prompt("enter you first string") 
var b1:any=prompt("enter you second string") 
var b:string=b1
var c:number=a1.localeCompare(b1)
if (c==0) {
    console.log("yes the string match");
    
} else {
    console.log("No the string don't match match");   
}
