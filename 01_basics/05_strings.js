let name = "divyanshi"
let bf = "riyan roy"
console.log(`hello my name is ${name} and my bf is ${bf}`) // this is like f string in python

let str = new String("divyanshi")

console.log(typeof str) // string is object here 
// length property milti hai 
console.log(str[1]) // 0 based indexing
console.log(str.length)
console.log(str.toUpperCase())
console.log(str) // orignal value is not changed 
console.log(str.charAt(7)) // 7th position pe kaunsa character hai ye dekhna hai 
console.log(str.indexOf("i"))
// slicing in string 
const newstr = bf.substring(0,4) // isme neg values nahi de skte aur neg value 0 se hp jaati hain
console.log(newstr)
const newnew = bf.slice(-4,3) //isme neg de skte hain
console.log(newnew)

let str3 = "   divyanshi  "
console.log(str3)
console.log(str3.trim()) // trim() removes the extra spaces from front and back 

console.log(str3.replace("div","vid"))
console.log(str3.includes("div"))

let str4 = "div-yan-shi"
console.log(str4.split("-")) // strings ko array me convert kardiya 


