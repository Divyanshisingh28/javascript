const mynumbs = [1,2,3,4,5,6,7,8,9,10 ]
const x = mynumbs.filter((key) => key>5)
console.log(x)

//maps 
const y = mynumbs.map((num) => num + 10) //its like filters
console.log(y)

//chaining:- using multiple methods at once
const z = mynumbs
.map((num) => num * 10) //(array change hojaata hai iss point pe)
.filter((key) => key > 20) // filter ka kaam hota hai orignal elements ko manipulate karna , elemente remove karna acc to the condition
.map((num) =>{ return num <80} ) // true and false dega ye , maps ka kaam hota hai ki jo bhi value aarhi hai usse array me store kare < > operators se true and false aayegi
console.log(z)