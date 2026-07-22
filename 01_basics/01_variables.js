const accountId = 12345
let accountEmail = "divy@gmail"
var accountPassword = "676789"
accountCity = "jaipur"
let accountState; // undefined show hoga 

//accountId = 45689 // we can not change the const 
accountEmail = "divdob@gmail" // we can change let
accountPassword = "456710" // we can change var
// dont use var , issue in block 

console.log(accountEmail)
console.log(accountId)
console.log(accountPassword)
console.log(accountCity)
console.table([accountId,accountEmail,accountCity,accountPassword,accountState])