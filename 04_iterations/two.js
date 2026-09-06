// for of loop
const arr = [1,3,4,5,6,10]
for (const  val of arr) {
    console.log(val) 
}

const greetings = "hello divyanshi"
for (const greet of greetings) {
    if(greet == " ") continue
   // console.log(`each char of greetings is ${greet}`)
    
}

// maps 
const mpp = new Map() // its like object only but the difference is that it does not contain any duplicate values
// it has all the unique values  
mpp.set(1,"div")
mpp.set(2,"riyan")
mpp.set(3,"kshitij")
mpp.set(1,"div") // two enteries do not enter in map 
console.log(mpp)

//for of loop on maps 
for (const key of mpp) {
    console.log(key) // 3 different arrays create hogye 
}
//solution for the above
for (const [key,val] of mpp) {
    console.log(`${key} :- ${val}`)
}

//for of loop on objects
const MyObject = {
    movie1 : "spiderman",
    movie2 : "black panther",
    movie3: "iron man"
}
/*  for (const key of MyObject) { 
    console.log(key)  object is not iteratable by for of loops but maps are
} */



