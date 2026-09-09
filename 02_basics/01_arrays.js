// push , pop , shift , unshift , slice , splice , join 
const myarr = [1,2,43,5,7]
myarr.push(30); // adds 30 to the last
console.log(myarr)
myarr.pop(); // removes 30 from the last 
myarr.unshift(20) // adds 20 before 1
console.log(myarr)
myarr.shift() // removes 20 before 1

const join1 = myarr.join()
console.log(join1) // type of array is changed to string

//slice, splice
const arr2 = [1,2,3,4,5,6]
const arr3 = [1,2,3,4,5,6]
console.log(arr2.slice(1,4)) // a part return hogya jo humne maanga tha
console.log(arr2) // pura wapis aagya 
console.log(arr3.splice(1,4)) // a part return hua including the last index as well
console.log(arr3) // array me 1 aur 6 hi bacha meaning splice operator ne baaki ka part orignal array se remove hi kardiya


