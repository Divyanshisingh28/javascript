const arr = [1,2,3,4,5]
const name = ["riyan","riro","my love"]
const arr1 =[5,5,5,6,78,8,8]
const arr2=[67,101,101]

arr.push(name) // array me hi array push hogya 
// because array koi bhi data leleta hai isne ek array ko bhi as a data leliya 
console.log(arr) 
console.log(arr.length) // 6 elements 

// concat : it returns an array after merging two arrays
const another = arr1.concat(arr2)
console.log(another)
console.log(another.length)
// but this method is not preffered instead 

// spread operator 
const new1 = [...arr,...name]

const new_array = [1,2,4,5,5,[3,45,67,1],[568,12,[1,2,3]]]
console.log(new_array.flat(1)) // we have to define the depth we can give infinity 

console.log(Array.isArray("div"))
console.log(Array.from("divyanshi"))
console.log(Array.from({name:"div"}))