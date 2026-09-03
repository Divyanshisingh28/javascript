// for

for(let i = 0 ; i <= 10 ; i ++){
    var index = i
}
//console.log(index) // index is accessible outside too because of var 

const arr = ["divyanshi","riyan","we are bestf"]

for(let i = 0 ; i < arr.length ; i++){
   // console.log(arr[i])
}

// break and continue 

//print 1 to 10 except 5 using one loop
for(let i = 1 ; i <11 ; i++ ) {
    if(i===5) continue
    //console.log(i)
}

//print 1 to 4 and break at 5
for(let i = 1 ; i <11 ; i++ ) {
    if(i===5) break
   // console.log(i)
}

//while
let j = 0
while(j < 30){
    console.log(j)
    j = j+3
}

const myarr = ["hello","beautiful","how","are","you"]
let one = 0
while(one<myarr.length){
    console.log(myarr[one])
    one++;
}
let score = 1;
do{
    console.log(score)
    score++
}while(score<1) // pehle loop run hota hai and at last condition check hoti hai tab loop rukta hai 
