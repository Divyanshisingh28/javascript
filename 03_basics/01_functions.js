function SayMyName() {
    console.log("divyanshi ")
    console.log("singh")
}
// SayMyName:- this is function reference 
// SayMyName():- this is function execution 

SayMyName()

/* function addtwonumbs(a,b){ a,b parameters
    var c = a - b
    console.log(c)
}
addtwonumbs(3,4)  3,4 argument */
//const result = addtwonumber(3,4)
//console.log(result)  undefined because the function is not returning anything

function addition (a,b){
   
    return a+b
}
const result = addition(4,4);
console.log(result)

function userdetails(username = "div"){ // kabhi undefined nahi hogi ye default value ki tarah ban jaayegi  
    if(!username) {
         console.log("please enter the username")
         return
    }
    return `${username} just logged in`
}

const re1 = userdetails("divyanshi")
const re2 = userdetails()
console.log(re2)
console.log(re1)

// returned value ko store aur console alag se karna hota hai 
//() undefined if no arguments are given

function ShoppingCart (val1,val2,...num1) {
    return num1
}
const sum = ShoppingCart(1000,2000,3000,400,500,5000,6000,700) // 1000,2000 val2 and val2 parameters me chali gayi hain aur baaki ki values arrays me convert ho gayi hain
console.log(sum)
//...num1 is a rest operator, agar arguments kam hain aur parameters jyaada hain toh baaki ke arguments arrays me convert kar deta hai 
// vvimp in e commerce website jab user cart me items add karta jaaye 

