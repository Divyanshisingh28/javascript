const user={
    name: "divyanshi",
    email: "divyanshi@12345",
    greetings: function(){
        console.log(`Hello ${this.name}, welcome to the website`)
        console.log(this) // ye pura object hi current context hai iss wale this ke liye  
    } 
    
}
// this is used to access the current context , 
// meaning user wale block me jo code hai pura uske variables directly use karne ke liye this ka use hua 
 
//user.greetings()
user.name = "riyan" // context is changed here 
//user.greetings()
//console.log(this) // empty object is current context for this "this" because we are in the node environment  

function one(){
    let username = "divyanshi"
    console.log(this) // a lot of values are stored inside "this"
    console.log(this.username) // undefined comes, we cant access variables in a function 
}
// ****************** arrow functions *****************
const two = () => {
    let username="divyanshi singh"
    console.log(this)
}
one()
two()

//implicit return :- jab ek hi line ka function ho tab use hota hai 
const three = (num1,num2) => num1+num2
console.log(three(3,4))

// if we use curly braces then we will have to write  return otherwise not necessary(for one line functions onlyy)

//object return 
const name = () =>({
    username: "divyanshi "
})
console.log(name()) // undefined object return karne ke liye parantheses ka use karna padta hai 

//arrow function syntax
// () => {}
// () => () when we need to return an object