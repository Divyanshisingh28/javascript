// reduce :- used for addition in an array 
const mynumbs = [1,2,3]
                 // gives accumulator and current value as arguments 
const total = mynumbs.reduce((acc,curr) =>{
    console.log(`the value of acc: ${acc} and the value of curr: ${curr}`)
   return acc + curr
},0) // 0 is acc ki 1st value its like calculating sum 
console.log(total)

const arr2 = [1,2,3,4,5,7]
const total2 = arr2.reduce((acc,curr)=>acc+curr,0)
console.log(total2)

const shoppingcart =[
    {
        name: "js course",
        price:2899
    },
     {
        name: "html course",
        price:1200
    },
     {
        name: "py course",
        price:2299
    }

]
//current value is the key  , accumulator is sum starting from 0 
const totalprice = shoppingcart.reduce((acc,item) => acc+ item.price,0)
console.log(totalprice) 
                              