var b = 300 // global scope
let a = 1000 // console me 1000 hi aayega kyuki ye globally defined hai 
//why there was need for let when var was there ??  
if(true){
let a = 10
var b = 20
const c = 30 // any code written btw cury braces {} is called a block scope
}

//now accessing elements outside the scope
//console.log(a)  it gives error
console.log(b) //it works
//console.log(c) it gives error

//we can access b outside the scope meaning it can create confusion in the code and hence let is used instead of var 
// when we print b tab bhi 20 aaya instead of 300 jo aana chahiye tha normal programming lang ke rules ke basis pe
// we use let jisse hum local scope aur global scope ke variables ko alag alag rakh  paaye 

//function in function 

function one(){
    const username="divyanshi"
    function two(){
        const website="youtube"  // nested variables use concept, same happens in if else and loops as well
        console.log(username)
    }
    //console.log(website) error
    two()
}
//one()  
 
// ++++++++++++++++++++++++++++++++++++ interesting point +++++++++++++++++++++++++++++++++++
console.log(addone(5)) // executed
function addone(num){
    return num+1
}
console.log(addtwo(5)) // gives error (hoisting concept )
const funct = function addtwo(num){ // this is an expression as the variable is holding a function
    return num+2
}


