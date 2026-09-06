// iterations in object
const MyObject ={
    js: "javascript",
    html: "hyper text markup lang",
    css:"cascading style sheet" 
}

//forin loop 
for (const key in MyObject) { // key is used to access the keys in object 
    console.log(`${key} :- ${MyObject[key]}`)
}

//forin loop for arrays 
const arr = ["iron man, shang chi, black panther"]
for (const key in arr) {
    console.log(arr[key])
}

//forin loop me keys aati hain jisse hum objects access kar skte hain
// maps pe iteration nahi kiya jaa skta using forin loop