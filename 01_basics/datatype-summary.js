// important for interviews
// primitive : call by value (copy create hoti hai changes karne ke liye)
// 7 types : String, Number, Boolean, NULL, undefined, Symbol, BigInt

// non primitive: call by reference (directly memory ki location se aate hain )
// arrays, objects, functions


//js is dynamically typed 
// const score:number = 100 this is the syntax fir typecript

const id = Symbol("123")
const id2 = Symbol("123")

console.log(id === id2) //false
const bignumb = 7892828990090310032092901398872178764646n
console.log(bignumb)

// arrays , object , function => datatype : object, function ka object function hita hai par wo bas function aata hai 

const arr = ["hello", "my", "love"]
console.log(arr);
let myobj = {
    name: "div",
    age: 18
}
console.log(myobj)
let myfunction = function(){
    console.log("Hello world")
}
myfunction();
console.log(typeof arr)
