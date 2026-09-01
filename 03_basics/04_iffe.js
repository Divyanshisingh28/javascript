//Immediately Invoked Function Expression

// kabhi kabhi global scope se kuch functions pollute hojaate hain toh we want immediate execution of some function then we use this iifee

(function one(){ //named iffe
    console.log("my name is divyanshi")
})() ; // semi colon is mendatory to end
// first parantheses () is to define the function, the second one () is to execute the function, call karne ki jarurat nahi padti  
//global scope ke pollution yaani uske variables ko hatane ke liye and immediate execution ke liye we use this 

((name)=>{ //unnamed iffe
    console.log(`hello ${name}, how are you ?`)
})("riyan" );