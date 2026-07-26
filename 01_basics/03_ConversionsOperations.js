let score = "40abc"
console.log(typeof score)

//conversion 
let StringtoNumber = Number(score)
console.log(typeof StringtoNumber) // iss code ne number me convert kar toh diya 
console.log(StringtoNumber) // but jo value hai wo NaN aarhi hai issliye value ka dhyan rakhna hai 

//conversions to number:
// "33" => 33
// null => 0
// undefined => NaN
// true => 1
// "divyanshi" => NaN

//conversion to boolean 
let isLoggedIn = ""
let boolval = Boolean(isLoggedIn)
console.log(boolval)

// "" => false 
// 0=> false 1=> true
//"string" => true

// ****************************** Operations ************************************

/* str1 = "hello"
str2= " divyanshi"
str3 = str1 +str2
console.log(str3) */

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2) //agar string first hai toh sabhi ko string me convert kiya jaayega
console.log(1 + 2 + "2") //agar string last haui toh pehl addition hoga fir usse string me convert kiya jaayega
//it is not a good practice

console.log(+true)
console.log(+"")
log



