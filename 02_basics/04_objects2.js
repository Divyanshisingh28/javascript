// non singleton object 
/* const div = new Object()
div.age = 18
console.log(div) */

const TinderUser = {
    id : "123abc",
    name : "divyanshi",
    age :  20,
    isloggedin :  false,
    FullName : {  // object in object
        FirstName: {
            name: "divyanshi"
        },
        SecondName: {
            name: "singh"
        }
    }
}
//console.log(TinderUser)
console.log(TinderUser.FullName.FirstName.name) // we can access as nested objects as we want just by writing .
// console.log(TinderUser.FullName?.FirstName.name)  used in advanced ki agar value present hai tab hi access hoga , api se question karta hai 

// combining two objects method 1
const numb = {1:"a",2:"b"}
const numb2 = {3:"c", 4:"d"}
const numb3 ={...numb,...numb2} // this is used the most (spread)
//const numb3 ={numb,numb2}  object ke andar object aayega 
console.log(numb3)

// combinming two objects metgod 2
const numb4 = {1:"abc",2:"bcd"}
const numb5 = {3:"cde", 4:"def"}
const numb6 = Object.assign({},numb4,numb5)
                        // target, source  {} becomes the target and usme baaki arrays yaani source jaate hain
console.log(numb6)

//objects in array 
const arr = [
    obj1={
        id : 124,
        email: "hs@gmail"
    },
    obj2 ={
        id : 178,
        email: "mn@gmail"

    },
    obj3 = {
        id : 168,
        email: "ds@gmail"
    }
]
console.log(arr[1].email)

//object method 
console.log(Object.keys(TinderUser)) // returns the value in the form of an array
console.log(Object.values(TinderUser))
console.log(Object.entries(TinderUser))
console.log(TinderUser.hasOwnProperty("isnot"))  // to check if an object has this key or not 