const score = new Number(500)
console.log(score)  // gives datatype and value  
console.log(typeof score)
const numb = 600012.78900
console.log(typeof numb)
console.log(numb.toString().length)
console.log(numb.toFixed(3)) // ye mumber ko ek fixed decimal point takk le jaata hai
console.log(numb.toPrecision(7)) // ye number ki precise value deta hai agar toprecise ke andar jo value hai wo kam ho actual number se toh baaki values as an exponential aati hai 
// ex if numb hai 6000 has 4 digits aur humne toprecision ke andar likh diya 3 or 2 0r 1 toh ye hogaaa 
console.log(numb.toLocaleString("en-IN")) // commas ke liye

// *************************** maths *************************************
console.log(Math.abs(-10))
console.log(Math.pow(10,2))
console.log(Math.round(5.97,2)) // 2 digits takk round off karwana hai tab 
console.log(Math.floor(8.9))
console.log(Math.random()) // values 0 aur 1 ke beech me aati haii 
