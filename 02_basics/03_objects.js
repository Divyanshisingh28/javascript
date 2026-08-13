// singleton :- ye apne tarah ka ek hi object hai 
// object.create
// constructor se banega tab singleton banta hai 

// object literals :- not singleton

const mysymbol = Symbol("key1")
const div = {
    name: "divyanshi",
    [mysymbol]: "mykey1",  // this is how we use symbol in an object imp for interview
    college: "igdtuw",
    age: 18,
    isloggedIn : false,
    lastLOG : ["monday", "saturday"]
}
//imp
console.log(div["college"]) // because ye object me string ki tarah diya jaa raha hai jo js khudh kardeta hai 
console.log(div.age)
console.log(div.mysymbol) // undefined in the output because of the incorrect syntax
console.log(div[mysymbol])

div.age = 19 // overwriting in an object
//Object.freeze(div) // overwriting after this is not possible
div.age = 20
console.log(div) // age 19 aayi output me meaning ek baar change hua bas aur fir freeze hogya 

//function in an object 
// we can create a function like a variable 
div.greetings = function(){
    console.log("Hello my dear friend")
}
div.greetings2 = function(){
    console.log(`Hello , my friend , ${this.name} `) //this.name is to access name in the object
}
//console.log(div.greetings) // we get function return back meaning function execute nahi hua hai bas function ka reference aaya hai 
console.log(div.greetings())
console.log(div.greetings2())


/* NOTE :- we access the elements in the javascript by (div.name ) . syntax but there are cases in which we need to use
(div[symb]) syntax to access symbols or the time when the key is written in "" commas */

