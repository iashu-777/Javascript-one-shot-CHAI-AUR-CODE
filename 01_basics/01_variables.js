const accountId=5144553
let accountEmail="ashu@google.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState; 

// accountId=2 //not allowed 
accountEmail="hc@hc.com"
accountPassword="21212121"
accountCity="begaluru"
console.log(accountId)

/*prefer not to use var , 
because of issue in block scope and functional scope*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])