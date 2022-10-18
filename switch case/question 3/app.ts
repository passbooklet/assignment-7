// Write a ts program to check whether an alphabet is vowel or consonant using switch case.
var a:string|null=prompt("enter the alphabet");
switch (a) {
    case "a"||"i"||"o"||"u"||"e":
        console.log("the alphabet is vowel");                                                                              
    default:
            console.log("the alphabet is a constant");
        
        break;
}