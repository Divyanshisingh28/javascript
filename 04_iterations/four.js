//for each loop (most used loop in arrays)

const arr1 = [177,800,766,34,1,24556]
arr1.forEach( function (key){
   // console.log(key)
})
arr1.forEach((name) => {
    console.log(name)
})

function printme(arr){
    console.log(arr)
}
arr1.forEach(printme) // function reference deke print karna

//other parameters are also there in for each loop
arr1.forEach( (name1,index,array) =>{
    console.log(index,name1,array)

}
)

//objects in array 
const myarr =[
    {
        firstname: "divyanshi",
        lastname: "singh"
    },
    {
        college:"igdtuw",
         course:"btech cse ai"
    },
    {
        hobby:"sleeping lol"
        
    }
]
myarr.forEach((key) => {
    console.log(key.firstname)
})