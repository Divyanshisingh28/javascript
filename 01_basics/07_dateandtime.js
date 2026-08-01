let myDate = new Date()
console.log(myDate)
console.log(myDate.toDateString()) // bas date and day aayega 
console.log(myDate.toString()) // date and time dono
console.log(myDate.toJSON()) // default jaisa aaya 
console.log(myDate.toISOString()) 
console.log(myDate.toLocaleDateString()) // sirf date aayega locally jause likhte hain vaiuse 
console.log(myDate.toLocaleString()) // time bhi ayega 
console.log(typeof myDate)

// creating your own date 
let d = new Date(2006,10,28) // months 0 se start hote hain js me 
// year, month, date is the format
// with time
let f = new Date(2006,10,28,5,30) 
console.log(d.toDateString())
console.log(f.toLocaleString())

//ek specific format me 
let n = new Date("11-28-2006") //month,date,year ye dono format hi follow hote hain bas js me 
console.log(n.toLocaleString())

//time 
let mytimestamp = Date.now()
console.log(mytimestamp) // miliseconds me aati hai aaj ki date
console.log(n.getTime()) // created date ko time me convert karta hai 
console.log(Math.floor(mytimestamp/1000)) // miliseconds converted in seconds

console.log(myDate.getMonth()+ 1) //kyuki month 0 se start hota hai 
console.log(myDate.getFullYear())